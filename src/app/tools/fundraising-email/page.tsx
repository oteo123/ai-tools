import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Fundraising Email Generator — Free AI Tool | AI Tools Pro",
  description: "Write fundraising emails that inspire donors to give. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Fundraising Email Generator — Free AI Tool | AI Tools Pro",
    description: "Write fundraising emails that inspire donors to give. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/fundraising-email",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundraising Email Generator — Free AI Tool | AI Tools Pro",
    description: "Write fundraising emails that inspire donors to give. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
