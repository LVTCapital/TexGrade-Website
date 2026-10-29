import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Confidentialité",
  alternates: { canonical: "/fr/confidentialite", languages: { en: "/privacy", de: "/de/datenschutz", fr: "/fr/confidentialite" } },
};

export default function Page() {
  return <PrivacyPage locale="fr" />;
}
