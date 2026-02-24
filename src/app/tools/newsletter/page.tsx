import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Newsletter Generator — Free AI Tool | AI Tools Pro",
  description: "Create engaging email newsletters that get opened and read. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Newsletter Generator — Free AI Tool | AI Tools Pro",
    description: "Create engaging email newsletters that get opened and read. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/newsletter",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter Generator — Free AI Tool | AI Tools Pro",
    description: "Create engaging email newsletters that get opened and read. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
