import type { Metadata } from "next";
import ContactClient from "@/components/animated/ContactClient";

export const metadata: Metadata = {
  title: "Connect with Care | Nilachal Hospital & Research Centre",
  description: "Reach out to our sanctuary of healing. 24/7 compassionate emergency support, guided appointment booking, and our location in the heart of Kokrajhar.",
};

export default function ContactPage() {
  return <ContactClient />;
}
