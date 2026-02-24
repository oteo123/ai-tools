import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Tweet / X Post Writer — Free AI Tool | AI Tools Pro",
  description: "Viral tweets crafted by AI. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Tweet / X Post Writer — Free AI Tool | AI Tools Pro",
    description: "Viral tweets crafted by AI. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/tweet-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tweet / X Post Writer — Free AI Tool | AI Tools Pro",
    description: "Viral tweets crafted by AI. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
