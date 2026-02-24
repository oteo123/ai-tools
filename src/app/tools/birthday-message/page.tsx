import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Birthday Message Generator — Free AI Tool | AI Tools Pro",
  description: "Create the perfect birthday message for anyone. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Birthday Message Generator — Free AI Tool | AI Tools Pro",
    description: "Create the perfect birthday message for anyone. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/birthday-message",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Message Generator — Free AI Tool | AI Tools Pro",
    description: "Create the perfect birthday message for anyone. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
