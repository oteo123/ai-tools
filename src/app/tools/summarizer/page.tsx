import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Text Summarizer — Free AI Tool | AI Tools Pro",
  description: "Condense long text into key points. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Text Summarizer — Free AI Tool | AI Tools Pro",
    description: "Condense long text into key points. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/summarizer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Summarizer — Free AI Tool | AI Tools Pro",
    description: "Condense long text into key points. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
