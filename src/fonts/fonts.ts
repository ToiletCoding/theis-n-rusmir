import localFont from "next/font/local";
import { Anton, Fraunces } from "next/font/google";

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

// Bold condensed impact face — used sparingly for stamps and ghost numerals,
// a lowkey nod to hardcore-streetwear branding (Stay Cold Apparel etc).
export const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
  weight: "400",
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
});
