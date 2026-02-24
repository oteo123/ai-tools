import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Airbnb Description Generator — Free AI Tool | AI Tools Pro",
  description: "Write an irresistible Airbnb listing that books fast. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Airbnb Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write an irresistible Airbnb listing that books fast. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/airbnb-description",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airbnb Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write an irresistible Airbnb listing that books fast. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
