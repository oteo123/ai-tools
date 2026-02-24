import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Ad Copy Generator — Free AI Tool | AI Tools Pro",
  description: "High-converting ad copy for any platform. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Ad Copy Generator — Free AI Tool | AI Tools Pro",
    description: "High-converting ad copy for any platform. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/ad-copy",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Copy Generator — Free AI Tool | AI Tools Pro",
    description: "High-converting ad copy for any platform. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
