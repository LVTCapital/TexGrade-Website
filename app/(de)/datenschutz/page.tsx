import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Datenschutz",
  alternates: { canonical: "/datenschutz", languages: { de: "/datenschutz", en: "/en/privacy" } },
};

export default function Page() {
  return <PrivacyPage locale="de" />;
}
