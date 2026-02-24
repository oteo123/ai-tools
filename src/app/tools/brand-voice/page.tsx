import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Brand Voice Guide Generator — Free AI Tool | AI Tools Pro",
  description: "Define your brand's unique voice and tone guidelines. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Brand Voice Guide Generator — Free AI Tool | AI Tools Pro",
    description: "Define your brand's unique voice and tone guidelines. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/brand-voice",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Voice Guide Generator — Free AI Tool | AI Tools Pro",
    description: "Define your brand's unique voice and tone guidelines. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
