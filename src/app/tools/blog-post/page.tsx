import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Blog Post Generator — Free AI Tool | AI Tools Pro",
  description: "Full SEO-optimized blog posts from a single topic. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Blog Post Generator — Free AI Tool | AI Tools Pro",
    description: "Full SEO-optimized blog posts from a single topic. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/blog-post",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Post Generator — Free AI Tool | AI Tools Pro",
    description: "Full SEO-optimized blog posts from a single topic. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
