import type { Metadata } from "next";
import { LegalNoticePage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: "/impressum", languages: { de: "/impressum", en: "/en/legal-notice" } },
};

export default function Page() {
  return <LegalNoticePage locale="de" />;
}
