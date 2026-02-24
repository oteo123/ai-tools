import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Interview Questions Generator — Free AI Tool | AI Tools Pro",
  description: "Generate targeted interview questions for any role. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Interview Questions Generator — Free AI Tool | AI Tools Pro",
    description: "Generate targeted interview questions for any role. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/interview-questions",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview Questions Generator — Free AI Tool | AI Tools Pro",
    description: "Generate targeted interview questions for any role. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
