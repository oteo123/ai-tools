import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Journal Prompt Generator — Free AI Tool | AI Tools Pro",
  description: "Get thoughtful journal prompts for self-reflection and growth. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Journal Prompt Generator — Free AI Tool | AI Tools Pro",
    description: "Get thoughtful journal prompts for self-reflection and growth. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/journal-prompt",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal Prompt Generator — Free AI Tool | AI Tools Pro",
    description: "Get thoughtful journal prompts for self-reflection and growth. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
