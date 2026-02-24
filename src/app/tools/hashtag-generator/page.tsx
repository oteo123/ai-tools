import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Hashtag Generator — Free AI Tool | AI Tools Pro",
  description: "Trending hashtags for maximum reach. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Hashtag Generator — Free AI Tool | AI Tools Pro",
    description: "Trending hashtags for maximum reach. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/hashtag-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashtag Generator — Free AI Tool | AI Tools Pro",
    description: "Trending hashtags for maximum reach. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
