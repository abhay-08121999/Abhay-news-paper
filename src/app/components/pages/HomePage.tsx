import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, ArrowRight, TrendingUp, TrendingDown, Play, Radio } from "lucide-react";
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
  { rank: 1, name: "Jensen Huang ", company: "Nvidia ", sector: "Defining the AI infrastructure era at COMPUTEX 2026. " },
  { rank: 2, name: "Satya Nadella ", company: "Microsoft ", sector: "Leading ethical AI adoption and enterprise digital transformation. " },
  { rank: 3, name: "Sundar Pichai ", company: "Alphabet / Google ", sector: "Driving AI integration across search, cloud, and automotive tech. " },
  { rank: 4, name: "Elon Musk ", company: "Tesla / SpaceX / X ", sector: "Disrupting energy, space, and AI; SpaceX IPO on the horizon. " },
  { rank: 5, name: "Sam Altman ", company: "OpenAI", sector: "Shaping the frontier of large language models and AGI research. " },
  { rank: 6, name: "Andy Jassy ", company: "Amazon ", sector: "Scaling AWS as AI's preferred cloud infrastructure partner." },
  { rank: 7, name: "Lisa Su ", company: "AMD", sector: "Challenging Nvidia's AI chip dominance with competitive GPU roadmap. " },
  { rank: 8, name: "CC Wei ", company: "TSMC", sector: "Controlling the world's most advanced semiconductor manufacturing. " },
  { rank: 9, name: "Alex Karp ", company: "Palantir ", sector: "Surging 6 places in IMD rankings on AI and defense demand. " },
  { rank: 10, name: "Mary Barra ", company: "General Motors ", sector: "Navigating EV transition amid battery supply chain pressures. " },
];

/* ─── HELPERS ───────────────────────────────────────── */

