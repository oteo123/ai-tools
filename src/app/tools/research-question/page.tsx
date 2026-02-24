import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Research Question Generator — Free AI Tool | AI Tools Pro",
  description: "Develop focused, researchable questions for academic work. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Research Question Generator — Free AI Tool | AI Tools Pro",
    description: "Develop focused, researchable questions for academic work. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/research-question",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Question Generator — Free AI Tool | AI Tools Pro",
    description: "Develop focused, researchable questions for academic work. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
