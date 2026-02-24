import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Case Study Generator — Free AI Tool | AI Tools Pro",
  description: "Write professional case studies that showcase results. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Case Study Generator — Free AI Tool | AI Tools Pro",
    description: "Write professional case studies that showcase results. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/case-study",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study Generator — Free AI Tool | AI Tools Pro",
    description: "Write professional case studies that showcase results. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
