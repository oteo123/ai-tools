import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Diet Plan Generator — Free AI Tool | AI Tools Pro",
  description: "Get a structured diet plan aligned with your health goals. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Diet Plan Generator — Free AI Tool | AI Tools Pro",
    description: "Get a structured diet plan aligned with your health goals. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/diet-plan",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diet Plan Generator — Free AI Tool | AI Tools Pro",
    description: "Get a structured diet plan aligned with your health goals. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
