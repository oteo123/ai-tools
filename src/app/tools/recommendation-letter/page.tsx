import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Recommendation Letter Generator — Free AI Tool | AI Tools Pro",
  description: "Write compelling recommendation letters. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Recommendation Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Write compelling recommendation letters. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/recommendation-letter",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recommendation Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Write compelling recommendation letters. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
