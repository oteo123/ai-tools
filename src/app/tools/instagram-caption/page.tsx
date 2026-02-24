import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Instagram Caption Generator — Free AI Tool | AI Tools Pro",
  description: "Engaging captions that drive likes and comments. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Instagram Caption Generator — Free AI Tool | AI Tools Pro",
    description: "Engaging captions that drive likes and comments. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/instagram-caption",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Caption Generator — Free AI Tool | AI Tools Pro",
    description: "Engaging captions that drive likes and comments. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
