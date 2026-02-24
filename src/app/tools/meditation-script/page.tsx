import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Meditation Script Generator — Free AI Tool | AI Tools Pro",
  description: "Create guided meditation scripts for relaxation and mindfulness. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Meditation Script Generator — Free AI Tool | AI Tools Pro",
    description: "Create guided meditation scripts for relaxation and mindfulness. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/meditation-script",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditation Script Generator — Free AI Tool | AI Tools Pro",
    description: "Create guided meditation scripts for relaxation and mindfulness. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
