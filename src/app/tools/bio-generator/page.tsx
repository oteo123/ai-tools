import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Professional Bio Generator — Free AI Tool | AI Tools Pro",
  description: "Polished bios for any platform. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Professional Bio Generator — Free AI Tool | AI Tools Pro",
    description: "Polished bios for any platform. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/bio-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Bio Generator — Free AI Tool | AI Tools Pro",
    description: "Polished bios for any platform. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
