import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Legal notice",
  alternates: { canonical: "/en/legal-notice", languages: { de: "/impressum", en: "/en/legal-notice" } },
};

export default function Page() {
  return <LegalNoticePage locale="en" />;
}
