import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "AI Email Writer — Free AI Tool | AI Tools Pro",
  description: "Write professional emails in seconds. Just describe what you need. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "AI Email Writer — Free AI Tool | AI Tools Pro",
    description: "Write professional emails in seconds. Just describe what you need. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/email-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Writer — Free AI Tool | AI Tools Pro",
    description: "Write professional emails in seconds. Just describe what you need. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
