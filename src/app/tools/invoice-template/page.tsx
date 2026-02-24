import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Invoice Template Generator — Free AI Tool | AI Tools Pro",
  description: "Create professional invoice templates for your business. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Invoice Template Generator — Free AI Tool | AI Tools Pro",
    description: "Create professional invoice templates for your business. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/invoice-template",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Template Generator — Free AI Tool | AI Tools Pro",
    description: "Create professional invoice templates for your business. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
