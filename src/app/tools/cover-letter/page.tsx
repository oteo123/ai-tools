import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Cover Letter Generator — Free AI Tool | AI Tools Pro",
  description: "Personalized cover letters in seconds. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Cover Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Personalized cover letters in seconds. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/cover-letter",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cover Letter Generator — Free AI Tool | AI Tools Pro",
    description: "Personalized cover letters in seconds. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
