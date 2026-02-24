import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Cold Outreach Email Generator — Free AI Tool | AI Tools Pro",
  description: "Personalized cold emails that get replies. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Cold Outreach Email Generator — Free AI Tool | AI Tools Pro",
    description: "Personalized cold emails that get replies. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/cold-email",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Outreach Email Generator — Free AI Tool | AI Tools Pro",
    description: "Personalized cold emails that get replies. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
