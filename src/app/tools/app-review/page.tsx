import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "App Review Generator — Free AI Tool | AI Tools Pro",
  description: "Write helpful app store reviews that inform other users. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "App Review Generator — Free AI Tool | AI Tools Pro",
    description: "Write helpful app store reviews that inform other users. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/app-review",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Review Generator — Free AI Tool | AI Tools Pro",
    description: "Write helpful app store reviews that inform other users. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
