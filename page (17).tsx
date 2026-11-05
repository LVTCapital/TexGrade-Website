import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/company-page";

export const metadata: Metadata = {
  title: "Entreprise",
  alternates: { canonical: "/fr/entreprise", languages: { en: "/company", de: "/de/unternehmen", fr: "/fr/entreprise" } },
};

export default function Page() {
  return <CompanyPage locale="fr" />;
}
