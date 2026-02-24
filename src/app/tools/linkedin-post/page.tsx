import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "LinkedIn Post Generator — Free AI Tool | AI Tools Pro",
  description: "Professional posts that build your brand. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "LinkedIn Post Generator — Free AI Tool | AI Tools Pro",
    description: "Professional posts that build your brand. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/linkedin-post",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkedIn Post Generator — Free AI Tool | AI Tools Pro",
    description: "Professional posts that build your brand. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
