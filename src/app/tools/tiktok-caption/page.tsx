import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "TikTok Caption Generator — Free AI Tool | AI Tools Pro",
  description: "Write scroll-stopping TikTok captions with viral potential. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "TikTok Caption Generator — Free AI Tool | AI Tools Pro",
    description: "Write scroll-stopping TikTok captions with viral potential. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/tiktok-caption",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Caption Generator — Free AI Tool | AI Tools Pro",
    description: "Write scroll-stopping TikTok captions with viral potential. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
