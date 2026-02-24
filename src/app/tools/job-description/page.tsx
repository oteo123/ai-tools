import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Job Description Generator — Free AI Tool | AI Tools Pro",
  description: "Write clear, compelling job descriptions that attract top talent. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Job Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write clear, compelling job descriptions that attract top talent. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/job-description",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Description Generator — Free AI Tool | AI Tools Pro",
    description: "Write clear, compelling job descriptions that attract top talent. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
