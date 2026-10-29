import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/company-page";

export const metadata: Metadata = {
  title: "Unternehmen",
  alternates: { canonical: "/de/unternehmen", languages: { en: "/company", de: "/de/unternehmen", fr: "/fr/entreprise" } },
};

export default function Page() {
  return <CompanyPage locale="de" />;
}
