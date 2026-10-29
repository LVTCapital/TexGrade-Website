import type { Metadata } from "next";
import { CompanyPage } from "@/components/pages/company-page";

export const metadata: Metadata = {
  title: "Company",
  alternates: { canonical: "/en/company", languages: { de: "/unternehmen", en: "/en/company" } },
};

export default function Page() {
  return <CompanyPage locale="en" />;
}
