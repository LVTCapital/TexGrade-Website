import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Purchasing & Sales",
  alternates: { canonical: "/services", languages: { en: "/services", de: "/de/leistungen", fr: "/fr/services" } },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
