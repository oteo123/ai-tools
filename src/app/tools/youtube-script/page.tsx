import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "YouTube Script Generator — Free AI Tool | AI Tools Pro",
  description: "Engaging scripts that keep viewers watching. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "YouTube Script Generator — Free AI Tool | AI Tools Pro",
    description: "Engaging scripts that keep viewers watching. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/youtube-script",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Script Generator — Free AI Tool | AI Tools Pro",
    description: "Engaging scripts that keep viewers watching. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
