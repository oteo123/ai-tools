import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Value Proposition Generator — Free AI Tool | AI Tools Pro",
  description: "Craft a clear, compelling value proposition. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Value Proposition Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a clear, compelling value proposition. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/value-proposition",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Proposition Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a clear, compelling value proposition. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
