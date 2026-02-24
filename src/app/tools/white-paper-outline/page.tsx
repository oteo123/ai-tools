import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "White Paper Outline Generator — Free AI Tool | AI Tools Pro",
  description: "Create structured white paper outlines for thought leadership. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "White Paper Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Create structured white paper outlines for thought leadership. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/white-paper-outline",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Paper Outline Generator — Free AI Tool | AI Tools Pro",
    description: "Create structured white paper outlines for thought leadership. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
