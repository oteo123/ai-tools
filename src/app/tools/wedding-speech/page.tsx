import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Wedding Speech Generator — Free AI Tool | AI Tools Pro",
  description: "Write a heartfelt wedding speech they'll remember forever. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Wedding Speech Generator — Free AI Tool | AI Tools Pro",
    description: "Write a heartfelt wedding speech they'll remember forever. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/wedding-speech",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Speech Generator — Free AI Tool | AI Tools Pro",
    description: "Write a heartfelt wedding speech they'll remember forever. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
