import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Business Proposal Generator — Free AI Tool | AI Tools Pro",
  description: "Write persuasive business proposals that win clients. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Business Proposal Generator — Free AI Tool | AI Tools Pro",
    description: "Write persuasive business proposals that win clients. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/proposal-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Proposal Generator — Free AI Tool | AI Tools Pro",
    description: "Write persuasive business proposals that win clients. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
