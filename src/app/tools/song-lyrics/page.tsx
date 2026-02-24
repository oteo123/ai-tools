import type { Metadata } from "next";
import ClientPage from "./client";

export const metadata: Metadata = {
  title: "Song Lyrics Generator — Free AI Tool | AI Tools Pro",
  description: "Write original song lyrics for any genre. Free, no signup required. Powered by AI.",
  openGraph: {
    title: "Song Lyrics Generator — Free AI Tool | AI Tools Pro",
    description: "Write original song lyrics for any genre. Free, no signup required. Powered by AI.",
    url: "https://ai-tools-woad-six.vercel.app/tools/song-lyrics",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Song Lyrics Generator — Free AI Tool | AI Tools Pro",
    description: "Write original song lyrics for any genre. Free, no signup required. Powered by AI.",
  },
};

export default function Page() {
  return <ClientPage />;
}
