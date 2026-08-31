import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, ArrowRight, TrendingUp, TrendingDown, ChevronRight, Search, Bell, User, ExternalLink } from "lucide-react";
import HeroImg from "../../../imports/heroimage.png";
import InsImg from "../../../imports/Insightimage.png";
import LN3Img from "../../../imports/LN3image.png";
import LN4Img from "../../../imports/LN4image.png";
import EdipickImg from "../../../imports/Edipickimage.png";
import Pt30Img from "../../../imports/pt30image.png";
import Ln1Img from "../../../imports/Ln1.png";
import { getQuotes } from "../../../services/marketApi";


/* ─── DATA ─────────────────────────────────────────── */
{/*
const tickerData = [
  { label: "FTSE 100", value: "8,466.44", change: "+0.74%", up: true },
  { label: "DAX", value: "19,113.18", change: "+0.31%", up: true },
  { label: "NIKKEI", value: "39,918.71", change: "-0.67%", up: false },
  { label: "HANG SENG", value: "18,450.34", change: "+2.21%", up: true },
  { label: "CRUDE OIL", value: "78,5030", change: "-1.12%", up: false },
  { label: "GOLD", value: "2,350.22", change: "+0.96%", up: true },
  { label: "BTC", value: "67,286.27", change: "+0.75%", up: true },
];
*/}

/* Primary site navigation — order encodes section priority: markets/tech
   lead because they're the highest-traffic desks, leadership/magazine trail
   as the "slower" evergreen sections. */
const navItems = [
  { label: "Home", to: "/" },
  { label: "Markets", to: "/markets" },
  { label: "Technology", to: "/technology" },
  { label: "Business", to: "/business-news" },
  { label: "Energy", to: "/energy" },
  { label: "Leadership", to: "/leadership" },
  { label: "Magazine", to: "/magazine" },
];

const heroStory = {
  category: "TOP STORY",
  title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push  ",
  excerpt:"Nvidia has announced an ambitious collaboration with humanoid robot manufacturers across the United States, Europe, and South Korea, expanding its already well-established relationship with China's Unitree.",
  image: HeroImg,
};

const sideStories = [
  {
    id: 1,
    tag: "CYBERSECURITY INSIGHTS",
    title: "PwC 2026 Global Digital Trust Insights: Enterprises Escalate Defense Spending  ",
    excerpt: "PwC's 2026 Global Digital Trust Insights survey, conducted across 3,887 business and technology executives in 72 countries, reveals that cybersecurity has risen to the top tier of board-level concerns across every major industry. The survey found that financial services (21%), industrial manufacturing (21%), and technology, media and telecom (19%) sectors represent the highest concentration of respondents, underscoring the cross-sector urgency of the digital trust imperative.The findings highlight that AI-driven attack methods are prompting accelerated investment in both preventive and detection-oriented security frameworks. Executives report that the attack surface has expanded dramatically with the proliferation of generative AI tools inside enterprises — as every AI integration creates a new potential entry point for adversarial prompt injection, data exfiltration, and credential harvesting. ",
    time: "25 min ago",
    image: "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  link: "/cybersecurity",
  },
  {
    id: 2,
    tag: "FINANCE INSIGHTS",
    title: "U.S. Equity Markets Rally on Strong Manufacturing Data  ",
    excerpt: "U.S. equity markets extended a recovery rally into the first week of June, driven by stronger-than-expected domestic factory data and a continued surge in technology stocks. ",
    time: "1 hr ago",
    image: InsImg,
    link: "/finance",
  },
];
const pt30 = [
  {
    id: 1,
    tag: "PRIDE TIMES 30 — LEADERSHIP PROFILES",
    title: " PRIDE TIMES 30 — LEADERS TO WATCH IN 2026 ",
    excerpt: "The Pride Times 30 recognizes thirty global leaders across business, technology, and innovation who are defining the direction of the global economy this year. This edition highlights ten names at the forefront: ",
    time: "25 min ago",
    image: Pt30Img,
    link: "/billionaires",
  },
];
{/*
const marketSnapshotData: Record<string, { symbol: string; value: string; change: string; up: boolean }[]> = {
  Indices: [
    { symbol: "S&P 500", value: "5,321.41", change: "+0.82%", up: true },
    { symbol: "NASDAQ", value: "16,920.79", change: "+1.10%", up: true },
    { symbol: "DOW JONES", value: "39,069.59", change: "+0.35%", up: true },
    { symbol: "NIKKEI 225", value: "39,918.71", change: "-0.67%", up: false },
    { symbol: "HANG SENG", value: "18,450.34", change: "+2.21%", up: true },
  ],
  Commodities: [
    { symbol: "CRUDE OIL", value: "$78.45", change: "-1.23%", up: false },
    { symbol: "GOLD", value: "$2,345", change: "+0.89%", up: true },
    { symbol: "SILVER", value: "$28.12", change: "+0.54%", up: true },
    { symbol: "NATURAL GAS", value: "$2.87", change: "-2.10%", up: false },
    { symbol: "COPPER", value: "$4.23", change: "+1.32%", up: true },
  ],
  Currencies: [
    { symbol: "USD/INR", value: "83.42", change: "-0.12%", up: false },
    { symbol: "EUR/USD", value: "1.0842", change: "+0.23%", up: true },
    { symbol: "GBP/USD", value: "1.2731", change: "+0.18%", up: true },
    { symbol: "USD/JPY", value: "154.32", change: "-0.45%", up: false },
    { symbol: "AUD/USD", value: "0.6542", change: "+0.31%", up: true },
  ],
  Crypto: [
    { symbol: "BTC", value: "$67,234", change: "+3.45%", up: true },
    { symbol: "ETH", value: "$3,521", change: "+2.18%", up: true },
    { symbol: "BNB", value: "$412.5", change: "-0.87%", up: false },
    { symbol: "SOL", value: "$178.3", change: "+4.12%", up: true },
    { symbol: "XRP", value: "$0.612", change: "-1.45%", up: false },
  ],
};

*/}
const breakingNewsBar = {
  text: "U.S. stocks open June at all-time highs. Nasdaq +8% since April end. S&P 500 consolidating. Oil retreating on Iran peace hopes. ",
  time: "12 min ago",
  markets: [
    { label: "S&P 500", value: "5,321.41", change: "+0.82%", up: true },
    { label: "NASDAQ", value: "16,920.79", change: "+1.10%", up: true },
    { label: "DOW JONES", value: "39,069.59", change: "+0.35%", up: true },
  ],
};

