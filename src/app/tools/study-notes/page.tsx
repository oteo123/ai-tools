import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Study Notes Generator — Free AI Tool | AI Tools Pro",
  description: "Generate comprehensive, well-organized study notes on any topic. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Study Notes Generator — Free AI Tool | AI Tools Pro",
    description: "Generate comprehensive, well-organized study notes on any topic. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/study-notes",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Notes Generator — Free AI Tool | AI Tools Pro",
    description: "Generate comprehensive, well-organized study notes on any topic. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
