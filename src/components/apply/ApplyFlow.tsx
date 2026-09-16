"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Notation } from "@/components/ui/Notation";
import { cn } from "@/lib/cn";

type FieldType = "text" | "number" | "email" | "textarea" | "choice";

type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  type: FieldType;
  placeholder?: string;
  choices?: string[];
  optional?: boolean;
};

const questions: Question[] = [
  { id: "name", eyebrow: "Let's start simple", prompt: "What's your name?", type: "text", placeholder: "Full name" },
  { id: "age", eyebrow: "Housekeeping", prompt: "How old are you?", type: "number", placeholder: "Age" },
  { id: "email", eyebrow: "So we can reach you", prompt: "Best email to reach you?", type: "email", placeholder: "you@email.com" },
  { id: "instagram", eyebrow: "Optional", prompt: "Instagram handle?", type: "text", placeholder: "@yourhandle", optional: true },
  {
    id: "experience",
    eyebrow: "Training background",
    prompt: "What's your current training experience?",
    type: "textarea",
    placeholder: "e.g. 6 months lifting on and off, never followed a real program...",
  },
  {
    id: "goal",
    eyebrow: "The destination",
    prompt: "What's your primary goal?",
    type: "text",
    placeholder: "e.g. build muscle, lean out, compete",
  },
  {
    id: "obstacle",
    eyebrow: "Be honest",
    prompt: "What's your biggest obstacle right now?",
    type: "textarea",
    placeholder: "Time, consistency, knowing what to do, something else...",
  },
  {
    id: "daysPerWeek",
    eyebrow: "Realistically",
    prompt: "How many days a week can you train?",
    type: "choice",
    choices: ["1–2", "3–4", "5–6", "7"],
  },
  {
    id: "why",
    eyebrow: "The real reason",
    prompt: "Why do you want coaching?",
    type: "textarea",
    placeholder: "Whatever's true — we'd rather know now.",
  },
  {
    id: "commit",
    eyebrow: "Last one",
    prompt: "Ready to commit for at least 12 weeks?",
    type: "choice",
    choices: ["Yes", "Not yet"],
  },
];

type FormState = Record<string, string>;

const EASE = [0.16, 1, 0.3, 1] as const;

export function ApplyFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduceMotion = useReducedMotion();
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const value = form[question?.id ?? ""] ?? "";

  const canAdvance = useMemo(() => {
    if (question?.optional) return true;
    return value.trim().length > 0;
  }, [question, value]);

  function updateValue(next: string) {
    setForm((f) => ({ ...f, [question.id]: next }));
  }

  function goNext() {
    if (!canAdvance) return;
    if (isLast) {
      // Frontend-only prototype: log the payload instead of submitting anywhere.
      console.log("Coaching application submitted:", form);
      setSubmitted(true);
      return;
    }
    setDirection(1);
    setStep((s) => Math.min(s + 1, questions.length - 1));
  }

  function goBack() {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey && question.type !== "textarea") {
      e.preventDefault();
      goNext();
    }
    if (e.key === "Enter" && e.shiftKey === false && question.type === "textarea" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      goNext();
    }
  }

  if (submitted) {
    return (
      <section className="bg-navy flex min-h-[100svh] flex-col items-center justify-center text-off-white">
        <Container className="text-center">
          <Notation items={["APPLICATION", "RECEIVED"]} tone="light" className="mb-8 opacity-70" />
          <h1 className="font-display text-display-2 mx-auto max-w-[16ch]">
            Thanks, {form.name || "friend"}. We&apos;ll be in touch.
          </h1>
          <p className="text-lede mx-auto mt-8 max-w-[42ch] text-steel">
            Theis and Rusmir read every application themselves. Expect to hear back within a
            few days — check your inbox (and spam, just in case).
          </p>
          <Link href="/" className="notation stamp-badge rotate-slight-reverse mt-14 inline-flex bg-off-white px-6 py-3 text-near-black">
            Back to the pursuit
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-off-white relative isolate flex min-h-[100svh] flex-col text-near-black">
      <Container className="flex flex-1 flex-col py-8 md:py-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="notation text-near-black/50 hover:text-near-black">
            &#8592; Back to site
          </Link>
          <Notation
            items={[`${String(step + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`]}
            className="text-near-black/50"
          />
        </div>

        {/* Progress rule: fills left-to-right as the applicant advances. */}
        <div className="bg-near-black/10 relative mt-6 h-px w-full md:mt-10">
          <div
            className="bg-near-black absolute top-0 left-0 h-px transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-1 flex-col justify-center py-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={question.id}
              custom={direction}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 24 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 * direction }}
              transition={{ duration: reduceMotion ? 0.15 : 0.4, ease: EASE }}
            >
              <p className="notation mb-4 text-near-black/40">{question.eyebrow}</p>
              <h1 className="font-display text-display-3 max-w-[20ch]">
                {question.prompt}
                {question.optional && (
                  <span className="text-near-black/35 text-lg"> (optional)</span>
                )}
              </h1>

              <div className="mt-10 max-w-xl md:mt-14">
                {question.type === "choice" ? (
                  <div className="flex flex-wrap gap-4">
                    {question.choices!.map((choice) => {
                      const selected = value === choice;
                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => {
                            updateValue(choice);
                          }}
                          className={cn(
                            "notation border-2 px-6 py-4 transition-colors duration-200",
                            selected
                              ? "border-near-black bg-near-black text-off-white"
                              : "border-near-black/25 text-near-black hover:border-near-black",
                          )}
                        >
                          {choice}
                        </button>
                      );
                    })}
                  </div>
                ) : question.type === "textarea" ? (
                  <textarea
                    ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                    autoFocus
                    rows={3}
                    value={value}
                    onChange={(e) => updateValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={question.placeholder}
                    className="text-lede placeholder:text-near-black/30 w-full resize-none border-b-2 border-near-black/25 bg-transparent py-3 outline-none focus:border-near-black"
                  />
                ) : (
                  <input
                    ref={inputRef as React.RefObject<HTMLInputElement>}
                    autoFocus
                    type={question.type}
                    value={value}
                    onChange={(e) => updateValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={question.placeholder}
                    className="text-lede placeholder:text-near-black/30 w-full border-b-2 border-near-black/25 bg-transparent py-3 outline-none focus:border-near-black"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between pt-6">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="notation text-near-black/50 hover:text-near-black disabled:opacity-0"
          >
            &#8592; Back
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canAdvance}
            className="stamp-badge rotate-slight notation inline-flex bg-near-black px-8 py-4 text-off-white transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
          >
            {isLast ? "Submit application" : "Next"}
          </button>
        </div>
      </Container>
    </section>
  );
}