function ChangeChip({ change, up }: { change: string; up: boolean }) {
  return (
    <span className={`text-xs font-semibold tabular-nums flex items-center gap-1 ${up ? "text-green-700" : "text-red-600"}`}>
      {up ? <TrendingUp size={11} strokeWidth={2.25} /> : <TrendingDown size={11} strokeWidth={2.25} />}
      {change}
    </span>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────── */

export function HomePage() {
  const [activeMarketTab, setActiveMarketTab] = useState("Indices");
    const [activeNewsTab, setActiveNewsTab] = useState("All");
    const [tickerData, setTickerData] = useState<any[]>([]);

const [marketSnapshotData, setMarketSnapshotData] = useState<any>({
  Indices: [],
  Commodities: [],
  Currencies: [],
  Crypto: [],
});

const [breakingMarkets, setBreakingMarkets] = useState<any[]>([]);
useEffect(() => {
  loadMarketData();
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
    ];

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
  } catch (error) {
    console.error("Market API Error:", error);
  }
};
  // Video sidebar uses the top Technology item; Latest picks up the remainder
  const allNewsItems = latestNewsData["All"];
  const videoFeature = allNewsItems[0];
  const latestRest = allNewsItems.slice(1, 4);
  // Secondary 4-card editorial grid reuses the same real article data
  const secondaryCards = [
    { ...allNewsItems[1], category: "Technology" },
    { ...allNewsItems[2], category: "Markets" },
    { ...allNewsItems[3], category: "Cybersecurity" },
    { ...allNewsItems[4], category: "Energy" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── BREAKING TICKER ── */}
        <div className="flex items-center gap-4 bg-black text-white text-xs px-4 py-2.5 rounded-[2px] mt-5 mb-8 overflow-hidden">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-[0.14em] text-red-500 shrink-0">
            <Radio size={11} strokeWidth={2.25} className="motion-safe:animate-pulse" />
            Breaking
          </span>
          <p className="flex-1 min-w-0 truncate text-gray-200">{breakingNewsBar.text}</p>
          <div className="hidden lg:flex items-center gap-4 shrink-0 border-l border-white/15 pl-4">
            {breakingNewsBar.markets.map((m) => (
              <span key={m.label} className="flex items-center gap-1.5 tabular-nums">
                <span className="text-gray-400">{m.label}</span>
                <span className={m.up ? "text-green-400" : "text-red-400"}>{m.change}</span>
              </span>
            ))}
          </div>
          <span className="hidden sm:flex items-center gap-1 text-gray-500 shrink-0">
            <Clock size={10} strokeWidth={2.25} />
            {breakingNewsBar.time}
          </span>
        </div>

        {/* ── MAIN CONTENT ── */}
        <main className="pb-14">

          {/* 2a. Three-column editorial hero: Top Story | Main Article + Related | Videos + Latest */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10 mb-10 border-b border-gray-200">

            {/* TOP STORY */}
            <Link to="/technology" className="group relative block overflow-hidden rounded-[2px]">
              <ImageWithFallback
                src={heroStory.image}
                alt={heroStory.title}
                className="w-full h-72 lg:h-[520px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-[10px] font-bold tracking-[0.16em] uppercase rounded-[2px]">
                {heroStory.category}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h1 className="font-serif text-2xl md:text-[28px] font-bold leading-[1.15] text-white">
                  {heroStory.title}
                </h1>
                <p className="text-sm text-gray-200 leading-[1.6] mt-2.5 line-clamp-3">
                  {heroStory.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wide mt-3.5 border-b border-white/60 pb-0.5">
                  Read Full Story
                  <ArrowRight size={13} strokeWidth={2.25} />
                </span>
              </div>
            </Link>

            {/* MAIN ARTICLE + RELATED STORY */}
            <div className="min-w-0">
              <Link to={sideStories[0].link} className="group block">
                <div className="overflow-hidden rounded-[2px]">
                  <ImageWithFallback
                    src={sideStories[0].image}
                    alt={sideStories[0].title}
                    className="w-full h-52 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="block mt-3.5 text-[11px] font-bold text-red-600 uppercase tracking-[0.14em]">
                  {sideStories[0].tag}
                </span>
                <h2 className="font-serif text-xl font-bold leading-[1.25] mt-1.5 text-gray-950 group-hover:text-red-600 transition-colors">
                  {sideStories[0].title}
                </h2>
                <p className="text-sm text-gray-600 mt-2 leading-[1.65] line-clamp-3">
                  {sideStories[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 uppercase tracking-wide mt-3 border-b border-gray-900 pb-0.5">
                  Read More
                  <ArrowRight size={11} strokeWidth={2.25} />
                </span>
              </Link>

              {/* RELATED STORY */}
              <Link to={sideStories[1].link} className="group flex gap-3.5 mt-6 pt-6 border-t border-gray-200">
                <div className="shrink-0 w-[110px] h-[80px] overflow-hidden rounded-[2px]">
                  <ImageWithFallback
                    src={sideStories[1].image}
                    alt={sideStories[1].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.14em]">
                    {sideStories[1].tag}
                  </span>
                  <h3 className="text-sm font-bold leading-[1.35] mt-1 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {sideStories[1].title}
                  </h3>
                  <span className="flex items-center gap-1 text-[11px] text-gray-400 mt-1.5">
                    <Clock size={9} strokeWidth={2.25} />
                    {sideStories[1].time}
                  </span>
                </div>
              </Link>
            </div>

            {/* TODAY'S VIDEOS + LATEST + MARKET SNAPSHOT */}
            <div className="min-w-0 flex flex-col gap-7">
              <div>
                <h2 className="font-serif text-lg font-bold mb-3.5">Today's Videos</h2>
                <Link to={videoFeature.link} className="group block">
                  <div className="relative overflow-hidden rounded-[2px]">
                    <ImageWithFallback
                      src={videoFeature.image}
                      alt={videoFeature.title}
                      className="w-full h-40 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/25 transition-colors">
                      <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-md">
                        <Play size={16} fill="black" className="text-black ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold leading-[1.4] mt-2.5 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {videoFeature.title}
                  </h3>
                </Link>
              </div>

              <div>
                <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-gray-900 border-b-2 border-black pb-2.5 mb-1">
                  Latest
                </h2>
                <div className="divide-y divide-gray-200">
                  {latestRest.map((item) => (
                    <Link key={item.id} to={item.link} className="group flex flex-col gap-1 py-3 first:pt-3">
                      <span className="text-[10px] uppercase tracking-wide text-gray-400">{item.time}</span>
                      <span className="text-sm font-medium leading-[1.4] text-gray-800 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Market Snapshot — compact stock box */}
              <div className="border border-gray-200 rounded-[2px] p-4">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-900">
                    Market Snapshot
                  </h3>
                  <div className="flex gap-3">
                    {["Indices", "Crypto"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveMarketTab(t)}
                        className={`text-[10px] font-semibold uppercase tracking-wide transition-colors ${
                          activeMarketTab === t ? "text-red-600" : "text-gray-400 hover:text-gray-700"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {(marketSnapshotData[activeMarketTab] || []).slice(0, 3).map((m) => (
                    <div key={m.symbol} className="py-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-gray-800">{m.symbol}</span>
                      <div className="flex items-center gap-2.5">
                        <span className="text-[11px] text-gray-500 tabular-nums">{m.value}</span>
                        <ChangeChip change={m.change} up={m.up} />
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/markets"
                  className="mt-2.5 text-[10px] font-bold text-red-600 flex items-center gap-1 hover:gap-2 transition-all uppercase tracking-wide w-fit"
                >
                  View All Markets
                  <ArrowRight size={10} strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </div>

          {/* 2b. SECONDARY NEWS — four-card editorial grid */}
          <div className="mb-14">
            <div className="flex items-center justify-between gap-4 border-b-2 border-black pb-2.5 mb-6">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-gray-900 shrink-0">
                More Stories
              </h2>
              <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
                {latestNewsTabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveNewsTab(t)}
                    className={`text-[11px] font-semibold whitespace-nowrap uppercase tracking-wide transition-colors ${
                      activeNewsTab === t ? "text-red-600" : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {secondaryCards.map((card) => (
                <Link key={card.id} to={card.link} className="group block">
                  <div className="overflow-hidden rounded-[2px]">
                    <ImageWithFallback
                      src={card.image}
                      alt={card.title}
                      className="w-full h-40 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.14em]">
                      {card.category}
                    </span>
                    <h3 className="text-sm font-semibold leading-[1.4] mt-1 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                      {card.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 mt-2">
                      <Clock size={9} strokeWidth={2.25} />
                      {card.time}
                    </span>
                  </div>
                </Link>
              ))}

              {/* Editor's Pick as a fifth editorial card */}
              {editorsPicks.map((p) => (
                <Link key={p.id} to="/leadership" className="group block">
                  <div className="overflow-hidden rounded-[2px]">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-40 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.14em]">
                      Editor's Pick
                    </span>
                    <h3 className="text-sm font-semibold leading-[1.4] mt-1 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3">
                      {p.title}
                    </h3>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 mt-2">
                      <Clock size={9} strokeWidth={2.25} />
                      {p.time}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 2c. TRUST / STATISTICS BANNER */}
          <div className="bg-black rounded-[2px] py-8 px-6 mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Global Readers", value: "2M+" },
                { label: "Countries Covered", value: "120+" },
                { label: "Trusted by Leaders", value: "Worldwide" },
                { label: "In-Depth", value: "Impartial" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-white text-2xl sm:text-3xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-[11px] uppercase tracking-[0.14em] mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2d. MAGAZINE + LEADERSHIP PROMOTIONAL CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">

            {/* MAGAZINE */}
            <div className="bg-black rounded-[2px] flex flex-col sm:flex-row overflow-hidden">
              <div className="sm:w-2/5 h-[160px] sm:h-auto overflow-hidden">
                <ImageWithFallback src={magazinePreview.image} alt={magazinePreview.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-gray-500">
                  Pride Times Magazine
                </p>
                <h3 className="font-serif text-xl font-bold text-white leading-tight">{magazinePreview.title}</h3>
                <p className="text-[13px] text-gray-400 mt-2 mb-4 leading-[1.5]">{magazinePreview.subtitle}</p>
                <Link
                  to="/magazine"
                  className="inline-flex items-center gap-1.5 w-fit text-xs font-bold uppercase tracking-wide text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors"
                >
                  Read Digital Edition
                  <ArrowRight size={11} strokeWidth={2.25} />
                </Link>
              </div>
            </div>

            {/* LEADERSHIP EDITORIAL BANNER */}
            {pt30.map((s) => (
              <Link key={s.id} to={s.link} className="group flex border border-gray-200 rounded-[2px] overflow-hidden">
                <div className="w-[40%] shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center min-w-0">
                  <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.14em]">
                    {s.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold leading-[1.2] mt-1.5 text-gray-950 group-hover:text-red-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-[1.5] mt-1.5 line-clamp-2">{s.excerpt}</p>
                  <span className="mt-3 text-[11px] font-bold text-gray-900 uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={11} strokeWidth={2.25} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 2e. PRIDE TIMES 30 — LEADERS TO WATCH */}
          <section>
            <div className="flex items-center justify-between border-b-2 border-black pb-2.5 mb-5">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-gray-900">
                Pride Times 30 — Leaders to Watch in 2026
              </h2>
              <Link
                to="/billionaires"
                className="text-[11px] font-semibold text-gray-400 hover:text-red-600 transition-colors flex items-center gap-1"
              >
                Full List
                <ArrowRight size={11} strokeWidth={2.25} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-gray-200">
              {prideTimes30.map((l, i) => (
                <div
                  key={l.rank}
                  className={`flex items-start gap-4 py-4 ${
                    i % 2 === 0 ? "sm:pr-8 sm:border-r sm:border-gray-200" : "sm:pl-8"
                  } ${i < prideTimes30.length - 2 ? "sm:border-b sm:border-gray-200" : ""}`}
                >
                  <span className="font-serif text-2xl font-bold text-gray-200 tabular-nums shrink-0 w-9">
                    {String(l.rank).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-900">
                      {l.name}
                      <span className="font-normal text-gray-400"> · {l.company}</span>
                    </p>
                    <p className="text-xs text-gray-500 leading-[1.5] mt-1">{l.sector}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Formal, restrained reading experience */
        html { scroll-behavior: smooth; }

        /* Neutral text selection */
        ::selection { background: rgba(0, 0, 0, 0.12); color: inherit; }
      `}</style>
    </div>
  );
}
