"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds of delay before the reveal starts. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "below" | "left" | "right" | "none";
  as?: "div" | "section" | "li" | "span" | "figure";
};

const offsets = {
  below: { x: 0, y: 28 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  from = "below",
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[from];
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.2 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds between each child's reveal. */
  step?: number;
  as?: "div" | "ul" | "ol";
};

/** Wrap RevealItem children to cascade them in sequence. */
export function Stagger({ children, className, step = 0.09, as = "div" }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduceMotion ? 0 : step },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span" | "p";
};

export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn(className)}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0.2 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
