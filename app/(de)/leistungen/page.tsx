import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Leistungen",
  alternates: { canonical: "/leistungen", languages: { de: "/leistungen", en: "/en/services" } },
};

export default function Page() {
  return <ServicesPage locale="de" />;
}
