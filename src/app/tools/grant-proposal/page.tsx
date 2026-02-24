import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Grant Proposal Generator — Free AI Tool | AI Tools Pro",
  description: "Write compelling grant proposals that secure funding. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Grant Proposal Generator — Free AI Tool | AI Tools Pro",
    description: "Write compelling grant proposals that secure funding. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/grant-proposal",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grant Proposal Generator — Free AI Tool | AI Tools Pro",
    description: "Write compelling grant proposals that secure funding. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
