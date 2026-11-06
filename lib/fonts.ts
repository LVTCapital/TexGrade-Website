import { Inter, Inter_Tight } from "next/font/google";

// Self-hosted at build time: no requests to Google from visitors' browsers.
export const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const displayFont = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const fontClassName = `${bodyFont.variable} ${displayFont.variable}`;
