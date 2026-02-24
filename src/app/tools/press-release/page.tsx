import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Press Release Generator — Free AI Tool | AI Tools Pro",
  description: "Newsworthy press releases in minutes. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Press Release Generator — Free AI Tool | AI Tools Pro",
    description: "Newsworthy press releases in minutes. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/press-release",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Release Generator — Free AI Tool | AI Tools Pro",
    description: "Newsworthy press releases in minutes. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
