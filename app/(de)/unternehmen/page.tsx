import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/company-page";

export const metadata: Metadata = {
  title: "Unternehmen",
  alternates: { canonical: "/unternehmen", languages: { de: "/unternehmen", en: "/en/company" } },
};

export default function Page() {
  return <CompanyPage locale="de" />;
}
