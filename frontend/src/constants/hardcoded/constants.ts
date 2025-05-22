import type { Into } from "../Itypescript/welcomeState";

export const imagesResponse = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486308510493-cb42b2f648bf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496483648148-47c686dc86a8?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

export interface IProp {
  index: number;
  setIndex: (i: number) => void;
}

export const SexualOptions = [
  {
    title: "Asexual",
    description: "A person who does not experience sexual attraction.",
  },
  {
    title: "Bisexual",
    description: "Attraction to more than one gender.",
  },
  {
    title: "Gay",
    description:
      "A man who is emotionally, romantically, or sexually attracted to other men.",
  },
  {
    title: "Lesbian",
    description:
      "A woman who is emotionally, romantically, or sexually attracted to other women.",
  },
  {
    title: "Pansexual",
    description:
      "Attraction towards people regardless of their gender identity.",
  },
  {
    title: "Queer",
    description:
      "A term used by some to describe sexual orientation that is not exclusively heterosexual.",
  },
  {
    title: "Straight",
    description:
      "A person who is emotionally, romantically, or sexually attracted to people of the opposite gender.",
  },
];

export const seekingOptions = [
  { title: "Man" },
  { title: "Female" },
  { title: "Everyone" },
];

export const lookingForOption: ILookingForOption[] = [
  { emoji: "💝", title: "Long-term partner" },
  { emoji: "😍", title: "Long-term, open to short" },
  { emoji: "🥂", title: "Short-term, open to long" },
  { emoji: "🎉", title: "Short-term fun" },
  { emoji: "👋", title: "New friends" },
  { emoji: "🤔", title: "Still figuring it out" },
];

export interface ILookingForOption {
  emoji: string;
  title: string;
}

export const highestEducations: string[] = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];
export const workOptions: string[] = [
  "Student",
  "Employed",
  "Self-Employed",
  "Unemployed",
  "Retired",
  "Prefer not to say",
];

export const drinkingOptions: string[] = [
  "Never",
  "Occasionally",
  "Socially",
  "Regularly",
];

export const smokingOptions: string[] = [
  "Social smoker",
  "Smoker when drinking",
  "Non-smoker",
  "Smoker",
  "Trying to quit",
];

export const workoutOptions: string[] = [
  "Everyday",
  "Often",
  "Sometimes",
  "Never",
];

export const LoveLanguageOption = [
  {
    title: "Physical touch",
    description: "Expressing and receiving love through physical affection.",
  },
  {
    title: "Words of affirmation",
    description:
      "Expressing love through spoken or written words of support and affection.",
  },
  {
    title: "Quality time",
    description:
      "Giving someone your undivided attention to show love and care.",
  },
  {
    title: "Gifts",
    description: "Expressing love by giving thoughtful gifts.",
  },
  {
    title: "Acts of service",
    description: "Showing love by doing helpful things for others.",
  },
];

export const interests: Into[] = [
  "Food and drinks",
  "Gaming",
  "Going Out",
  "Music",
  "Outdoor and adventure",
  "Social and content",
  "Sports and fitness",
  "Staying in",
  "TV and movies",
  "Values and causes",
  "Wellness and lifestyle",
  "Art & Culture",
  "Reading",
  "Traveling",
  "Photography",
  "Fashion & Style",
  "Pets & Animals",
  "Technology & Gadgets",
  "Mindfulness & Meditation",
  "DIY & Crafts",
  "Board Games & Puzzles",
  "Cooking & Baking",
  "Learning & Education",
  "Cars & Motorcycles",
  "Finance & Investing",
  "Comedy & Memes",
];
