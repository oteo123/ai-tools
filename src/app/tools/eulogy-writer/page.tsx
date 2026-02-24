import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Eulogy Writer — Free AI Tool | AI Tools Pro",
  description: "Honor a loved one with a meaningful, heartfelt eulogy. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Eulogy Writer — Free AI Tool | AI Tools Pro",
    description: "Honor a loved one with a meaningful, heartfelt eulogy. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/eulogy-writer",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eulogy Writer — Free AI Tool | AI Tools Pro",
    description: "Honor a loved one with a meaningful, heartfelt eulogy. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
