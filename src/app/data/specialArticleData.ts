export type SpecialArticle = {
  id: string;
  section: string;
  category: string;
  title: string;
  dek: string;
  image?: string;
  author: string;
  publishedAt: string;
  readTime: string;
  highlights: string[];
  sections: { heading: string; body: string }[];
  keyFacts: { label: string; value: string }[];
};

const editorialDate = "September 25, 2026";

function makeArticle({
  id,
  section,
  category,
  title,
  dek,
  image,
  highlights,
  sections,
  keyFacts,
  publishedAt = editorialDate,
  readTime = "7 MIN READ",
}: Omit<SpecialArticle, "author" | "publishedAt" | "readTime"> & Partial<Pick<SpecialArticle, "publishedAt" | "readTime">>): SpecialArticle {
  return {
    id,
    section,
    category,
    title,
    dek,
    image,
    author: "Sagar Kumar",
    publishedAt,
    readTime,
    highlights,
    sections,
    keyFacts,
  };
}

const ceoFeatured = makeArticle({
  id: "ceo-jensen-huang",
  section: "CEO Spotlight",
  category: "Executive Profile",
  title: "Jensen Huang and the AI Infrastructure Era",
  dek: "A detailed profile of NVIDIA's leadership story, the rise of accelerated computing and the strategic choices shaping the next phase of AI infrastructure.",
  highlights: [
    "NVIDIA's strategy has moved from graphics hardware toward a broader accelerated-computing platform.",
    "AI infrastructure now spans chips, networking, software, systems and developer ecosystems.",
    "The next phase depends on data-center demand, energy availability and software adoption.",
    "Leadership decisions increasingly connect technical roadmaps with long-term enterprise demand.",
  ],
  sections: [
    { heading: "From graphics specialist to AI infrastructure platform", body: "NVIDIA's business story is closely tied to the evolution of parallel computing. Graphics processors became useful far beyond visual rendering as researchers discovered that the same architecture could accelerate machine-learning workloads. That transition created a foundation for today's AI infrastructure market and changed how organizations think about computing capacity." },
    { heading: "The platform matters as much as the processor", body: "Modern AI systems require more than a fast chip. Training and inference workloads depend on high-speed interconnects, memory, networking, optimized software and tools that let developers use the hardware efficiently. This broader platform approach is an important part of NVIDIA's strategy and explains why its ecosystem extends across hardware and software." },
    { heading: "What executives are watching next", body: "The next stage of the AI infrastructure cycle will be shaped by enterprise adoption, model efficiency, power consumption and the economics of data centers. Customers are balancing the benefits of larger models with the cost of compute, making performance per watt and total system efficiency increasingly important business metrics." },
  ],
  keyFacts: [
    { label: "Focus", value: "AI infrastructure" },
    { label: "Company", value: "NVIDIA" },
    { label: "Leadership", value: "Jensen Huang" },
    { label: "Desk", value: "Executive Intelligence" },
  ],
});

const ceoLeaders = [
  [1, "Jensen Huang", "President & CEO", "NVIDIA Corporation", "Jensen Huang co-founded NVIDIA in 1993 and has led its transition from a gaming graphics specialist toward a broad accelerated-computing platform."],
  [2, "Sam Altman", "CEO", "OpenAI", "Sam Altman leads OpenAI as the company develops advanced AI systems and expands their use across consumer and enterprise products."],
  [3, "Mukesh Ambani", "Chairman & MD", "Reliance Industries", "Mukesh Ambani has overseen Reliance's expansion beyond energy into telecom, retail, digital services and new-energy investments."],
  [4, "Sundar Pichai", "CEO", "Alphabet / Google", "Sundar Pichai leads Alphabet through a period in which AI is being integrated across search, cloud, devices and productivity products."],
  [5, "Satya Nadella", "Chairman & CEO", "Microsoft", "Satya Nadella's leadership has centered Microsoft around cloud computing, developer platforms and an increasingly AI-focused product portfolio."],
  [6, "Elon Musk", "CEO", "Tesla / SpaceX / xAI", "Elon Musk's companies operate across electric vehicles, launch systems and artificial intelligence, linking engineering investment with ambitious long-term product roadmaps."],
  [7, "Tim Cook", "CEO", "Apple Inc.", "Tim Cook has led Apple through a period of continued services growth, hardware expansion and increasing attention to on-device artificial intelligence."],
  [8, "Larry Fink", "Chairman & CEO", "BlackRock", "Larry Fink leads BlackRock as the asset-management industry responds to changing capital markets, technology and investor expectations."],
].map(([rank, name, role, company, bio]) => makeArticle({
  id: `ceo-leader-${rank}`,
  section: "CEO Spotlight",
  category: "Leaders to Watch",
  title: `${name}: Leadership, Strategy and the Next Phase`,
  dek: bio as string,
  highlights: [
    `${name} leads ${company} as its industry undergoes significant technological and strategic change.`,
    `The leadership agenda combines near-term execution with longer-term investment in products, people and infrastructure.`,
    `Capital allocation and technology priorities remain important signals for the company's next phase.`,
    `Customers, employees and investors will watch how strategy translates into measurable operating results.`,
  ],
  sections: [
    { heading: "The leadership brief", body: bio as string },
    { heading: "Strategy under changing conditions", body: `For ${name}, leadership involves balancing current business performance with investments that may take years to mature. The central questions include where to allocate capital, which capabilities to build internally and how quickly to respond to changes in customer demand.` },
    { heading: "The signals to watch", body: `The most useful indicators are concrete developments: product launches, financial guidance, hiring priorities, major partnerships, infrastructure commitments and evidence that strategic initiatives are reaching customers. These signals provide a clearer picture of execution than headlines alone.` },
  ],
  keyFacts: [
    { label: "Leader", value: name as string },
    { label: "Role", value: role as string },
    { label: "Organization", value: company as string },
    { label: "Coverage", value: "Executive strategy" },
  ],
}));

