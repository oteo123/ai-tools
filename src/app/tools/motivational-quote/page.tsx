import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Motivational Quote Generator — Free AI Tool | AI Tools Pro",
  description: "Generate powerful, original motivational quotes. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Motivational Quote Generator — Free AI Tool | AI Tools Pro",
    description: "Generate powerful, original motivational quotes. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/motivational-quote",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivational Quote Generator — Free AI Tool | AI Tools Pro",
    description: "Generate powerful, original motivational quotes. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
