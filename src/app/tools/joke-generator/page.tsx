import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Joke Generator — Free AI Tool | AI Tools Pro",
  description: "Generate hilarious jokes on any topic. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Joke Generator — Free AI Tool | AI Tools Pro",
    description: "Generate hilarious jokes on any topic. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/joke-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joke Generator — Free AI Tool | AI Tools Pro",
    description: "Generate hilarious jokes on any topic. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
