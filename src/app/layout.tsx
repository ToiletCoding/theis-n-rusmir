import type { Metadata } from "next";
import { fraunces, generalSans } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theis n' Rusmir — The Pursuit",
  description:
    "Online coaching from Copenhagen. Building a physique you're proud of, and the confidence to match.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${generalSans.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
