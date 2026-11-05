import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/fr/mentions-legales", languages: { en: "/legal-notice", de: "/de/impressum", fr: "/fr/mentions-legales" } },
};

export default function Page() {
  return <LegalNoticePage locale="fr" />;
}
