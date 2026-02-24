"use client";
import ToolPage from "@/components/ToolPage";
export default function ClientPage() {
  return <ToolPage name="Event Description Generator" description="Write event descriptions that fill seats and build excitement." systemPrompt="You are an event marketing expert. Write exciting, informative event descriptions that include what attendees will experience, key details, and a compelling reason to attend. Create urgency. Output ONLY the event description." fields={[
    { name: "event", label: "Event name", type: "text", placeholder: "e.g. Summer Music Festival 2026" },
    { name: "type", label: "Event type", type: "select", placeholder: "Select type", options: ["Conference", "Workshop", "Concert/Festival", "Networking Event", "Gala/Fundraiser", "Webinar", "Launch Party", "Community Meetup"] },
    { name: "details", label: "Event details", type: "textarea", placeholder: "e.g. Date, venue, speakers, performers, what's included, ticket price" },
    { name: "platform", label: "Where will this be posted?", type: "select", placeholder: "Select platform", options: ["Eventbrite", "Facebook Event", "Website", "Email Blast", "LinkedIn"] },
  ]} buildPrompt={(v) => `Write a ${v.platform?.toLowerCase()} event description for "${v.event}" (${v.type?.toLowerCase()}).\n\nDetails: ${v.details}`} />;
}
