import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "AI Story Generator — Free AI Tool | AI Tools Pro",
  description: "Generate captivating short fiction stories instantly. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "AI Story Generator — Free AI Tool | AI Tools Pro",
    description: "Generate captivating short fiction stories instantly. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/story-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Story Generator — Free AI Tool | AI Tools Pro",
    description: "Generate captivating short fiction stories instantly. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
