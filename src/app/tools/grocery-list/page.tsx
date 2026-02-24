import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Grocery List Generator — Free AI Tool | AI Tools Pro",
  description: "Generate organized grocery lists for any meal plan or occasion. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Grocery List Generator — Free AI Tool | AI Tools Pro",
    description: "Generate organized grocery lists for any meal plan or occasion. Free, no signup required. Powered by AI.",
    url: "https://aitoolspro.app/tools/grocery-list",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grocery List Generator — Free AI Tool | AI Tools Pro",
    description: "Generate organized grocery lists for any meal plan or occasion. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
