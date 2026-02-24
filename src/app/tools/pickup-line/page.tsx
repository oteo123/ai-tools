import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Pickup Line Generator — Free AI Tool | AI Tools Pro",
  description: "Generate clever, funny, or smooth pickup lines. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Pickup Line Generator — Free AI Tool | AI Tools Pro",
    description: "Generate clever, funny, or smooth pickup lines. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/pickup-line",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pickup Line Generator — Free AI Tool | AI Tools Pro",
    description: "Generate clever, funny, or smooth pickup lines. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
