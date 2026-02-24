import Link from "next/link";
import { tools } from "@/lib/tools";

export default function Home() {
  const categories = [...new Set(tools.map((t) => t.category))];

  return (
    <div>
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Free AI Tools
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          {tools.length}+ AI-powered tools for writing, marketing, social media, and more. No sign-up required.
        </p>
      </div>

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

      <section id="pricing" className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-xl border border-border bg-surface">
            <h3 className="font-bold text-lg mb-2">Free</h3>
            <p className="text-3xl font-bold mb-4">$0</p>
            <ul className="text-sm text-muted space-y-2 text-left">
              <li>5 uses per tool per day</li>
              <li>All {tools.length}+ tools</li>
              <li>No sign-up required</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-accent bg-surface">
            <h3 className="font-bold text-lg mb-2 text-accent">Pro</h3>
            <p className="text-3xl font-bold mb-4">$19<span className="text-sm text-muted">/mo</span></p>
            <ul className="text-sm text-muted space-y-2 text-left">
              <li>Unlimited uses</li>
              <li>Priority speed</li>
              <li>API access</li>
              <li>No ads</li>
            </ul>
            <button className="mt-4 w-full py-2 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
