import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Real Estate Listing Generator — Free AI Tool | AI Tools Pro",
  description: "Create professional property listings that attract buyers. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Real Estate Listing Generator — Free AI Tool | AI Tools Pro",
    description: "Create professional property listings that attract buyers. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/real-estate-listing",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Listing Generator — Free AI Tool | AI Tools Pro",
    description: "Create professional property listings that attract buyers. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
