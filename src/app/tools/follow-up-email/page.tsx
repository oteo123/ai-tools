import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Follow-Up Email Generator — Free AI Tool | AI Tools Pro",
  description: "Write follow-up emails that get responses. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Follow-Up Email Generator — Free AI Tool | AI Tools Pro",
    description: "Write follow-up emails that get responses. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/follow-up-email",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Follow-Up Email Generator — Free AI Tool | AI Tools Pro",
    description: "Write follow-up emails that get responses. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
