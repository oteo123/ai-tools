import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Webinar Script Generator — Free AI Tool | AI Tools Pro",
  description: "Create engaging webinar scripts that educate and convert. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Webinar Script Generator — Free AI Tool | AI Tools Pro",
    description: "Create engaging webinar scripts that educate and convert. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/webinar-script",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinar Script Generator — Free AI Tool | AI Tools Pro",
    description: "Create engaging webinar scripts that educate and convert. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
