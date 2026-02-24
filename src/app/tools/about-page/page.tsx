import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "About Page Generator — Free AI Tool | AI Tools Pro",
  description: "Write a compelling About Us page for your website. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "About Page Generator — Free AI Tool | AI Tools Pro",
    description: "Write a compelling About Us page for your website. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/about-page",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Page Generator — Free AI Tool | AI Tools Pro",
    description: "Write a compelling About Us page for your website. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
