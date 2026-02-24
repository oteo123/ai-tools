import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "SEO Meta Description Generator — Free AI Tool | AI Tools Pro",
  description: "Click-worthy meta descriptions for better rankings. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "SEO Meta Description Generator — Free AI Tool | AI Tools Pro",
    description: "Click-worthy meta descriptions for better rankings. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/seo-meta",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Meta Description Generator — Free AI Tool | AI Tools Pro",
    description: "Click-worthy meta descriptions for better rankings. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
