import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Recipe Generator — Free AI Tool | AI Tools Pro",
  description: "Generate delicious recipes based on your ingredients and preferences. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Recipe Generator — Free AI Tool | AI Tools Pro",
    description: "Generate delicious recipes based on your ingredients and preferences. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/recipe-generator",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Generator — Free AI Tool | AI Tools Pro",
    description: "Generate delicious recipes based on your ingredients and preferences. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
