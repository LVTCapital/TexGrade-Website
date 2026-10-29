import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  alternates: { canonical: "/fr", languages: { en: "/", de: "/de", fr: "/fr" } },
};

export default function Page() {
  return <HomePage locale="fr" />;
}
