import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Text Paraphraser — Free AI Tool | AI Tools Pro",
  description: "Rewrite text while keeping the meaning. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Text Paraphraser — Free AI Tool | AI Tools Pro",
    description: "Rewrite text while keeping the meaning. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/paraphraser",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Paraphraser — Free AI Tool | AI Tools Pro",
    description: "Rewrite text while keeping the meaning. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
