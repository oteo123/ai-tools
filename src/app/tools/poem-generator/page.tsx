import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "AI Poem Generator — Free AI Tool | AI Tools Pro",
  description: "Create beautiful poems in any style. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "AI Poem Generator — Free AI Tool | AI Tools Pro",
    description: "Create beautiful poems in any style. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/poem-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Poem Generator — Free AI Tool | AI Tools Pro",
    description: "Create beautiful poems in any style. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
