import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/en/services", languages: { de: "/leistungen", en: "/en/services" } },
};

export default function Page() {
  return <ServicesPage locale="en" />;
}
