import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Slogan Generator — Free AI Tool | AI Tools Pro",
  description: "Catchy slogans that stick. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Slogan Generator — Free AI Tool | AI Tools Pro",
    description: "Catchy slogans that stick. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/slogan-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slogan Generator — Free AI Tool | AI Tools Pro",
    description: "Catchy slogans that stick. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
