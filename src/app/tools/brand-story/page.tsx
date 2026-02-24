import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Brand Story Generator — Free AI Tool | AI Tools Pro",
  description: "Craft a compelling origin story for your brand. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Brand Story Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a compelling origin story for your brand. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/brand-story",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Story Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a compelling origin story for your brand. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
