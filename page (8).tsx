import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact", languages: { en: "/contact", de: "/de/kontakt", fr: "/fr/contact" } },
};

export default function Page() {
  return <ContactPage locale="en" />;
}
