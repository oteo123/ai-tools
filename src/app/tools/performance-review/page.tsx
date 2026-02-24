import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Performance Review Writer — Free AI Tool | AI Tools Pro",
  description: "Write constructive, professional performance reviews. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Performance Review Writer — Free AI Tool | AI Tools Pro",
    description: "Write constructive, professional performance reviews. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/performance-review",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Review Writer — Free AI Tool | AI Tools Pro",
    description: "Write constructive, professional performance reviews. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
