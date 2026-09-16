import type { Metadata } from "next";
import { ApplyFlow } from "@/components/apply/ApplyFlow";

export const metadata: Metadata = {
  title: "Apply for coaching — Theis n' Rusmir",
  description: "Apply for 1:1 online coaching with Theis and Rusmir.",
};

export default function ApplyPage() {
  return <ApplyFlow />;
}
