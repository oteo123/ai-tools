import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools Pro — 102 Free AI-Powered Tools",
  description: "102 free AI tools for writing, marketing, social media, SEO, business, and more. No signup required. Powered by Claude AI.",
  metadataBase: new URL("https://ai-tools-woad-six.vercel.app"),
  openGraph: {
    title: "AI Tools Pro — 102 Free AI-Powered Tools",
    description: "102 free AI tools for writing, marketing, SEO, business, and more. No signup required.",
    url: "https://ai-tools-woad-six.vercel.app",
    siteName: "AI Tools Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Pro — 102 Free AI-Powered Tools",
    description: "102 free AI tools for writing, marketing, SEO, business, and more. No signup required.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} font-sans antialiased bg-bg text-text`}>
        <nav className="border-b border-border px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent transition-colors">
            AI Tools
          </Link>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-text transition-colors">All Tools</Link>
            <Link href="#pricing" className="hover:text-text transition-colors">Pricing</Link>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
