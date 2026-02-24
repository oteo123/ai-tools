import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Thank You Note Generator — Free AI Tool | AI Tools Pro",
  description: "Thoughtful thank-you notes for any occasion. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Thank You Note Generator — Free AI Tool | AI Tools Pro",
    description: "Thoughtful thank-you notes for any occasion. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/thank-you-note",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You Note Generator — Free AI Tool | AI Tools Pro",
    description: "Thoughtful thank-you notes for any occasion. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
