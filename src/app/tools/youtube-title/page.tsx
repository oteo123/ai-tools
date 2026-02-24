import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "YouTube Title Generator — Free AI Tool | AI Tools Pro",
  description: "Generate click-worthy YouTube titles that boost views. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "YouTube Title Generator — Free AI Tool | AI Tools Pro",
    description: "Generate click-worthy YouTube titles that boost views. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/youtube-title",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Title Generator — Free AI Tool | AI Tools Pro",
    description: "Generate click-worthy YouTube titles that boost views. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
