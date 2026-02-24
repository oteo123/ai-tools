import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Vision Statement Generator — Free AI Tool | AI Tools Pro",
  description: "Articulate your organization's future aspirations. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Vision Statement Generator — Free AI Tool | AI Tools Pro",
    description: "Articulate your organization's future aspirations. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/vision-statement",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Statement Generator — Free AI Tool | AI Tools Pro",
    description: "Articulate your organization's future aspirations. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
