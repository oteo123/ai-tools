import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Sales Script Generator — Free AI Tool | AI Tools Pro",
  description: "Write persuasive sales scripts that close deals. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Sales Script Generator — Free AI Tool | AI Tools Pro",
    description: "Write persuasive sales scripts that close deals. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/sales-script",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Script Generator — Free AI Tool | AI Tools Pro",
    description: "Write persuasive sales scripts that close deals. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
