import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Call-to-Action Generator — Free AI Tool | AI Tools Pro",
  description: "Generate high-converting CTAs for any context. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Call-to-Action Generator — Free AI Tool | AI Tools Pro",
    description: "Generate high-converting CTAs for any context. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/cta-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call-to-Action Generator — Free AI Tool | AI Tools Pro",
    description: "Generate high-converting CTAs for any context. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
