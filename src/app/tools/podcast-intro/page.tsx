import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Podcast Intro Script Generator — Free AI Tool | AI Tools Pro",
  description: "Write a compelling podcast intro that hooks listeners instantly. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Podcast Intro Script Generator — Free AI Tool | AI Tools Pro",
    description: "Write a compelling podcast intro that hooks listeners instantly. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/podcast-intro",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Intro Script Generator — Free AI Tool | AI Tools Pro",
    description: "Write a compelling podcast intro that hooks listeners instantly. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
