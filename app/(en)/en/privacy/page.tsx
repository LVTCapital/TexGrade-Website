import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/legal-page";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/en/privacy", languages: { de: "/datenschutz", en: "/en/privacy" } },
};

export default function Page() {
  return <PrivacyPage locale="en" />;
}
