export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: string;
}

export const tools: Tool[] = [
  // Writing
  { slug: "email-writer", name: "AI Email Writer", description: "Write professional emails in seconds", category: "Writing" },
  { slug: "paraphraser", name: "Text Paraphraser", description: "Rewrite text while keeping the meaning", category: "Writing" },
  { slug: "summarizer", name: "Text Summarizer", description: "Condense long text into key points", category: "Writing" },
  { slug: "thank-you-note", name: "Thank You Note Generator", description: "Thoughtful thank-you notes for any occasion", category: "Writing" },
  { slug: "story-generator", name: "AI Story Generator", description: "Short fiction stories from a prompt", category: "Writing" },
  { slug: "poem-generator", name: "AI Poem Generator", description: "Beautiful poems for any occasion", category: "Writing" },
  { slug: "essay-writer", name: "Essay Writer", description: "Well-structured essays on any topic", category: "Writing" },
  { slug: "apology-email", name: "Apology Email Writer", description: "Sincere apology emails that repair relationships", category: "Writing" },
  { slug: "complaint-letter", name: "Complaint Letter Generator", description: "Effective complaint letters that get results", category: "Writing" },
  { slug: "apology-message", name: "Apology Message Generator", description: "Heartfelt apologies for any situation", category: "Writing" },

  // Social Media
  { slug: "instagram-caption", name: "Instagram Caption Generator", description: "Engaging captions that drive likes and comments", category: "Social Media" },
  { slug: "hashtag-generator", name: "Hashtag Generator", description: "Trending hashtags for maximum reach", category: "Social Media" },
  { slug: "tweet-writer", name: "Tweet / X Post Writer", description: "Viral tweets crafted by AI", category: "Social Media" },
  { slug: "linkedin-post", name: "LinkedIn Post Generator", description: "Professional posts that build your brand", category: "Social Media" },
  { slug: "tiktok-caption", name: "TikTok Caption Generator", description: "Scroll-stopping TikTok captions", category: "Social Media" },
  { slug: "pinterest-description", name: "Pinterest Description Generator", description: "SEO-optimized pin descriptions", category: "Social Media" },
  { slug: "social-media-bio", name: "Social Media Bio Generator", description: "Stand-out bios for any platform", category: "Social Media" },

  // Content
  { slug: "blog-post", name: "Blog Post Generator", description: "Full blog posts from a single topic", category: "Content" },
  { slug: "youtube-script", name: "YouTube Script Generator", description: "Engaging scripts that keep viewers watching", category: "Content" },
  { slug: "youtube-title", name: "YouTube Title Generator", description: "Click-worthy titles that rank", category: "Content" },
  { slug: "youtube-description", name: "YouTube Description Generator", description: "SEO-optimized video descriptions", category: "Content" },
  { slug: "podcast-intro", name: "Podcast Intro Script", description: "Hook listeners in the first 30 seconds", category: "Content" },
  { slug: "podcast-outline", name: "Podcast Outline Generator", description: "Structured episode outlines", category: "Content" },
  { slug: "newsletter", name: "Newsletter Generator", description: "Engaging newsletters that get opened", category: "Content" },
  { slug: "webinar-script", name: "Webinar Script Generator", description: "Professional webinar scripts that convert", category: "Content" },

  // Marketing
  { slug: "ad-copy", name: "Ad Copy Generator", description: "High-converting ad copy for any platform", category: "Marketing" },
  { slug: "slogan-generator", name: "Slogan Generator", description: "Catchy slogans that stick", category: "Marketing" },
  { slug: "landing-page-copy", name: "Landing Page Copy Generator", description: "High-converting landing page copy", category: "Marketing" },
  { slug: "cta-generator", name: "Call-to-Action Generator", description: "CTAs that drive clicks and conversions", category: "Marketing" },
  { slug: "value-proposition", name: "Value Proposition Generator", description: "Clear value props that sell", category: "Marketing" },
  { slug: "tagline-generator", name: "Tagline Generator", description: "Memorable taglines for any brand", category: "Marketing" },
  { slug: "fundraising-email", name: "Fundraising Email Generator", description: "Compelling fundraising appeals", category: "Marketing" },

  // Sales
  { slug: "cold-email", name: "Cold Outreach Email Generator", description: "Personalized cold emails that get replies", category: "Sales" },
  { slug: "sales-script", name: "Sales Script Generator", description: "Persuasive scripts that close deals", category: "Sales" },
  { slug: "objection-handler", name: "Sales Objection Handler", description: "Overcome any sales objection", category: "Sales" },
  { slug: "follow-up-email", name: "Follow-Up Email Generator", description: "Follow-ups that get responses", category: "Sales" },
  { slug: "elevator-pitch", name: "Elevator Pitch Generator", description: "30-second pitches that hook investors", category: "Sales" },
  { slug: "proposal-writer", name: "Business Proposal Generator", description: "Professional proposals that win deals", category: "Sales" },

  // Business
  { slug: "business-name", name: "Business Name Generator", description: "Creative business names for any industry", category: "Business" },
  { slug: "domain-name", name: "Domain Name Generator", description: "Available domain suggestions", category: "Business" },
  { slug: "startup-pitch", name: "Startup Pitch Generator", description: "Investor-ready pitch decks", category: "Business" },
  { slug: "mission-statement", name: "Mission Statement Generator", description: "Inspiring mission statements", category: "Business" },
  { slug: "vision-statement", name: "Vision Statement Generator", description: "Bold vision statements", category: "Business" },
  { slug: "brand-voice", name: "Brand Voice Guide Generator", description: "Define your brand's unique voice", category: "Business" },
  { slug: "brand-story", name: "Brand Story Generator", description: "Compelling origin stories", category: "Business" },
  { slug: "company-description", name: "Company Description Writer", description: "Professional company descriptions", category: "Business" },
  { slug: "about-page", name: "About Page Generator", description: "About pages that build trust", category: "Business" },
  { slug: "grant-proposal", name: "Grant Proposal Generator", description: "Winning grant applications", category: "Business" },
  { slug: "invoice-template", name: "Invoice Template Generator", description: "Professional invoice templates", category: "Business" },
  { slug: "contract-template", name: "Contract Template Generator", description: "Business contract templates", category: "Business" },

  // Career
  { slug: "resume-builder", name: "AI Resume Builder", description: "Stand-out resumes tailored to any job", category: "Career" },
  { slug: "cover-letter", name: "Cover Letter Generator", description: "Personalized cover letters in seconds", category: "Career" },
  { slug: "bio-generator", name: "Professional Bio Generator", description: "Polished bios for any platform", category: "Career" },
  { slug: "job-description", name: "Job Description Generator", description: "Attract top talent with clear JDs", category: "Career" },
  { slug: "interview-questions", name: "Interview Questions Generator", description: "Smart questions for any role", category: "Career" },
  { slug: "performance-review", name: "Performance Review Writer", description: "Fair, constructive reviews", category: "Career" },
  { slug: "resignation-letter", name: "Resignation Letter Generator", description: "Professional resignation letters", category: "Career" },
  { slug: "recommendation-letter", name: "Recommendation Letter Generator", description: "Glowing recommendation letters", category: "Career" },

  // SEO
  { slug: "seo-meta", name: "SEO Meta Description Generator", description: "Click-worthy meta descriptions for better rankings", category: "SEO" },

  // E-Commerce
  { slug: "product-description", name: "Product Description Writer", description: "Compelling product copy that sells", category: "E-Commerce" },
  { slug: "airbnb-description", name: "Airbnb Description Generator", description: "5-star listing descriptions", category: "E-Commerce" },
  { slug: "real-estate-listing", name: "Real Estate Listing Generator", description: "Listings that sell homes fast", category: "E-Commerce" },

  // PR
  { slug: "press-release", name: "Press Release Generator", description: "Newsworthy press releases in minutes", category: "PR" },
  { slug: "case-study", name: "Case Study Generator", description: "Compelling client case studies", category: "PR" },
  { slug: "testimonial-generator", name: "Testimonial Generator", description: "Authentic-sounding testimonials", category: "PR" },
  { slug: "faq-generator", name: "FAQ Generator", description: "Comprehensive FAQs for any topic", category: "PR" },
  { slug: "white-paper-outline", name: "White Paper Outline Generator", description: "Authority-building white paper outlines", category: "PR" },

  // Education
  { slug: "course-outline", name: "Course Outline Generator", description: "Structured course curricula", category: "Education" },
  { slug: "lesson-plan", name: "Lesson Plan Generator", description: "Engaging lesson plans for any subject", category: "Education" },
  { slug: "study-notes", name: "Study Notes Generator", description: "Concise study notes from any material", category: "Education" },
  { slug: "flashcard-generator", name: "Flashcard Generator", description: "Effective flashcards for faster learning", category: "Education" },
  { slug: "thesis-statement", name: "Thesis Statement Generator", description: "Strong thesis statements", category: "Education" },
  { slug: "research-question", name: "Research Question Generator", description: "Focused research questions", category: "Education" },
  { slug: "ebook-outline", name: "Ebook Outline Generator", description: "Complete ebook chapter outlines", category: "Education" },
  { slug: "book-summary", name: "Book Summary Generator", description: "Key takeaways from any book", category: "Education" },

  // Personal
  { slug: "dating-profile", name: "Dating Profile Generator", description: "Profiles that get matches", category: "Personal" },
  { slug: "wedding-speech", name: "Wedding Speech Generator", description: "Heartfelt wedding speeches", category: "Personal" },
  { slug: "eulogy-writer", name: "Eulogy Writer", description: "Dignified, personal eulogies", category: "Personal" },
  { slug: "birthday-message", name: "Birthday Message Generator", description: "Memorable birthday wishes", category: "Personal" },
  { slug: "graduation-speech", name: "Graduation Speech Generator", description: "Inspiring graduation speeches", category: "Personal" },
  { slug: "invitation-writer", name: "Invitation Writer", description: "Elegant event invitations", category: "Personal" },
  { slug: "rsvp-message", name: "RSVP Message Generator", description: "Polite RSVP responses", category: "Personal" },
  { slug: "breakup-text", name: "Breakup Text Generator", description: "Respectful breakup messages", category: "Personal" },

  // Fun
  { slug: "pickup-line", name: "Pickup Line Generator", description: "Smooth lines that actually work", category: "Fun" },
  { slug: "joke-generator", name: "Joke Generator", description: "Hilarious jokes on any topic", category: "Fun" },
  { slug: "baby-name", name: "Baby Name Generator", description: "Unique baby names with meanings", category: "Fun" },
  { slug: "song-lyrics", name: "Song Lyrics Generator", description: "Original lyrics in any genre", category: "Fun" },
  { slug: "motivational-quote", name: "Motivational Quote Generator", description: "Daily inspiration on demand", category: "Fun" },
  { slug: "affirmation-generator", name: "Daily Affirmation Generator", description: "Positive affirmations for any goal", category: "Fun" },
  { slug: "journal-prompt", name: "Journal Prompt Generator", description: "Thought-provoking journal prompts", category: "Fun" },
  { slug: "movie-review", name: "Movie Review Generator", description: "Thoughtful film reviews", category: "Fun" },
  { slug: "restaurant-review", name: "Restaurant Review Generator", description: "Detailed restaurant reviews", category: "Fun" },
  { slug: "app-review", name: "App Review Generator", description: "Helpful app store reviews", category: "Fun" },

  // Health & Lifestyle
  { slug: "meditation-script", name: "Meditation Script Generator", description: "Calming guided meditations", category: "Health" },
  { slug: "workout-plan", name: "Workout Plan Generator", description: "Custom workout plans for any goal", category: "Health" },
  { slug: "meal-plan", name: "Meal Plan Generator", description: "Weekly meal plans made easy", category: "Health" },
  { slug: "recipe-generator", name: "Recipe Generator", description: "Delicious recipes from any ingredients", category: "Health" },
  { slug: "diet-plan", name: "Diet Plan Generator", description: "Personalized diet plans", category: "Health" },
  { slug: "grocery-list", name: "Grocery List Generator", description: "Smart grocery lists from meal plans", category: "Health" },

  // Travel
  { slug: "travel-itinerary", name: "Travel Itinerary Generator", description: "Day-by-day trip planning", category: "Travel" },
  { slug: "packing-list", name: "Packing List Generator", description: "Never forget essentials again", category: "Travel" },

  // Events
  { slug: "event-description", name: "Event Description Generator", description: "Event descriptions that fill seats", category: "Events" },
];
