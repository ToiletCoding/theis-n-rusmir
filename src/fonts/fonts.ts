import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

export const generalSans = localFont({
  src: [
    {
      path: "./GeneralSans-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
    {
      path: "./GeneralSans-VariableItalic.woff2",
      weight: "200 700",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});
