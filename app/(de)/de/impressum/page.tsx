import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/de/impressum", languages: { en: "/legal-notice", de: "/de/impressum", fr: "/fr/mentions-legales" } },
};

export default function Page() {
  return <LegalNoticePage locale="de" />;
}
