import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Podcast Outline Generator — Free AI Tool | AI Tools Pro",
  description: "Plan structured podcast episodes that keep listeners engaged. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Podcast Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Plan structured podcast episodes that keep listeners engaged. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/podcast-outline",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Plan structured podcast episodes that keep listeners engaged. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
