import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "FAQ Generator — Free AI Tool | AI Tools Pro",
  description: "Generate comprehensive FAQ sections for your product or service. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "FAQ Generator — Free AI Tool | AI Tools Pro",
    description: "Generate comprehensive FAQ sections for your product or service. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/faq-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Generator — Free AI Tool | AI Tools Pro",
    description: "Generate comprehensive FAQ sections for your product or service. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
