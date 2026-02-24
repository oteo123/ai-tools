import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Packing List Generator — Free AI Tool | AI Tools Pro",
  description: "Never forget an essential item with a customized packing list. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Packing List Generator — Free AI Tool | AI Tools Pro",
    description: "Never forget an essential item with a customized packing list. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/packing-list",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packing List Generator — Free AI Tool | AI Tools Pro",
    description: "Never forget an essential item with a customized packing list. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
