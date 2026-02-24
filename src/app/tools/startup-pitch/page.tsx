import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Startup Pitch Generator — Free AI Tool | AI Tools Pro",
  description: "Craft a compelling startup pitch deck script. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Startup Pitch Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a compelling startup pitch deck script. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/startup-pitch",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Pitch Generator — Free AI Tool | AI Tools Pro",
    description: "Craft a compelling startup pitch deck script. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
