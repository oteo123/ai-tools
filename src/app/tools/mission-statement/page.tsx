import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Mission Statement Generator — Free AI Tool | AI Tools Pro",
  description: "Define your organization's purpose with a clear mission statement. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Mission Statement Generator — Free AI Tool | AI Tools Pro",
    description: "Define your organization's purpose with a clear mission statement. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/mission-statement",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission Statement Generator — Free AI Tool | AI Tools Pro",
    description: "Define your organization's purpose with a clear mission statement. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
