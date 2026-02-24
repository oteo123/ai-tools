import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Dating Profile Generator — Free AI Tool | AI Tools Pro",
  description: "Create an authentic, attractive dating profile that stands out. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Dating Profile Generator — Free AI Tool | AI Tools Pro",
    description: "Create an authentic, attractive dating profile that stands out. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/dating-profile",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Profile Generator — Free AI Tool | AI Tools Pro",
    description: "Create an authentic, attractive dating profile that stands out. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
