import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Tagline Generator — Free AI Tool | AI Tools Pro",
  description: "Generate memorable taglines and slogans for your brand. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Tagline Generator — Free AI Tool | AI Tools Pro",
    description: "Generate memorable taglines and slogans for your brand. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/tagline-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tagline Generator — Free AI Tool | AI Tools Pro",
    description: "Generate memorable taglines and slogans for your brand. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
