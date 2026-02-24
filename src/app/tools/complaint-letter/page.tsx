import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Complaint Letter Generator — Free AI Tool | AI Tools Pro",
  description: "Write effective, professional complaint letters. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Complaint Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Write effective, professional complaint letters. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/complaint-letter",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complaint Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Write effective, professional complaint letters. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
