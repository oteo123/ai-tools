"use client";

import { useState } from "react";

interface Field {
  name: string;
  label: string;
  type: "text" | "textarea" | "select";
  placeholder: string;
  options?: string[];
}

interface ToolPageProps {
  name: string;
  description: string;
  systemPrompt: string;
  fields: Field[];
  buildPrompt: (values: Record<string, string>) => string;
}

export default function ToolPage({ name, description, systemPrompt, fields, buildPrompt }: ToolPageProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [uses, setUses] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const emailRequired = uses >= 3 && !emailSubmitted;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uses >= 5 || emailRequired) return;
    setLoading(true);
    setResult("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemPrompt, userInput: buildPrompt(values) }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data.result);
      setUses((u) => u + 1);
    } catch (err: unknown) {
      setResult(err instanceof Error ? `Error: ${err.message}` : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-muted mb-8">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                className="w-full p-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none resize-y min-h-[100px]"
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                required
              />
            ) : field.type === "select" ? (
              <select
                className="w-full p-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none"
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                required
              >
                <option value="">{field.placeholder}</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none"
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => setValues({ ...values, [field.name]: e.target.value })}
                required
              />
            )}
          </div>
        ))}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading || uses >= 5 || emailRequired}
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : emailRequired ? "Enter email below to continue" : "Generate"}
          </button>
          <span className="text-sm text-muted">{uses >= 5 ? "0" : emailRequired ? "Enter email to unlock 2 more" : `${5 - uses}`} free uses remaining</span>
        </div>
      </form>

      {uses >= 3 && !emailSubmitted && uses < 5 && (
        <div className="p-4 rounded-lg border border-accent bg-accent/10 mb-6">
          <p className="font-medium mb-1">Enter your email to unlock 2 more free uses</p>
          <p className="text-sm text-muted mb-3">Join 500+ creators using AI Tools Pro. No spam, unsubscribe anytime.</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });
              setEmailSubmitted(true);
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 p-2 rounded-lg bg-surface border border-border focus:border-accent focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      )}

      {emailSubmitted && uses < 5 && (
        <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5 mb-6">
          <p className="text-sm text-green-400">You're subscribed! We'll send you AI tips & updates.</p>
        </div>
      )}

      {uses >= 5 && (
        <div className="p-4 rounded-lg border border-accent bg-accent/10 mb-6">
          <p className="font-medium">You've used all free generations.</p>
          <p className="text-sm text-muted mt-1">Upgrade to Pro for unlimited access</p>
          <div className="flex gap-3 mt-3">
            <button
              onClick={async () => {
                const res = await fetch("/api/checkout", { method: "POST" });
                const data = await res.json();
                if (data.url) window.location.href = data.url;
              }}
              className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              Pro — $19/mo
            </button>
            <a
              href="https://oteo5.gumroad.com/l/ai-tools-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-500 transition-colors"
            >
              Lifetime — $99
            </a>
          </div>
        </div>
      )}

      {result && (
        <div className="p-6 rounded-xl border border-border bg-surface">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Result</h3>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Copy
            </button>
          </div>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">{result}</div>
        </div>
      )}
    </div>
  );
}
