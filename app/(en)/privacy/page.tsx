import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", de: "/de/datenschutz", fr: "/fr/confidentialite" } },
};

export default function Page() {
  return <PrivacyPage locale="en" />;
}
