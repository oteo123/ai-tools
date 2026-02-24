import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Graduation Speech Generator — Free AI Tool | AI Tools Pro",
  description: "Write an inspiring graduation speech for any occasion. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Graduation Speech Generator — Free AI Tool | AI Tools Pro",
    description: "Write an inspiring graduation speech for any occasion. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/graduation-speech",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduation Speech Generator — Free AI Tool | AI Tools Pro",
    description: "Write an inspiring graduation speech for any occasion. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
