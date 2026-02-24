import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Testimonial Generator — Free AI Tool | AI Tools Pro",
  description: "Generate realistic testimonial templates for your product. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Testimonial Generator — Free AI Tool | AI Tools Pro",
    description: "Generate realistic testimonial templates for your product. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/testimonial-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonial Generator — Free AI Tool | AI Tools Pro",
    description: "Generate realistic testimonial templates for your product. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
