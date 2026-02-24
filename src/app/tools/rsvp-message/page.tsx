import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "RSVP Message Generator — Free AI Tool | AI Tools Pro",
  description: "Write the perfect RSVP response for any event. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "RSVP Message Generator — Free AI Tool | AI Tools Pro",
    description: "Write the perfect RSVP response for any event. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/rsvp-message",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSVP Message Generator — Free AI Tool | AI Tools Pro",
    description: "Write the perfect RSVP response for any event. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
