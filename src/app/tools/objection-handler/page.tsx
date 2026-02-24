import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Sales Objection Handler — Free AI Tool | AI Tools Pro",
  description: "Get proven responses to common sales objections. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Sales Objection Handler — Free AI Tool | AI Tools Pro",
    description: "Get proven responses to common sales objections. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/objection-handler",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Objection Handler — Free AI Tool | AI Tools Pro",
    description: "Get proven responses to common sales objections. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