const latestNewsTabs = ["All", "Markets", "Finance", "Business", "Technology", "Energy", "More"];

type NewsItem = { id: number; hot: boolean; title: string; time: string; image: string; link: string };

const latestNewsData: Record<string, NewsItem[]> = {
  All: [
    { id: 5, hot: true, title: "Technology & AI Infrastructure: Alphabet plans $80B stock offering to fund AI data-center expansion as hyperscaler capex tops $700B while grid, water and community pushback intensify.", time: "Just now", image: Ln1Img, link: "/technology" },
    { id: 1, 
      hot: true,  
      title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push ", 
       time: "12 min ago",
     image: Ln1Img, 
     link: "/technology"
    },
    { id: 2, hot: false, title: "U.S. Equity Markets Rally on Strong Manufacturing Data  ", time: "35 min ago", 
      image: HeroImg,
      link: "/markets"
    },
    { id: 3, hot: false, title: "PwC 2026 Global Digital Trust Insights: Enterprises Escalate Defense Spending  ",  time: "1 hr ago", 
      image: LN3Img,
      link: "/economy"
    },
    { id: 4, hot: false, title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally  ", 
      time: "2 hr ago", 
      image: LN4Img,
      link: "/energy"
    },
  ],
  Markets: [
    { id: 1, 
      hot: true, 
       title: "S&P 500 hits all-time high as Fed holds rates steady", 
       time: "10 min ago", 
       image: "https://images.unsplash.com/photo-1778406466505-6129d0555557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/markets"},
    { id: 2, hot: false, title: "Gold surges to $2,400 amid global uncertainty", time: "40 min ago", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/markets" },
    { id: 3, hot: false, title: "Asian markets rally on strong China manufacturing data",  time: "1 hr ago", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/markets" },
    { id: 4, hot: false, title: "Bitcoin crosses $70,000 as ETF inflows hit record",  time: "2 hr ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/markets" },
  ],
  Economy: [
    { id: 1,
       hot: true,  
      title: "U.S. Equity Markets Rally on Strong Manufacturing Data ",  
      time: "20 min ago", 
      image: "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=400",link: "/finance" },
    { id: 2, 
      hot: false, title: "Berkshire Hathaway Acquires Home Builder Taylor Morrison for $6.8 Billion ", 
      time: "55 min ago", 
      image: "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBob3NwaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc5Mzg1OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/finance" },
    { id: 3, hot: false, title: "Fertitta Entertainment to Acquire Caesars Entertainment for $17.6 Billion", 
       time: "2 hr ago", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/finance" },
    { id: 4, hot: false, title: "Scotiabank to Acquire Maple Financial in Wealth Expansion Play ", 
      time: "3 hr ago", image: "https://images.unsplash.com/photo-1778406466505-6129d0555557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/finance" },
  ],
  Business: [
    { id: 1, hot: true,  title: "Apple unveils Vision Pro 2 with 40% thinner design",  time: "15 min ago", image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBmdXR1cmV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/business-news" },
    { id: 2, hot: false, title: "Amazon acquires Indian logistics firm for $1.2 billion",  time: "1 hr ago", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/business-news" },
    { id: 3, hot: false, title: "Goldman Sachs raises S&P 500 year-end target to 6,500",  time: "2 hr ago", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/business-news" },
    { id: 4, hot: false, title: "Reliance Industries enters global streaming market",  time: "3 hr ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/business-news" },
  ],
  Technology: [
    { id: 5, hot: true, title: "Alphabet plans $80B AI infrastructure stock offering as hyperscaler capex tops $700B and data-center delays mount", time: "Just now", image: Ln1Img, link: "/technology" },
    { id: 1, hot: true,  title: "Nvidia Leads AI Infrastructure Revolution with Humanoid Robot Push ",  time: "5 min ago", image: "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZpZW50JTIwdGVjaG5vbG9neSUyMGluZm92YXRpb24lMjBkaWdpdGFsJTIwZnV0dXJlfGVufDF8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/technology" },
    { id: 2, hot: false, title: "Intel Attempts Inference-Chip Comeback as AI Compute Wars Intensify",  time: "30 min ago", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/technology" },
    { id: 3, hot: false, title: "SoftBank Bets Big on European Data Centers ", time: "1 hr ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/technology" },
    { id: 4, hot: false, title: "Quantum computing startup achieves 1,000-qubit milestone",  time: "2 hr ago", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/technology" },
  ],
  Energy: [
    { id: 1, hot: true,  title: "Data Centers and AI Workloads Force Energy Policy Reversals Globally  ", time: "25 min ago", image: "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=400",link: "/energy" },
    { id: 2, hot: false, title: "China's Dominant Position in Clean Tech Supply Chains Creates New Risk Calculus ",  time: "1 hr ago", image: "https://images.unsplash.com/photo-1778406466505-6129d0555557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/energy" },
    { id: 3, hot: false, title: "JP Morgan: Energy Resiliency Now a National Security Imperative ",  time: "2 hr ago", image: "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBob3NwaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc5Mzg1OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/energy" },
    { id: 4, hot: false, title: "Shell posts record profits as LNG demand surges in Asia",  time: "3 hr ago", image: "https://images.unsplash.com/photo-1761233138997-44d9b002a08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxzdG9jayUyMG1hcmtldCUyMGZpbmFuY2UlMjB3YWxsJTIwc3RyZWV0fGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/energy" },
  ],
  More: [
    { id: 1, hot: false, title: "FDA approves breakthrough gene therapy for rare childhood disease", time: "1 hr ago", image: "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNpbmUlMjBob3NwaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzc5Mzg1OTg1fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/more" },
    { id: 2, hot: false, title: "Singapore's Smart Nation 2.0 plan sets global benchmark",  time: "2 hr ago", image: "https://images.unsplash.com/photo-1747499967281-c0c5eec9933c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzbWFydCUyMGNpdHklMjB1cmJhbiUyMGZ1dHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzkzODU5ODR8MA&ixlib=rb-4.1.0&q=80&w=400",link: "/more" },
    { id: 3, hot: false, title: "Panama Canal expansion cuts Asia-US shipping time by 18 days",  time: "3 hr ago", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",link: "/more" },
    { id: 4, hot: false, title: "EU passes landmark AI Governance Act with sweeping regulations",  time: "4 hr ago", image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3OTM4NTk4NHww&ixlib=rb-4.1.0&q=80&w=400",link: "/more" },
  ],
};

const editorsPicks = [
  {
    id: 1,
    title: "The Intelligence Age: How CEOs Are Navigating Transformation.",
    subtitle: "Their collective perspectives reveal a leadership class grappling with the most consequential technology transition in corporate history.",
    time: "3 hr ago",
    image: EdipickImg,
  },
];

const magazinePreview = {
  title: "The AI Revolution",
  subtitle: "Reshaping business, economies, and the future of work.",
  image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwY292ZXIlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzc5Mzg1OTc3fDA&ixlib=rb-4.1.0&q=80&w=400",
};

const prideTimes30 = [
  {
    rank: 1,
    name: "Jensen Huang ",
    company: "Nvidia ",
    sector: "Defining the AI infrastructure era at COMPUTEX 2026. ",
  },
  {
    rank: 2,
    name: "Satya Nadella ",
    company: "Microsoft ",
    sector: "Leading ethical AI adoption and enterprise digital transformation. ",
  },
  {
    rank: 3,
    name: "Sundar Pichai ",
    company: "Alphabet / Google ",
    sector: "Driving AI integration across search, cloud, and automotive tech. ",
  },
  {
    rank: 4,
    name: "Elon Musk ",
    company: "Tesla / SpaceX / X ",
    sector: "Disrupting energy, space, and AI; SpaceX IPO on the horizon. ",
  },
  {
    rank: 5,
    name: "Sam Altman ",
    company: "OpenAI",
    sector: "Shaping the frontier of large language models and AGI research. ",
  },
  {
    rank: 6,
    name: "Andy Jassy ",
    company: "Amazon ",
    sector: "Scaling AWS as AI's preferred cloud infrastructure partner.",
  },
  {
    rank: 7,
    name: "Lisa Su ",
    company: "AMD",
    sector: "Challenging Nvidia's AI chip dominance with competitive GPU roadmap. ",
  },
  {
    rank: 8,
    name: "CC Wei ",
    company: "TSMC",
    sector: "Controlling the world's most advanced semiconductor manufacturing. ",
  },
  {
    rank: 9,
    name: "Alex Karp ",
    company: "Palantir ",
    sector: "Surging 6 places in IMD rankings on AI and defense demand. ",
  },
  {
    rank: 10,
    name: "Mary Barra ",
    company: "General Motors ",
    sector: "Navigating EV transition amid battery supply chain pressures. ",
  },
];

/* ─── HELPERS ───────────────────────────────────────── */

/* Maps each section/tag to a distinct signature color — colors encode
   category identity (finance, tech, cyber, energy, leadership) rather
   than being decorative. Falls back to the brand crimson. */
/* Single restrained brand accent for all category eyebrows/tags — matches
   the reference's uniform masthead-red treatment rather than multi-hue coding. */
function categoryColor(_label: string): string {
  return "#A6192E";
}

function ChangeChip({ change, up }: { change: string; up: boolean }) {
  return (
    <span className={`text-xs font-semibold flex items-center gap-0.5 ${up ? "text-emerald-600" : "text-rose-600"}`}>
      {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
      {change}
    </span>
  );
}

/* Relative-time formatter for the "Updated Xs ago" live indicator. Two
   floating timestamps (lastUpdated / now) are diffed on every clock tick
   rather than storing a string, so the label stays accurate between fetches. */
function formatElapsed(from: Date, to: Date): string {
  const secs = Math.max(0, Math.floor((to.getTime() - from.getTime()) / 1000));
  if (secs < 5) return "just now";
  if (secs < 60) return `${secs}s ago`;
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  return `${hrs}h ago`;
}

/* ─── MAIN COMPONENT ────────────────────────────────── */

export function HomePage() {
  const [activeMarketTab, setActiveMarketTab] = useState("Indices");
    const [activeNewsTab, setActiveNewsTab] = useState("All");
    const [tickerData, setTickerData] = useState<any[]>([]);
    const location = useLocation();

const [marketSnapshotData, setMarketSnapshotData] = useState<any>({
  Indices: [],
  Commodities: [],
  Currencies: [],
  Crypto: [],
});

const [breakingMarkets, setBreakingMarkets] = useState<any[]>([]);

/* Live-data freshness: lastUpdated is stamped whenever a fetch succeeds,
   now ticks every second purely to force the "Updated Xs ago" label to
   re-render — neither drives a re-fetch on its own. */
const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
const [now, setNow] = useState<Date>(new Date());

useEffect(() => {
  loadMarketData();

  // Auto-refresh quotes in the background so the strip and snapshot
  // panel stay current without the reader having to reload the page.
  const refreshTimer = setInterval(() => {
    loadMarketData();
  }, 45000);

  // Separate 1s clock just for the relative "Updated Xs ago" text.
  const clockTimer = setInterval(() => {
    setNow(new Date());
  }, 1000);

  return () => {
    clearInterval(refreshTimer);
    clearInterval(clockTimer);
  };
}, []);

const loadMarketData = async () => {
  try {
    const data = await getQuotes();

    const ticker = [
      {
        label: data.indices[0]?.name,
        value: data.indices[0]?.value,
        change: data.indices[0]?.change,
        up: data.indices[0]?.up,
      },
      {
        label: data.indices[1]?.name,
        value: data.indices[1]?.value,
        change: data.indices[1]?.change,
        up: data.indices[1]?.up,
      },
      {
        label: data.indices[2]?.name,
        value: data.indices[2]?.value,
        change: data.indices[2]?.change,
        up: data.indices[2]?.up,
      },
      {
        label: "BTC",
        value: data.crypto[0]?.value,
        change: data.crypto[0]?.change,
        up: data.crypto[0]?.up,
      },
      {
        label: "ETH",
        value: data.crypto[1]?.value,
        change: data.crypto[1]?.change,
        up: data.crypto[1]?.up,
      },
    ].filter((t) => t.label && t.value);

    setTickerData(ticker);

    setBreakingMarkets(ticker.slice(0, 3));

    setMarketSnapshotData({
      Indices: data.indices.map((item) => ({
        symbol: item.name,
        value: item.value,
        change: item.change,
        up: item.up,
      })),

      Crypto: data.crypto.map((item) => ({
        symbol: item.name,
        value: item.value,
        change: item.change,
        up: item.up,
      })),

      Commodities: [],
      Currencies: [],
    });

    setLastUpdated(new Date());
  } catch (error) {
    console.error("Market API Error:", error);
  }
};

  const todayLabel = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="pt-page pt-bloomberg-shell min-h-screen font-serif text-black antialiased">

      {/* ── MASTHEAD ── */}
      <div className="pt-masthead w-full max-w-[1600px] mx-auto px-3 sm:px-6 pt-6 pb-4 font-sans">
        <div className="flex items-center justify-between text-[11px] text-[var(--pt-muted)] uppercase tracking-wide mb-5">
          <span>{todayLabel}</span>
          <div className="flex items-center gap-5">
            <span className="hidden sm:inline">Jaipur Edition</span>
            <button className="flex items-center gap-1.5 hover:text-[var(--pt-accent)] transition-colors">
              <Search size={12} /> Search
            </button>
            <button className="hover:text-[var(--pt-accent)] transition-colors" aria-label="Notifications">
              <Bell size={13} />
            </button>
            <span className="hidden sm:flex items-center gap-1.5 hover:text-[var(--pt-accent)] transition-colors cursor-pointer">
              <User size={12} /> Sign in
            </span>
          </div>
        </div>
        <Link to="/" className="block text-center">
          <h1
            className="font-black leading-none tracking-tight text-black"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.75rem, 2.1rem + 3.2vw, 5.5rem)" }}
          >
            Pride<span className="text-[var(--pt-accent)]">Times</span>
          </h1>
          <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-[var(--pt-muted)]">
            Markets · Technology · Business · Global Leadership
          </p>
        </Link>
        <div className="mt-5 border-t-[3px] border-black" />
      </div>

      {/* ── STICKY HEADER DOCK: section nav + breaking bar + ticker ── */}
      <div className="sticky top-0 z-20">

        {/* 1. SECTION NAV */}
        <nav className="pt-section-nav bg-white border-b border-gray-300 font-sans">
          <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6">
            <div className="flex items-center gap-0.5 overflow-x-auto no-scrollbar">
              {navItems.map((item) => {
                const isActive =
                  item.to === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`pt-nav-link relative px-3 sm:px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                      isActive ? "text-black pt-nav-active" : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* 2. BREAKING NEWS + MARKET PILLS */}
        <div className="pt-market-bar bg-black border-b-2 border-black">
          <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-6 py-2.5 flex flex-col lg:flex-row gap-2 lg:gap-6 font-sans">

            {/* Breaking News */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <span className="pt-badge-breaking border text-[10px] font-bold px-2.5 py-1 flex-shrink-0 uppercase tracking-[0.15em]">
                Breaking
              </span>

              <p className="text-xs text-gray-200 truncate flex-1 tracking-wide">
                {breakingNewsBar.text}
              </p>

              <span className="text-[10px] text-gray-400 whitespace-nowrap uppercase tracking-wide">
                {breakingNewsBar.time}
              </span>
            </div>

            {/* Markets */}
            <div className="flex items-center gap-5 overflow-x-auto no-scrollbar pb-1 border-t lg:border-t-0 lg:border-l border-gray-700 pt-2 lg:pt-0 lg:pl-6">

              {/* Live auto-refresh indicator */}
              <div className="flex items-center gap-1.5 flex-shrink-0" title="Market data refreshes automatically">
                <span className="pt-live-dot" />
                <span className="text-[10px] text-gray-400 uppercase tracking-wide whitespace-nowrap">
                  Updated {formatElapsed(lastUpdated, now)}
                </span>
              </div>

              {breakingMarkets.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-1.5 text-xs whitespace-nowrap flex-shrink-0"
                >
                  <span className="text-gray-400 text-[11px] uppercase tracking-wide">
                    {m.label}
                  </span>
                  <span className="font-semibold text-white">
                    {m.value}
                  </span>
                  <span className={`text-[11px] font-medium ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                    {m.up ? "▲" : "▼"} {m.change}
                  </span>
                </div>
              ))}

              <Link
                to="/markets"
                className="border border-white text-white text-[10px] px-3 py-1.5 flex items-center gap-1 hover:bg-[var(--pt-accent)] hover:border-[var(--pt-accent)] transition-colors uppercase tracking-wide whitespace-nowrap flex-shrink-0"
              >
                View Markets
                <ArrowRight size={10} />
              </Link>
            </div>

          </div>
        </div>

        {/* 3. SCROLLING MARKET TICKER TAPE — reuses tickerData from getQuotes() */}
        {tickerData.length > 0 && (
          <div className="pt-ticker-bar bg-white border-b border-gray-300 overflow-hidden font-sans">
            <div className="pt-ticker-track flex items-center w-max py-1.5">
              {[...tickerData, ...tickerData].map((t, i) => (
                <span
                  key={`${t.label}-${i}`}
                  className="flex items-center gap-2 text-[11px] whitespace-nowrap px-5 border-r border-gray-200"
                >
                  <span className="text-gray-500 uppercase tracking-wide">{t.label}</span>
                  <span className="font-semibold text-black">{t.value}</span>
                  <span className={`font-medium flex items-center gap-0.5 ${t.up ? "text-emerald-600" : "text-rose-600"}`}>
                    {t.up ? "▲" : "▼"} {t.change}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ── 2. MAIN CONTENT ── */}
      <main className="pt-main w-full max-w-[1600px] mx-auto px-3 sm:px-6 pt-6 pb-10">

        {/* 2a. HERO: main story + dark overlay feature card */}
        <div className="pt-hero-grid grid grid-cols-12 gap-6 mb-10 pb-8 border-b border-gray-300">

          {/* MAIN HERO */}
          <div className="col-span-12 lg:col-span-7 pt-animate-in">
            <Link to="/technology" className="group block">
              <div className="relative overflow-hidden h-[280px] sm:h-[360px] lg:h-[440px]">
                <ImageWithFallback
                  src={heroStory.image}
                  alt={heroStory.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>
              <span
                className="inline-block text-[11px] font-bold mt-4 mb-2 uppercase tracking-[0.15em] font-sans"
                style={{ color: categoryColor(heroStory.category) }}
              >
                {heroStory.category}
              </span>
              <h1 className="pt-headline-hero text-black font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">{heroStory.title}</h1>
              <p className="font-sans text-gray-700 text-sm leading-relaxed mb-2 max-w-xl">{heroStory.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-black uppercase tracking-wide font-sans border-b border-black pb-0.5 group-hover:text-[var(--pt-accent)] group-hover:border-[var(--pt-accent)] transition-colors">
                Read Full Story <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          {/* DARK OVERLAY FEATURE (uses sideStories[0]) */}
          <div className="col-span-12 lg:col-span-5 pt-animate-in" style={{ animationDelay: "90ms" }}>
            {sideStories[0] && (
              <Link
                to={sideStories[0].link}
                className="group relative block overflow-hidden h-[280px] sm:h-[360px] lg:h-[440px]"
              >
                <ImageWithFallback
                  src={sideStories[0].image}
                  alt={sideStories[0].title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 font-sans">
                  <span
                    className="inline-block text-[10px] font-bold mb-2 uppercase tracking-[0.15em] text-white/90"
                  >
                    {sideStories[0].tag}
                  </span>
                  <h3 className="text-white text-lg sm:text-xl font-bold leading-snug font-serif group-hover:underline decoration-1 underline-offset-2">
                    {sideStories[0].title}
                  </h3>
                  <span className="text-gray-300 text-[10px] flex items-center gap-1 mt-2">
                    <Clock size={9} /> {sideStories[0].time}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* 2b. TOP STORIES (tabbed, real data) + MARKET SNAPSHOT sidebar */}
        <div className="pt-editor-grid grid grid-cols-12 gap-8 mb-10 pb-8 border-b border-gray-300">

          {/* TOP STORIES GRID */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center justify-between pt-rule-double">
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight font-serif">Top Stories</h2>
            </div>

            {/* Tabs (existing interactive state, unchanged) */}
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar mb-5 border-b border-gray-300 pb-2 font-sans">
              {latestNewsTabs.map((t) => (
                <span
                  key={t}
                  onClick={() => setActiveNewsTab(t)}
                  className={`text-[11px] whitespace-nowrap cursor-pointer uppercase tracking-wide transition-colors ${
                    activeNewsTab === t
                      ? "text-black font-bold border-b-2 border-[var(--pt-accent)] pb-2 -mb-2"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Responsive story-card grid, sourced from latestNewsData[activeNewsTab] */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {(latestNewsData[activeNewsTab] ?? latestNewsData["All"]).map((item, i) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="group flex flex-col pt-animate-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] mb-3">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500"
                    />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.12em] font-sans mb-1 flex items-center gap-1.5"
                    style={{ color: categoryColor(item.link) }}
                  >
                    {item.hot && <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />}
                    {item.link.replace("/", "")}{item.hot ? " · HOT" : ""}
                  </span>
                  <h3 className="text-sm font-bold leading-snug group-hover:underline decoration-1 underline-offset-2 line-clamp-3">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-2 font-sans">
                    <Clock size={9} /> {item.time}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* MARKET SNAPSHOT (existing interactive state, unchanged) */}
          <div className="col-span-12 lg:col-span-4 border border-gray-300 rounded-md overflow-hidden p-4 font-sans h-fit">
            <div className="flex items-center justify-between pt-rule-double">
              <h3 className="text-sm font-bold tracking-tight uppercase">Market Snapshot</h3>
            </div>
            <div className="flex gap-4 mb-3 border-b border-gray-300 pb-2">
              {["Indices", "Crypto"].map((t) => (
                <span
                  key={t}
                  onClick={() => setActiveMarketTab(t)}
                  className={`text-[11px] cursor-pointer whitespace-nowrap transition-colors uppercase tracking-wide ${
                    activeMarketTab === t
                      ? "text-black font-bold border-b-2 border-[var(--pt-accent)] pb-2 -mb-2"
                      : "text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="divide-y divide-gray-200">
              {(marketSnapshotData[activeMarketTab] || []).map((m) => (
                <div key={m.symbol} className="py-2 flex items-center justify-between">
                  <span className="text-xs text-gray-800 font-medium">{m.symbol}</span>
                  <div className="flex items-center gap-3">
                    <svg width="40" height="18" viewBox="0 0 40 18">
                      <polyline
                        points={m.up ? "0,14 8,10 16,12 24,6 32,8 40,3" : "0,4 8,8 16,6 24,12 32,10 40,15"}
                        fill="none"
                        stroke={m.up ? "#059669" : "#E11D48"}
                        strokeWidth="1.5"
                      />
                    </svg>
                    <ChangeChip change={m.change} up={m.up} />
                  </div>
                </div>
              ))}
            </div>
            <Link to="/markets" className="mt-3 text-[10px] text-black flex items-center gap-0.5 hover:gap-1.5 hover:text-[var(--pt-accent)] hover:border-[var(--pt-accent)] transition-all font-bold uppercase tracking-wide border-b border-black pb-0.5 w-fit">
              View All Markets <ArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* 2c. EDITOR'S PICKS: big feature + 2 real side cards */}
        <div className="grid grid-cols-12 gap-8 mb-10 pb-8 border-b border-gray-300">
          <div className="col-span-12">
            <div className="flex items-center justify-between pt-rule-double">
              <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight font-serif">Editor's Picks</h2>
              <Link to="/ceospotlight" className="text-[10px] text-black hover:gap-1.5 hover:text-[var(--pt-accent)] flex items-center gap-0.5 transition-all font-bold uppercase tracking-wide font-sans">
                View All <ChevronRight size={10} />
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            {editorsPicks.map((p) => (
              <Link key={p.id} to="/leadership" className="group block">
                <div className="overflow-hidden mb-3">
                  <ImageWithFallback
                    src={p.image}
                    alt={p.title}
                    className="w-full h-[320px] object-cover group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] font-sans mb-1 inline-block" style={{ color: categoryColor("leadership") }}>
                  Editor's Pick
                </span>
                <h3 className="text-xl font-bold leading-snug group-hover:underline decoration-1 underline-offset-2 font-serif mb-2">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-gray-600 mb-2 max-w-2xl">{p.subtitle}</p>
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5 font-sans">
                  <Clock size={9} /> {p.time}
                </span>
              </Link>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-col divide-y divide-gray-200 font-sans">
            {/* Magazine pick */}
            <Link to="/magazine" className="group flex gap-4 py-4 first:pt-0">
              <div className="overflow-hidden flex-shrink-0 w-[110px] h-[90px]">
                <ImageWithFallback
                  src={magazinePreview.image}
                  alt={magazinePreview.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: categoryColor("magazine") }}>Magazine</span>
                <h3 className="text-sm font-bold leading-snug mt-1 group-hover:underline decoration-1 underline-offset-2 font-serif">{magazinePreview.title}</h3>
                <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{magazinePreview.subtitle}</p>
              </div>
            </Link>

            {/* Finance pick (sideStories[1]) */}
            {sideStories[1] && (
              <Link to={sideStories[1].link} className="group flex gap-4 py-4">
                <div className="overflow-hidden flex-shrink-0 w-[110px] h-[90px]">
                  <ImageWithFallback
                    src={sideStories[1].image}
                    alt={sideStories[1].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: categoryColor(sideStories[1].tag) }}>{sideStories[1].tag}</span>
                  <h3 className="text-sm font-bold leading-snug mt-1 group-hover:underline decoration-1 underline-offset-2 font-serif">{sideStories[1].title}</h3>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{sideStories[1].excerpt}</p>
                </div>
              </Link>
            )}

            {/* Business pick (real, unused item from latestNewsData) */}
            {latestNewsData.Business?.[2] && (
              <Link to={latestNewsData.Business[2].link} className="group flex gap-4 py-4">
                <div className="overflow-hidden flex-shrink-0 w-[110px] h-[90px]">
                  <ImageWithFallback
                    src={latestNewsData.Business[2].image}
                    alt={latestNewsData.Business[2].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: categoryColor("business") }}>Business</span>
                  <h3 className="text-sm font-bold leading-snug mt-1 group-hover:underline decoration-1 underline-offset-2 font-serif">{latestNewsData.Business[2].title}</h3>
                  <span className="text-[10px] text-gray-400 flex items-center gap-0.5 mt-1">
                    <Clock size={8} /> {latestNewsData.Business[2].time}
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* 2d. TRENDING NOW — real Pride Times 30 leadership data */}
        <div className="mb-10 pb-8 border-b border-gray-300">
          <div className="flex items-center justify-between pt-rule-double">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight font-serif">Trending Now</h2>
            <Link to="/billionaires" className="text-[10px] text-black hover:gap-1.5 hover:text-[var(--pt-accent)] flex items-center gap-0.5 transition-all font-bold uppercase tracking-wide font-sans">
              Pride Times 30 <ChevronRight size={10} />
            </Link>
          </div>
          <div className="divide-y divide-gray-200 font-sans">
            {prideTimes30.slice(0, 5).map((p) => (
              <Link
                key={p.rank}
                to="/billionaires"
                className="group flex items-center gap-4 sm:gap-6 py-4"
              >
                <span
                  className="text-2xl sm:text-3xl font-serif font-bold w-10 sm:w-14 flex-shrink-0"
                  style={{ color: categoryColor("leadership"), opacity: 0.85 }}
                >
                  {String(p.rank).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold group-hover:underline decoration-1 underline-offset-2">
                    {p.name}
                    <span className="text-gray-400 font-normal"> — {p.company}</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{p.sector}</p>
                </div>
                <ArrowRight size={14} className="text-gray-300 group-hover:text-[var(--pt-accent)] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* 2e. VISUAL STORIES — dark editorial grid, real unused articles */}
        <div className="pt-visual-dark -mx-3 sm:-mx-6 px-3 sm:px-6 py-8 mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight font-serif text-white">Visual Stories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              latestNewsData.Technology?.[2],
              latestNewsData.Energy?.[0],
              latestNewsData.Business?.[0],
            ].filter(Boolean).map((item, i) => item && (
              <Link
                key={item.id}
                to={item.link}
                className="group relative block overflow-hidden aspect-[4/5] pt-animate-in"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 font-sans">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest text-white"
                    style={{ color: categoryColor(item.link) }}
                  >
                    {item.link.replace("/", "")}
                  </span>
                  <h3 className="text-white text-sm font-bold leading-snug mt-1 font-serif group-hover:underline decoration-1 underline-offset-2 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2f. FEATURE BANNER — full-bleed treatment of the Pride Times 30 story */}
        {pt30.map((s) => (
          <Link
            to={s.link}
            key={s.id}
            className="group relative block overflow-hidden h-[320px] sm:h-[420px] -mx-3 sm:-mx-6"
          >
            <ImageWithFallback
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 font-sans max-w-3xl">
              <span
                className="inline-block text-[11px] font-bold mb-3 uppercase tracking-[0.15em] text-white/90"
              >
                {s.tag}
              </span>
              <h3 className="text-white text-2xl sm:text-4xl font-bold leading-tight font-serif group-hover:underline decoration-1 underline-offset-4 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 max-w-2xl">{s.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-white uppercase tracking-wide border-b border-white pb-0.5 group-hover:text-[#A6192E] group-hover:border-[#A6192E] transition-colors">
                Read More <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}

      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

        /* ─── Editorial design tokens ─── */
        :root {
          --pt-bg: #F4F0E6;          /* warm parchment page background */
          --pt-surface: #FFFFFF;     /* white article/card surface */
          --pt-ink: #1B1815;         /* rich near-black headline/text */
          --pt-ink-soft: #3A342E;    /* softened black for large text blocks */
          --pt-border: #DAD4C8;      /* hairline rule */
          --pt-border-soft: #E7E2D6;
          --pt-muted: #6E655A;       /* muted caption/meta text */
          --pt-accent: #A6192E;      /* masthead crimson — echoes the existing logo/Subscribe red */
        }

        .pt-page { background-color: var(--pt-bg); }

        .font-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
        .font-sans { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .bg-white { background-color: var(--pt-surface); }
        .bg-black { background-color: var(--pt-ink); }
        .text-black { color: var(--pt-ink); }
        .border-black { border-color: var(--pt-ink); }

        /* Newspaper-style double rule under section headers: heavy ink line +
           a short single-accent thread — one quiet signature, not a rainbow */
        .pt-rule-double {
          position: relative;
          border-bottom: 2px solid var(--pt-ink);
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .pt-rule-double::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 48px;
          height: 2px;
          background: var(--pt-accent);
        }

        .pt-badge-breaking { background-color: var(--pt-accent); color: #ffffff; border-color: var(--pt-accent); }

        /* Dark section wrapper for Visual Stories */
        .pt-visual-dark { background-color: var(--pt-ink); }

        /* ─── Section nav underline ───
           A single accent bar per link, scaled from the center-left rather
           than faded in, so it reads as a deliberate mark being drawn, not
           a hover glow. */
        .pt-nav-link::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 4px;
          height: 2px;
          background: var(--pt-accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.25s ease;
        }
        .pt-nav-link:hover::after,
        .pt-nav-link.pt-nav-active::after {
          transform: scaleX(1);
        }
        @media (max-width: 640px) {
          .pt-nav-link { padding-left: 10px; padding-right: 10px; }
        }

        /* ─── Live auto-refresh pulse ─── */
        .pt-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #34d399;
          display: inline-block;
          flex-shrink: 0;
          animation: pt-pulse 1.8s ease-in-out infinite;
        }
        @keyframes pt-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.5); }
          50% { opacity: 0.55; box-shadow: 0 0 0 4px rgba(52, 211, 153, 0); }
        }

        /* ─── Scrolling market ticker tape ───
           Track is rendered twice back-to-back and translated exactly -50%,
           so the loop point is invisible. Pauses on hover so figures are
           readable on demand. */
        .pt-ticker-track {
          animation: pt-ticker-scroll 32s linear infinite;
        }
        .pt-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes pt-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Gentle on-load entrance — the only motion on the page, kept subtle */
        @keyframes pt-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pt-animate-in { animation: pt-fade-up 0.6s ease-out both; }

        .pt-headline-hero {
          font-size: clamp(1.85rem, 1rem + 3.4vw, 3.75rem);
          line-height: 1.05;
          letter-spacing: -0.015em;
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        * { scroll-behavior: smooth; }

        .scrollbar-hide::-webkit-scrollbar { height: 3px; }
        .scrollbar-hide::-webkit-scrollbar-thumb { background: rgba(20, 17, 15, 0.25); }

        ::selection { background: rgba(20, 17, 15, 0.12); color: inherit; }

        @media (max-width: 576px) {
          .pt-headline-hero { line-height: 1.12; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-animate-in { animation: none !important; }
          .pt-ticker-track { animation: none !important; }
          .pt-live-dot { animation: none !important; }
        }


        /* =========================================================
           BLOOMBERG-INSPIRED EDITORIAL OVERRIDE
           Content, headlines, routes and images are intentionally unchanged.
           This layer only changes geometry, typography, borders and spacing.
           ========================================================= */
        .pt-bloomberg-shell {
          --bb-black: #080808;
          --bb-ink: #111111;
          --bb-muted: #6f6f6f;
          --bb-border: #d9d9d9;
          --bb-soft: #f5f5f5;
          --bb-red: #d71920;
          background: #fff !important;
          color: var(--bb-ink) !important;
          font-family: Arial, Helvetica, sans-serif;
        }

        .pt-bloomberg-shell .font-serif,
        .pt-bloomberg-shell .font-sans {
          font-family: Arial, Helvetica, sans-serif;
        }

        .pt-bloomberg-shell .pt-masthead {
          max-width: 1180px !important;
          padding: 8px 18px 10px !important;
          background: #fff;
        }

        .pt-bloomberg-shell .pt-masthead > div:first-child {
          margin-bottom: 6px !important;
          font-size: 9px !important;
          letter-spacing: .04em !important;
        }

        .pt-bloomberg-shell .pt-masthead a h1 {
          font-family: Georgia, 'Times New Roman', serif !important;
          font-size: clamp(2.35rem, 4vw, 3.8rem) !important;
          font-weight: 800 !important;
          letter-spacing: -.055em !important;
          color: #111 !important;
        }

        .pt-bloomberg-shell .pt-masthead a h1 .text-\[var\(--pt-accent\)\] {
          color: var(--bb-red) !important;
        }

        .pt-bloomberg-shell .pt-masthead a p {
          margin-top: 2px !important;
          font-size: 8px !important;
          letter-spacing: .22em !important;
          color: #777 !important;
        }

        .pt-bloomberg-shell .pt-masthead > div:last-child {
          margin-top: 7px !important;
          border-top-width: 2px !important;
        }

        .pt-bloomberg-shell .pt-section-nav {
          background: var(--bb-black) !important;
          border: 0 !important;
        }

        .pt-bloomberg-shell .pt-section-nav > div {
          max-width: 1180px !important;
        }

        .pt-bloomberg-shell .pt-nav-link {
          color: #e5e5e5 !important;
          padding: 8px 11px !important;
          font-size: 9px !important;
          letter-spacing: .055em !important;
        }

        .pt-bloomberg-shell .pt-nav-link:hover,
        .pt-bloomberg-shell .pt-nav-link.pt-nav-active {
          color: #fff !important;
          background: #202020;
        }

        .pt-bloomberg-shell .pt-nav-link::after {
          left: 8px !important;
          right: 8px !important;
          bottom: 0 !important;
          height: 2px !important;
          background: var(--bb-red) !important;
        }

        .pt-bloomberg-shell .pt-market-bar {
          border-bottom: 1px solid #2b2b2b !important;
        }

        .pt-bloomberg-shell .pt-market-bar > div {
          max-width: 1180px !important;
          padding-top: 6px !important;
          padding-bottom: 6px !important;
        }

        .pt-bloomberg-shell .pt-badge-breaking {
          background: var(--bb-red) !important;
          border-color: var(--bb-red) !important;
          border-radius: 0 !important;
          font-size: 8px !important;
          padding: 3px 6px !important;
        }

        .pt-bloomberg-shell .pt-market-bar p {
          font-size: 9px !important;
          color: #d7d7d7 !important;
        }

        .pt-bloomberg-shell .pt-market-bar .text-\[10px\] {
          font-size: 8px !important;
        }

        .pt-bloomberg-shell .pt-ticker-bar {
          background: #f7f7f7 !important;
          border-bottom: 1px solid var(--bb-border) !important;
        }

        .pt-bloomberg-shell .pt-ticker-track {
          animation-duration: 38s;
        }

        .pt-bloomberg-shell .pt-ticker-track > span {
          padding: 5px 16px !important;
          font-size: 9px !important;
        }

        .pt-bloomberg-shell .pt-main {
          max-width: 1180px !important;
          padding: 20px 18px 45px !important;
        }

        .pt-bloomberg-shell .pt-hero-grid {
          grid-template-columns: minmax(0, 1.65fr) minmax(250px, .85fr) !important;
          gap: 14px !important;
          margin-bottom: 22px !important;
          padding-bottom: 18px !important;
        }

        .pt-bloomberg-shell .pt-hero-grid > div:first-child {
          border-right: 1px solid var(--bb-border);
          padding-right: 14px;
        }

        .pt-bloomberg-shell .pt-hero-grid > div:first-child > a > div {
          height: 365px !important;
          margin-bottom: 10px !important;
        }

        .pt-bloomberg-shell .pt-headline-hero {
          font-family: Georgia, 'Times New Roman', serif !important;
          font-size: clamp(1.55rem, 2.5vw, 2.45rem) !important;
          line-height: 1.02 !important;
          letter-spacing: -.025em !important;
          margin-bottom: 7px !important;
        }

        .pt-bloomberg-shell .pt-hero-grid .text-sm {
          font-size: 11px !important;
          line-height: 1.45 !important;
        }

        .pt-bloomberg-shell .pt-hero-grid > div:nth-child(2) {
          min-width: 0;
        }

        .pt-bloomberg-shell .pt-hero-grid > div:nth-child(2) > a {
          height: 365px !important;
        }

        .pt-bloomberg-shell .pt-hero-grid .text-lg,
        .pt-bloomberg-shell .pt-hero-grid .text-xl {
          font-family: Georgia, 'Times New Roman', serif !important;
          font-size: 18px !important;
          line-height: 1.12 !important;
        }

        .pt-bloomberg-shell .pt-rule-double {
          border-bottom: 2px solid #111 !important;
          padding-bottom: 7px !important;
          margin-bottom: 11px !important;
        }

        .pt-bloomberg-shell .pt-rule-double::after {
          width: 34px !important;
          height: 2px !important;
          bottom: -4px !important;
          background: var(--bb-red) !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid,
        .pt-bloomberg-shell .pt-editors-grid {
          gap: 14px !important;
          margin-bottom: 22px !important;
          padding-bottom: 18px !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid > div:first-child {
          border-right: 1px solid var(--bb-border);
          padding-right: 14px;
        }

        .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 {
          gap: 0 !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 > a {
          padding: 10px 12px 12px 0;
          border-bottom: 1px solid var(--bb-border);
        }

        .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 > a:nth-child(odd) {
          border-right: 1px solid var(--bb-border);
          padding-right: 12px;
          margin-right: 12px;
        }

        .pt-bloomberg-shell .pt-topstories-grid .aspect-\[4\/3\] {
          aspect-ratio: 16 / 9 !important;
          margin-bottom: 7px !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid h3 {
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 12px !important;
          line-height: 1.18 !important;
          font-weight: 700 !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid .text-\[10px\] {
          font-size: 8px !important;
        }

        .pt-bloomberg-shell .pt-topstories-grid > div:last-child {
          background: #f7f7f7;
          border: 1px solid #cfcfcf;
          padding: 11px !important;
          height: fit-content;
        }

        .pt-bloomberg-shell .pt-topstories-grid > div:last-child .pt-rule-double {
          background: transparent;
        }

        .pt-bloomberg-shell .pt-editors-grid > div:first-child {
          grid-column: 1 / -1;
        }

        .pt-bloomberg-shell .pt-editors-grid .h-\[320px\] {
          height: 275px !important;
        }

        .pt-bloomberg-shell .pt-editors-grid .lg\:col-span-7 {
          padding-right: 14px;
          border-right: 1px solid var(--bb-border);
        }

        .pt-bloomberg-shell .pt-editors-grid .text-xl {
          font-family: Georgia, 'Times New Roman', serif !important;
          font-size: 20px !important;
          line-height: 1.08 !important;
        }

        .pt-bloomberg-shell .pt-editors-grid .lg\:col-span-5 > a {
          padding: 10px 0 !important;
        }

        .pt-bloomberg-shell .pt-editors-grid .lg\:col-span-5 > a:first-child {
          padding-top: 0 !important;
        }

        .pt-bloomberg-shell .pt-editors-grid .w-\[110px\] {
          width: 92px !important;
          height: 72px !important;
        }

        .pt-bloomberg-shell .pt-editors-grid .text-sm {
          font-size: 11px !important;
        }

        .pt-bloomberg-shell .pt-page > main > .mb-10.pb-8.border-b.border-gray-300 {
          margin-bottom: 22px !important;
          padding-bottom: 18px !important;
        }

        .pt-bloomberg-shell .pt-page > main > .mb-10.pb-8.border-b.border-gray-300 h2,
        .pt-bloomberg-shell .pt-page > main h2 {
          font-family: Arial, Helvetica, sans-serif !important;
          font-size: 13px !important;
          font-weight: 800 !important;
          letter-spacing: .06em !important;
        }

        .pt-bloomberg-shell .pt-visual-dark {
          background: #111 !important;
          margin-left: -18px !important;
          margin-right: -18px !important;
          padding-left: 18px !important;
          padding-right: 18px !important;
        }

        .pt-bloomberg-shell .pt-visual-dark .aspect-\[4\/5\] {
          aspect-ratio: 4 / 3 !important;
        }

        .pt-bloomberg-shell .pt-visual-dark h3,
        .pt-bloomberg-shell .pt-visual-dark .text-sm {
          font-family: Arial, Helvetica, sans-serif !important;
        }

        .pt-bloomberg-shell .pt-main > a.group.relative.block.overflow-hidden {
          margin-left: -18px !important;
          margin-right: -18px !important;
          height: 340px !important;
        }

        .pt-bloomberg-shell .pt-main a:hover img {
          filter: none;
        }

        @media (max-width: 900px) {
          .pt-bloomberg-shell .pt-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .pt-bloomberg-shell .pt-hero-grid > div:first-child {
            border-right: 0;
            padding-right: 0;
          }
          .pt-bloomberg-shell .pt-hero-grid > div:first-child > a > div,
          .pt-bloomberg-shell .pt-hero-grid > div:nth-child(2) > a {
            height: 320px !important;
          }
          .pt-bloomberg-shell .pt-topstories-grid > div:first-child {
            border-right: 0;
            padding-right: 0;
          }
        }

        @media (max-width: 640px) {
          .pt-bloomberg-shell .pt-masthead {
            padding: 7px 12px 9px !important;
          }
          .pt-bloomberg-shell .pt-main {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          .pt-bloomberg-shell .pt-headline-hero {
            font-size: 1.8rem !important;
          }
          .pt-bloomberg-shell .pt-hero-grid > div:first-child > a > div,
          .pt-bloomberg-shell .pt-hero-grid > div:nth-child(2) > a {
            height: 250px !important;
          }
          .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 {
            grid-template-columns: 1fr !important;
          }
          .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 > a,
          .pt-bloomberg-shell .pt-topstories-grid .grid-cols-1.sm\:grid-cols-2.xl\:grid-cols-3 > a:nth-child(odd) {
            border-right: 0;
            margin-right: 0;
            padding-right: 0;
          }
          .pt-bloomberg-shell .pt-visual-dark,
          .pt-bloomberg-shell .pt-main > a.group.relative.block.overflow-hidden {
            margin-left: -12px !important;
            margin-right: -12px !important;
          }
        }

      `}</style>
    </div>
  );
}