const ceoInterviews = [
  [1, "Satya Nadella", "CEO, Microsoft", "AI Strategy", "The next decade will be defined by how organizations use AI to augment human capability.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"],
  [2, "Indra Nooyi", "Former CEO, PepsiCo", "Leadership", "The companies that will win in the next 20 years are those that embed purpose into their P&L.", "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1000&q=85"],
  [3, "Jensen Huang", "CEO, NVIDIA", "AI Infrastructure", "We are not a chip company. We are the engine of the AI industrial revolution.", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"],
].map(([id, name, role, topic, quote, image]) => makeArticle({
  id: `ceo-interview-${id}`,
  section: "CEO Spotlight",
  category: `Interview · ${topic}`,
  title: `${name}: Inside the ${topic} Playbook`,
  dek: quote as string,
  image: image as string,
  readTime: id === 1 ? "35 MIN READ" : id === 2 ? "28 MIN READ" : "42 MIN READ",
  highlights: [
    `The conversation focuses on ${topic.toLowerCase()} and how leadership decisions translate into execution.`,
    "Technology, people and organizational culture increasingly influence one another.",
    "Long-term strategy depends on turning broad ambitions into measurable operating priorities.",
    "The interview also highlights the trade-offs leaders face when markets and technology move quickly.",
  ],
  sections: [
    { heading: "The central leadership question", body: `In this ${topic.toLowerCase()} discussion, the emphasis is on how executives turn a major strategic idea into a repeatable operating model. The challenge is not simply identifying a trend, but deciding where the organization should invest and how quickly.` },
    { heading: "From vision to execution", body: "Successful transformation requires alignment across product teams, finance, operations and customer-facing groups. Clear priorities help organizations avoid spreading resources across too many initiatives while still leaving room for experimentation." },
    { heading: "What comes next", body: "The next phase will be measured through adoption, productivity, customer response and the durability of the underlying business model. Those signals matter because they show whether a leadership thesis is becoming an operating reality." },
  ],
  keyFacts: [
    { label: "Guest", value: name as string },
    { label: "Role", value: role as string },
    { label: "Topic", value: topic as string },
    { label: "Format", value: "Executive interview" },
  ],
}));

const innovationHero = makeArticle({
  id: "innovation-quantumbattery",
  section: "Innovation",
  category: "Innovation",
  title: "Solid-State Batteries and the Race Toward Commercial Scale",
  dek: "A deep look at the promises, engineering challenges and commercial questions surrounding next-generation solid-state batteries and their potential impact on electric vehicles and energy storage.",
  image: "https://images.unsplash.com/photo-1760012945940-74d6bf54c0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  highlights: [
    "Solid-state designs aim to replace conventional liquid electrolytes with solid materials.",
    "Potential benefits include higher energy density, improved packaging and faster charging under suitable conditions.",
    "Manufacturing scale, material durability, yield and cost remain central commercialization questions.",
    "The effect could extend beyond vehicles into stationary storage and other high-demand applications.",
  ],
  sections: [
    { heading: "Why solid-state batteries matter", body: "Battery development is increasingly focused on improving energy density, charging speed, safety and cost at the same time. Solid-state architectures attract attention because changing the electrolyte can open different options for cell design and potentially enable higher-energy configurations." },
    { heading: "The engineering challenge", body: "Moving from laboratory cells to mass production is a difficult step. Manufacturers must maintain consistent materials, interfaces and performance across very large numbers of cells. Durability over repeated charging cycles, temperature behavior and production yield all influence the final economics." },
    { heading: "What commercialization would change", body: "If solid-state technology reaches reliable mass production at competitive cost, automakers could gain additional flexibility in vehicle packaging and range. The broader battery market could also benefit if the manufacturing techniques prove adaptable to stationary storage and other applications." },
  ],
  keyFacts: [
    { label: "Technology", value: "Solid-state batteries" },
    { label: "Primary market", value: "Electric vehicles" },
    { label: "Key challenge", value: "Manufacturing scale" },
    { label: "Desk", value: "Innovation" },
  ],
});

