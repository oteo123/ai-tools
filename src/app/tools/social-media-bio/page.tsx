import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Social Media Bio Generator — Free AI Tool | AI Tools Pro",
  description: "Craft a standout social media bio that captures who you are. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Social Media Bio Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a standout social media bio that captures who you are. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/social-media-bio",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Bio Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a standout social media bio that captures who you are. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
