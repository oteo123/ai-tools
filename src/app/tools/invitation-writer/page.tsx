"use client";
import ToolPage from "@/components/ToolPage";
export default function Page() {
  return <ToolPage name="Invitation Writer" description="Create beautiful invitations for any occasion." systemPrompt="You are an expert invitation writer. Craft elegant, on-tone invitations that include all essential details (who, what, when, where, RSVP). Match the formality to the event. Output ONLY the invitation text." fields={[
    { name: "event", label: "Event type", type: "select", placeholder: "Select event", options: ["Wedding", "Birthday Party", "Baby Shower", "Dinner Party", "Housewarming", "Anniversary", "Graduation Party", "Corporate Event", "Holiday Party"] },
    { name: "tone", label: "Tone", type: "select", placeholder: "Select tone", options: ["Formal & Elegant", "Casual & Fun", "Playful & Creative", "Modern & Minimalist"] },
    { name: "details", label: "Event details", type: "textarea", placeholder: "e.g. Saturday June 15 at 7pm, The Grand Ballroom, cocktail attire, hosted by Sarah" },
    { name: "host", label: "Host name(s)", type: "text", placeholder: "e.g. The Johnson Family" },
  ]} buildPrompt={(v) => `Write a ${v.tone?.toLowerCase()} invitation for a ${v.event?.toLowerCase()} hosted by ${v.host}.\n\nDetails: ${v.details}`} />;
}
