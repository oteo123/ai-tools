import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Daily Affirmation Generator — Free AI Tool | AI Tools Pro",
  description: "Create personalized daily affirmations to boost your mindset. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Daily Affirmation Generator — Free AI Tool | AI Tools Pro",
    description: "Create personalized daily affirmations to boost your mindset. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/affirmation-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Affirmation Generator — Free AI Tool | AI Tools Pro",
    description: "Create personalized daily affirmations to boost your mindset. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
