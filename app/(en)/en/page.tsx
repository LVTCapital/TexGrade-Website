import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { de: "/", en: "/en" } },
};

export default function Page() {
  return <HomePage locale="en" />;
}
