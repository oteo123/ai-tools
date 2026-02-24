import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Essay Writer — Free AI Tool | AI Tools Pro",
  description: "Write well-structured essays on any topic. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Essay Writer — Free AI Tool | AI Tools Pro",
    description: "Write well-structured essays on any topic. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/essay-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Essay Writer — Free AI Tool | AI Tools Pro",
    description: "Write well-structured essays on any topic. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
