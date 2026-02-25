import Link from "next/link";
import { tools } from "@/lib/tools";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">
          Stop Paying for 10 AI Apps.
        </h1>
        <p className="text-3xl sm:text-4xl font-bold tracking-tight text-accent mb-6">
          Get {tools.length} Tools in One Place.
        </p>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
          AI-powered tools for writing, marketing, social media, and more — all free, all instant.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#tools"
            className="inline-block px-8 py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            Start Using Tools Free
          </a>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 rounded-xl border border-accent text-accent font-semibold text-lg hover:bg-accent/10 transition-colors"
          >
            See Pricing
          </a>
        </div>
        <p className="text-sm text-muted">
          No signup required. No credit card. Your data is never stored.
        </p>
      </div>

      {/* How It Works Section */}
      <section className="py-16 px-4 border-t border-border">
        <h2 className="text-center text-2xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">Pick a Tool</h3>
            <p className="text-sm text-muted">
              Browse {tools.length}+ AI tools across {categories.length} categories.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold text-lg mb-2">Fill in the Details</h3>
            <p className="text-sm text-muted">
              Add your context in a simple form. No signup needed.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold text-lg mb-2">Get Results Instantly</h3>
            <p className="text-sm text-muted">
              Copy, share, or export your AI-generated content.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-10 px-4 border-t border-b border-border">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-accent">102+</p>
            <p className="text-sm text-muted mt-1">AI Tools</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent">16</p>
            <p className="text-sm text-muted mt-1">Categories</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-accent">Free</p>
            <p className="text-sm text-muted mt-1">No Signup Required</p>
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <div id="tools">
      {categories.map((cat) => (
        <section key={cat} className="mb-12">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools
              .filter((t) => t.category === cat)
              .map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block p-5 rounded-xl border border-border bg-surface hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <h3 className="font-semibold text-text group-hover:text-accent transition-colors mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-muted">{tool.description}</p>
                </Link>
              ))}
          </div>
        </section>
      ))}
      </div>

      <PricingSection toolCount={tools.length} />
      <p className="text-center text-sm text-muted mt-4">30-day money-back guarantee. No questions asked.</p>

      {/* FAQ Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                Is it really free?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                Yes! Every tool offers 5 free uses with no signup. After 3 uses we ask for your email to unlock 2 more.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                Do I need to create an account?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                No. Just pick a tool, fill in the form, and get instant results. No signup, no login.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                What AI model powers these tools?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                All tools are powered by Claude, Anthropic&apos;s most capable AI model.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                Can I use the output commercially?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                Absolutely. Everything generated is yours to use however you want — blog posts, ads, client work, you name it.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                What&apos;s the difference between Free and Pro?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                Free gives you 5 uses per tool. Pro ($19/mo) gives you unlimited uses, priority speed, and API access. Lifetime ($99) is the same as Pro but you pay once.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                Is there a refund policy?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                Yes — 30-day money-back guarantee, no questions asked.
              </p>
            </details>
            <details className="group border border-border rounded-xl overflow-hidden">
              <summary className="cursor-pointer px-6 py-4 font-semibold text-text hover:text-accent transition-colors select-none">
                Will you add more tools?
              </summary>
              <p className="px-6 pb-4 text-sm text-muted">
                Yes! We&apos;re adding new tools every week. Subscribe to get notified.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-8">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Column 1: Product */}
            <div>
              <h4 className="font-semibold text-text mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#tools" className="hover:text-accent transition-colors">All Tools</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-accent transition-colors">Pricing</a>
                </li>
              </ul>
            </div>
            {/* Column 2: Company */}
            <div>
              <h4 className="font-semibold text-text mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="mailto:oteobooking@gmail.com" className="hover:text-accent transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>
            {/* Column 3: Legal */}
            <div>
              <h4 className="font-semibold text-text mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
            <p>&copy; 2026 AI Tools Pro. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Powered by Claude AI</span>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
