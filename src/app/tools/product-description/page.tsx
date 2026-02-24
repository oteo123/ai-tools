"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Product Description Writer" description="Compelling product copy that sells." systemPrompt="You are an expert e-commerce copywriter. Write persuasive, benefit-driven product descriptions that highlight features and drive purchases. Output ONLY the description." fields={[
    { name: "product", label: "Product name", type: "text", placeholder: "e.g. EcoBreeze Portable Fan" },
    { name: "features", label: "Key features", type: "textarea", placeholder: "e.g. USB-C rechargeable, 3 speeds, ultra-quiet, 12-hour battery" },
    { name: "platform", label: "Platform", type: "select", placeholder: "Where will this be listed?", options: ["Amazon", "Shopify", "Etsy", "eBay", "General website"] },
  ]} buildPrompt={(v) => `Write a ${v.platform} product description for: ${v.product}\n\nFeatures: ${v.features}`} />;
}
