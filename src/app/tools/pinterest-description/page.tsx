import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Pinterest Description Generator — Free AI Tool | AI Tools Pro",
  description: "Write SEO-optimized Pinterest pin descriptions that drive clicks. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Pinterest Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write SEO-optimized Pinterest pin descriptions that drive clicks. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/pinterest-description",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinterest Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write SEO-optimized Pinterest pin descriptions that drive clicks. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
