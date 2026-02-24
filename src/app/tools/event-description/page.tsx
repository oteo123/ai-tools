import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Event Description Generator — Free AI Tool | AI Tools Pro",
  description: "Write event descriptions that fill seats and build excitement. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Event Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write event descriptions that fill seats and build excitement. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/event-description",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write event descriptions that fill seats and build excitement. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
