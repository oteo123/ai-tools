import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Product Description Writer — Free AI Tool | AI Tools Pro",
  description: "Compelling product copy that sells. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Product Description Writer — Free AI Tool | AI Tools Pro",
    description: "Compelling product copy that sells. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/product-description",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Description Writer — Free AI Tool | AI Tools Pro",
    description: "Compelling product copy that sells. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