const innovationStories = [
  ["innovation-climate-ai", "AI Model Predicts Climate Change Tipping Points 10 Years in Advance", "Research", "AI models are being explored as tools for identifying complex climate patterns and earlier warning signals.", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"],
  ["innovation-quantum-protein", "Quantum Computing and the Next Frontier of Protein Modeling", "Quantum Computing", "Researchers continue to investigate whether quantum methods can accelerate difficult scientific optimization and molecular problems.", "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?auto=format&fit=crop&w=900&q=80"],
  ["innovation-blackwell", "NVIDIA Blackwell Ultra and the Push Toward Faster AI Training", "AI & Computing", "New accelerator architectures are targeting higher training throughput, efficiency and scale for increasingly large AI workloads.", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"],
  ["innovation-mrna", "The Race to Build More Adaptable mRNA Cancer Vaccines", "Biotechnology", "Researchers are exploring personalized and broadly targeted mRNA approaches for difficult cancer treatment challenges.", "https://images.unsplash.com/photo-1766315746079-215ff5115e9f?auto=format&fit=crop&w=900&q=80"],
  ["innovation-starship", "Reusable Launch Systems and the Changing Economics of Space", "Space Technology", "Reusable launch architectures are changing how engineers think about turnaround time, payload economics and access to orbit.", "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"],
  ["innovation-drug-discovery", "AI Drug Discovery Moves Deeper Into the Development Pipeline", "Biotechnology", "AI-assisted research is being used to prioritize targets, model molecules and reduce some of the search burden in drug discovery.", "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"],
  ["innovation-superconductor", "The Search for Practical Room-Temperature Superconductors", "Advanced Materials", "Superconductivity research remains focused on finding materials and conditions that can deliver useful performance outside extreme environments.", "https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?auto=format&fit=crop&w=900&q=80"],
].map(([id, title, category, dek, image]) => makeArticle({
  id: id as string,
  section: "Innovation",
  category: category as string,
  title: title as string,
  dek: dek as string,
  image: image as string,
  highlights: [
    dek as string,
    "The technology is moving from research discussion toward questions of reproducibility, cost and real-world deployment.",
    "Commercial adoption will depend on performance, reliability, infrastructure and the economics of scaling.",
    "The next milestones will come from independent testing, pilot projects, manufacturing progress and customer use.",
  ],
  sections: [
    { heading: "The breakthrough in context", body: dek as string },
    { heading: "What has to happen before scale", body: "Innovations often face a gap between a compelling demonstration and a dependable product. Teams must validate performance outside controlled environments, establish repeatable manufacturing or deployment processes and understand the full cost of operating the technology." },
    { heading: "The market question", body: "The commercial test is whether the technology solves a meaningful problem better than existing alternatives. That means looking beyond a single headline metric and examining reliability, total cost, supply chains, regulation, customer workflows and the time required to adopt the new system." },
  ],
  keyFacts: [
    { label: "Category", value: category as string },
    { label: "Stage", value: "Research to commercialization" },
    { label: "Coverage", value: "Innovation desk" },
    { label: "Publication", value: "The Pride Times" },
  ],
}));


const ceoWomen = [
  ["01", "Mary Barra", "CEO, General Motors", "Leading GM's transition toward an electric and software-defined vehicle portfolio."],
  ["02", "Jane Fraser", "CEO, Citigroup", "Driving organizational transformation across Citigroup's global businesses."],
  ["03", "Gita Gopinath", "First Deputy Managing Director, IMF", "A leading voice on global economic policy, trade and financial stability."],
  ["04", "Sunita Williams", "NASA Astronaut / Engineer", "A prominent figure in human spaceflight, engineering and international space cooperation."],
  ["05", "Nirmala Sitharaman", "Finance Minister, India", "A central figure in India's fiscal policy and infrastructure investment strategy."],
].map(([rank, name, role, achievement]) => makeArticle({
  id: `ceo-women-${rank}`,
  section: "CEO Spotlight",
  category: "Women in Leadership",
  title: `${name}: Leadership and Impact`,
  dek: achievement as string,
  highlights: [
    achievement as string,
    "Leadership at scale requires clear priorities, accountable teams and the ability to navigate changing external conditions.",
    "The role combines domain expertise with communication, organizational decision-making and long-term planning.",
    "The next milestones will be visible through measurable outcomes and sustained execution.",
  ],
  sections: [
    { heading: "The leadership profile", body: achievement as string },
    { heading: "Decisions that shape organizations", body: "Senior leaders influence capital allocation, talent, operating culture and strategic direction. Their choices are often tested over time as organizations respond to technology shifts, market cycles and changing stakeholder expectations." },
    { heading: "Measuring leadership impact", body: "A useful assessment starts with observable results: organizational performance, successful initiatives, customer outcomes, innovation and the ability to build teams that can execute beyond a single leadership cycle." },
  ],
  keyFacts: [
    { label: "Leader", value: name as string },
    { label: "Role", value: role as string },
    { label: "Desk", value: "Women in Leadership" },
    { label: "Format", value: "Executive profile" },
  ],
}));

const ceoOpinions = [
  [1, "On AI and Investing: Why Human Judgment Still Matters Alongside Algorithms", "AI, investing and decision-making are increasingly connected as executives evaluate where automated systems should support human judgment."],
  [2, "The Debt Cycle and What Corporate Leaders Need to Prepare For", "Changing financing conditions can influence investment, hiring and expansion decisions, making balance-sheet resilience an important leadership consideration."],
  [3, "Why the AGI Debate Is Becoming a Business Strategy Question", "Advanced AI is moving from a research topic into product, workforce and infrastructure planning across industries."],
  [4, "India's Next Growth Phase: What Business Leaders Are Watching", "India's expanding digital infrastructure, manufacturing ambitions and consumer market are creating new strategic questions for business leaders."],
].map(([id, title, dek]) => makeArticle({
  id: `ceo-opinion-${id}`,
  section: "CEO Spotlight",
  category: "Leadership Opinion",
  title: title as string,
  dek: dek as string,
  highlights: [
    dek as string,
    "Leaders are balancing short-term performance with investments whose benefits may appear over several years.",
    "Technology, capital costs and talent availability can materially change the set of strategic options.",
    "The most useful signals are measurable decisions and outcomes rather than broad predictions alone.",
  ],
  sections: [
    { heading: "The question facing the boardroom", body: dek as string },
    { heading: "From opinion to operating decision", body: "A leadership thesis becomes meaningful when it changes how an organization allocates resources, designs products or serves customers. That makes implementation, governance and measurement just as important as the original idea." },
    { heading: "The evidence to follow", body: "Readers can track strategy through company guidance, investment plans, product releases, customer adoption and changes in operating performance. Those indicators help distinguish a long-term shift from a temporary narrative." },
  ],
  keyFacts: [
    { label: "Desk", value: "The Boardroom" },
    { label: "Format", value: "Leadership opinion" },
    { label: "Topic", value: "Strategy & management" },
    { label: "Publication", value: "The Pride Times" },
  ],
}));

const ceoMoves = [
  [1, "Bob Iger", "DISNEY", "Returns as Disney CEO for a third term after renewed shareholder pressure."],
  [2, "Christine Lagarde", "ECB", "ECB leadership transition draws attention as potential successors emerge."],
  [3, "Shantanu Narayen", "ADOBE", "Adobe CEO receives a major compensation package following a record year."],
  [4, "Arvind Krishna", "IBM", "IBM CEO outlines a strategic review of the company's consulting operations."],
].map(([id, person, role, move]) => makeArticle({
  id: `ceo-move-${id}`,
  section: "CEO Spotlight",
  category: `Executive Moves · ${role}`,
  title: `${person}: The Executive Move and What It Signals`,
  dek: move as string,
  highlights: [
    move as string,
    "Leadership changes can affect strategic priorities, capital allocation and organizational expectations.",
    "The immediate announcement is only one part of the story; implementation determines the longer-term effect.",
    "Investors, employees and customers will watch subsequent appointments, guidance and operating decisions.",
  ],
  sections: [
    { heading: "What changed", body: move as string },
    { heading: "Why leadership moves matter", body: "Executive transitions can alter the pace and direction of strategic programs. The effect depends on the mandate given to the leader, the strength of the existing management team and the organization's ability to execute through the transition." },
    { heading: "What to watch next", body: "The clearest follow-through signals include management appointments, strategic updates, capital commitments and changes in product or operating priorities. Those developments provide context for the original announcement." },
  ],
  keyFacts: [
    { label: "Executive", value: person as string },
    { label: "Organization", value: role as string },
    { label: "Desk", value: "Corporate World" },
    { label: "Format", value: "Executive move" },
  ],
}));

export const specialArticles: SpecialArticle[] = [
  ceoFeatured,
  ...ceoLeaders,
  ...ceoInterviews,
  ...ceoWomen,
  ...ceoOpinions,
  ...ceoMoves,
  innovationHero,
  ...innovationStories,
];

export function getSpecialArticleById(id?: string) {
  if (!id) return undefined;
  return specialArticles.find((article) => article.id === id);
}

export function specialArticlePath(id: string) {
  return `/article/${id}`;
}
