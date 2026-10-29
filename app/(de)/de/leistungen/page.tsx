import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Leistungen",
  alternates: { canonical: "/de/leistungen", languages: { en: "/services", de: "/de/leistungen", fr: "/fr/services" } },
};

export default function Page() {
  return <ServicesPage locale="de" />;
}
