import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Elevator Pitch Generator — Free AI Tool | AI Tools Pro",
  description: "Create a punchy 30-60 second elevator pitch. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Elevator Pitch Generator — Free AI Tool | AI Tools Pro",
    description: "Create a punchy 30-60 second elevator pitch. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/elevator-pitch",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevator Pitch Generator — Free AI Tool | AI Tools Pro",
    description: "Create a punchy 30-60 second elevator pitch. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
