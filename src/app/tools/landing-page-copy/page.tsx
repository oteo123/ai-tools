import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Landing Page Copy Generator — Free AI Tool | AI Tools Pro",
  description: "Write high-converting landing page copy. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Landing Page Copy Generator — Free AI Tool | AI Tools Pro",
    description: "Write high-converting landing page copy. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/landing-page-copy",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page Copy Generator — Free AI Tool | AI Tools Pro",
    description: "Write high-converting landing page copy. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
