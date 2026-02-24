import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Baby Name Generator — Free AI Tool | AI Tools Pro",
  description: "Discover the perfect baby name with meanings. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Baby Name Generator — Free AI Tool | AI Tools Pro",
    description: "Discover the perfect baby name with meanings. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/baby-name",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Name Generator — Free AI Tool | AI Tools Pro",
    description: "Discover the perfect baby name with meanings. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
