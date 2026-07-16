/**
 * Single source of truth for AS Operator's copy and links. Sections read
 * from here instead of hardcoding content, so Adam can edit the pitch
 * without touching layout/component code (Design Bible v3 §13).
 */

export const SITE = {
  brand: "AS Operator",
  name: "Adam Smolka",
  tagline: "Shadow Operator for Creators",
  email: "adissmolka19@gmail.com",
  calendlyUrl: "https://calendly.com/adissmolka19/new-meeting",
} as const;

export const HERO = {
  eyebrow: `Est. ${SITE.name}`,
  headline: ["I Build the System.", "You Get Paid", "For Your Audience."],
  headlineEmphasisIndex: 1,
  subtext:
    "I help influencers and creators go from unmonetised following to a real revenue system — built and launched for you, without you needing to hire a team or figure it out yourself.",
  primaryCta: "Book a Call",
  secondaryCta: "See How It Works",
} as const;

export const WHAT_I_DO = {
  eyebrow: "What I Do",
  headline: "Four levers. One outcome — real revenue from the audience you already have.",
  items: [
    {
      title: "Audience Monetization Systems",
      description: "Turning your following into a sellable offer built around what your audience actually wants to buy.",
    },
    {
      title: "First Launch Execution",
      description: "I run your first paid launch from A to Z — assets, sequencing, sales, delivery.",
    },
    {
      title: "Offer & Funnel Build-Out",
      description: "Positioning, pricing, sales page and funnel, written in your voice and built to convert.",
    },
    {
      title: "Ongoing Revenue Strategy",
      description: "Scaling past the first launch — recurring drops, evergreen income, and next-tier offers.",
    },
  ],
} as const;

export const HOW_IT_WORKS = {
  eyebrow: "How It Works",
  headline: ["Audience to income —", "a three-step system."],
  headlineEmphasisIndex: 1,
  you: {
    label: "You",
    description: "Bring the trust and reach you already built.",
  },
  me: {
    label: "Me",
    steps: [
      {
        step: "Step 1",
        title: "Product Strategy",
        description: "I map your expertise to the format that fits — a course or membership — then design the offer around it.",
      },
      {
        step: "Step 2",
        title: "Positioning & Funnel",
        description: "The messaging, sales page and funnel — written in your voice and built to convert the audience you already have.",
      },
      {
        step: "Step 3",
        title: "Launch & Refine",
        description: "I package it, run the launch, and tighten what converts. You just point your audience at it.",
      },
    ],
  },
  together: {
    label: "Together",
    description: "Once it sells, we split what it brings in.",
  },
} as const;

export const WHO_FOR = {
  eyebrow: "The Fit",
  forLabel: "Who This Is For",
  forDescription:
    "Creators and influencers with an engaged audience — 20k to 100k+ followers — who haven't turned it into income yet, and want someone to build and run the system for them. Not just tell them what to do.",
  notForLabel: "Who This Is Not For",
  notFor: [
    "People with no audience yet and no plan to build one.",
    "Anyone looking for a get-rich-quick scheme or overnight results.",
    "Creators who want to DIY everything and just need tips.",
    "Anyone unwilling to show up for their own launch and audience.",
  ],
} as const;

export const FAQ = {
  eyebrow: "FAQ",
  headline: "Common questions.",
  headlineEmphasisWord: "questions.",
  items: [
    {
      question: "Do I need a large audience to work with you?",
      answer:
        "No — you need an engaged audience, not necessarily a huge one. Some of the best first launches come from smaller, highly engaged followings.",
    },
    {
      question: "How long does it take to launch?",
      answer: "Most first launches are built and ready to go live within a few weeks, depending on your audience and offer complexity.",
    },
    {
      question: "Do I need to already have a product or offer?",
      answer: "No — that's part of what we build together. If you don't have one yet, I'll help you shape it based on what your audience actually wants.",
    },
    {
      question: "Will I need to hire a team?",
      answer: "No. That's the entire point — I run the backend so you don't have to build or manage a team yourself.",
    },
    {
      question: "What happens after the first launch?",
      answer:
        "We can continue working together on ongoing revenue strategy and future launches, or you can take what we built and run it yourself.",
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Contact",
  headline: "Ready to monetize your audience?",
  headlineEmphasis: "Let's talk.",
  submitLabel: "Send Message",
  ctaLabel: "Book a Call",
} as const;
