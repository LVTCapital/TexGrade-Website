import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Kontakt",
  alternates: { canonical: "/kontakt", languages: { de: "/kontakt", en: "/en/contact" } },
};

export default function Page() {
  return <ContactPage locale="de" />;
}
