import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Ebook Outline Generator — Free AI Tool | AI Tools Pro",
  description: "Plan your ebook with a comprehensive chapter outline. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Ebook Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Plan your ebook with a comprehensive chapter outline. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/ebook-outline",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebook Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Plan your ebook with a comprehensive chapter outline. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
