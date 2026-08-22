import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Clock, BookOpen, Download, Star, Crown, ChevronRight, Play } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
//import jsPDF from "jspdf";
import AxisImg from "../../../imports/Axis03.png";
import ErikaImg from "../../../imports/Erika.png";
import ErikaImg1 from "../../../imports/Erika01.png";
import ErikaImg2 from "../../../imports/Erika02.png";
import EyeslImg1 from "../../../imports/Eyesl01.png";
import EyeslImg2 from "../../../imports/Eyesl02.png";
import NVBCImg1 from "../../../imports/NVBC01.png";
import NVBCImg2 from "../../../imports/NVBC02.png";
import EddieImg from "../../../imports/Eddie.png";
import TribeImg from "../../../imports/TribePay.png";
import TribePayImg from "../../../imports/TribePay04.png";
import SculptImg1 from "../../../imports/Sculpt01.png";
import SculptImg2 from "../../../imports/Sculpt02.png";
import SculptImg3 from "../../../imports/Sculpt03.png";
import TribeImg1 from "../../../imports/TribePay01.png";
import TribeImg2 from "../../../imports/TribePay02.png";
import NPRT1Img from "../../../imports/NPRT01.png";
import NPRT2Img from "../../../imports/NPRT02.png";
import NPRT3Img from "../../../imports/NPRT03.png";
import NPRTBann1Img from "../../../imports/NPRTBANNER01.png";
import NPRTBann2Img from "../../../imports/NPRTBANNER02.png";
import NPRTBann3Img from "../../../imports/NPRTBANNER03.png";
import NPRTBann4Img from "../../../imports/NPRTBANNER04.png";


const currentIssue = {
  month: "JUNE 2026",
  //volume: "Vol. 12 · Issue 5",
  coverHeadline: "MASTERFULLY RENOVATED RANCH RETREAT, MOVE-IN READY WITH EVERY MODERN DETAILS",
  coverSubhead: "PLUS: STEP INTO LUXURIOUS LIVING IN FOREST SERINITY.",
  image:NPRT1Img,
  images: [
    NPRT1Img,
    NPRT2Img,
    NPRT3Img
  ],
  features: [
    "A rare opportunity to rent a move-in-ready home that perfectly balances modern comfort, private nature-filled living, and four-season appeal.The Perfect Blend of Luxury Living, Functional Design, and Lasting Values with two private acres at your fingertips, the landscaping possibilities are truly endless. Create gardens, trails, or open meadows that enhance the natural beauty already surrounding you. The landlord will support your vision to keep the outdoor oasis thriving year-round.",
  ],
};
const banner1Images = [
  NPRTBann1Img,
  NPRTBann2Img,
  NPRTBann3Img,
  NPRTBann4Img
];
const banner2Images = [
  TribeImg1,
  TribeImg2
];

const Articles = [
  {
    id: 1,
    month: "March 4, 2026",
    headline: "India Rising: The New Superpower Transforming Global Business",
    image: AxisImg,
    premium: false,
    category: "Economy",
    author: "The Pride Times Team",
    readTime: "5 min read",
    content: `
      India is rapidly emerging as one of the world's most influential economies...

      The country's digital infrastructure has expanded dramatically...

      Experts believe India could become a $10 trillion economy...
    `
  },
  {
    id: 2,
    month: "February 28, 2026",
    headline: "Healthcare 2030: The Biotech Revolution Saving Millions of Lives",
    image: ErikaImg,
    images: [
      ErikaImg,
      ErikaImg1,
      ErikaImg2
    ],
    premium: false,
    category: "Healthcare",
    author: "Sarah Johnson",
    readTime: "6 min read",
    content: `
      Biotechnology is changing modern medicine...

      Gene editing technologies are becoming mainstream...
    `
  },
  { month: "March 3, 2026",
    headline: "The Electric Future: How EVs Are Rewriting the Rules of Mobility", 
    image: EyeslImg1, 
    images: [
      EyeslImg1,
      EyeslImg2
    ],
    premium: false 
  },
  { month: "March 1, 2026",
    headline: "2026 Outlook: The Trends That Will Define the Global Economy", 
    image: NVBCImg2,
    images:[
      NVBCImg2,
      NVBCImg1
    ], 
    premium: false 
  },
  { month: "March 4, 2026",
     headline: "Person of the Year: The Leaders Who Shaped 2025", 
     image: EddieImg, 
     images: [
      EddieImg,
      TribeImg,
      TribePayImg
     ],
     premium: false 
    },
  { month: "March 3, 2026",
     headline: "Smart Cities: Building the Urban World of 2050", 
     image: SculptImg1,
     images: [
      SculptImg1,
      SculptImg2
     ], 
     premium: false 
    },
];

const specialReports = [
  { title: "Global AI Readiness Index 2026", pages: 48, format: "PDF", category: "Technology" },
  { title: "World's 100 Best-Managed Companies", pages: 72, format: "PDF", category: "Rankings" },
  { title: "India Economic Outlook 2026–2030", pages: 56, format: "PDF", category: "Economy" },
  { title: "Clean Energy Investment Report Q1 2026", pages: 34, format: "PDF", category: "Energy" },
  { title: "Global Cybersecurity Threat Report 2026", pages: 62, format: "PDF", category: "Security" },
];

const premiumContent = [
  { title: "The Full Jensen Huang Interview: 2 Hours with the Most Important CEO in Tech", duration: "2 hr read", type: "Interview", category: "Technology" },
  { title: "Pride Times Annual Investor Conference: All 40 Speaker Sessions", duration: "16 hrs", type: "Video", category: "Finance" },
  { title: "Deep Dive: India's Unicorn Ecosystem — 200 Startups Analyzed", duration: "90 min read", type: "Research", category: "India" },
  { title: "Quarterly Market Analysis: Professional-Grade Data for Every Sector", duration: "45 min read", type: "Markets", category: "Finance" },
];

export function MagazinePage() {
  const { isSignedIn, user } = useAuth();
  const isPremium = user?.tier === "premium";
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerImages, setBannerImages] = useState<string[]>([]);
  const downloadArticlePDF = (article: any) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(article.headline || "", 10, 20);

  doc.setFontSize(12);
  doc.text(`Author: ${article.author || "The Pride Times Team"}`, 10, 35);

  doc.text(`Date: ${article.month || ""}`, 10, 45);

  const content = article.content || "";

  const lines = doc.splitTextToSize(content, 180);

  doc.text(lines, 10, 60);

  doc.save(`${article.headline}.pdf`);
};

  return (
    <div className="py-6">
      <div className="border-b-4 border-black mb-6 pb-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Digital & Print</span>
        <h1 className="mt-0.5">The Pride Times Magazine</h1>
      </div>

      {/* Current Issue Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative">
          <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs px-3 py-1 rounded">
            CURRENT 
          </div>
          <ImageWithFallback
            src={currentIssue.images[0]}
            alt={currentIssue.coverHeadline}
            className="w-full h-96 object-cover rounded shadow-2xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">{currentIssue.month}</span>
            <span className="text-gray-300">·</span>
            <span className="text-xs text-gray-500">{currentIssue.volume}</span>
          </div>
          <h1 className="leading-tight mb-3">{currentIssue.coverHeadline}</h1>
          <p className="text-gray-500 text-sm mb-4">{currentIssue.coverSubhead}</p>
          <div className="mb-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2"></p>
            <ul className="flex flex-col gap-1.5">
              {currentIssue.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1 h-1 bg-red-600 rounded-full flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            <button
  onClick={() => {
  setSelectedArticle({
    headline: currentIssue.coverHeadline,
    image: currentIssue.images,
    images: currentIssue.images,
    month: currentIssue.month,
    author: "The Pride Times Team",
    category: "Real Estate",
    content: currentIssue.features.join("\n\n")
  });

  setCurrentImage(0);
  setZoom(1);
}}
  className="bg-black text-white text-sm px-6 py-2.5 rounded hover:bg-gray-800 transition-colors flex items-center gap-2"
>
  <BookOpen size={14} />
  Read Now
</button>
            <button
  onClick={() =>
    downloadArticlePDF({
      headline: currentIssue.coverHeadline,
      month: currentIssue.month,
      author: "The Pride Times Team",
      content: currentIssue.features.join("\n\n")
    })
  }
  className="border border-gray-300 text-sm px-6 py-2.5 rounded hover:bg-gray-50 transition-colors flex items-center gap-2"
>
  <Download size={14} />
  Download PDF
</button>
          </div>
        </div>
      </div>
     <div
  onClick={() => {
    setBannerImages(banner1Images);
    setShowBanner(true);
    setCurrentImage(0);
    setZoom(1);
  }}
  className="mb-8 cursor-pointer"
>
  <img
    src={banner1Images[0]}
    alt="Banner"
   className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-lg"
  />
</div>
<div
  onClick={() => {
    setBannerImages(banner2Images);
    setShowBanner(true);
    setCurrentImage(0);
    setZoom(1);
  }}
  className="mb-8 cursor-pointer"
>
  <img
    src={banner2Images[0]}
    alt="Banner"
    className="w-full h-[160px] object-cover rounded-xl shadow-lg"
  />
</div>
      {/* Past Issues */}
      <div className="mb-10">
        <SH title="Articles" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Articles.map((issue) => (
         <div
  key={issue.id}
  className="group cursor-pointer"
  onClick={() => {
  setSelectedArticle(issue);
  setCurrentImage(0);
  setZoom(1);
}}
>
              <div className="relative overflow-hidden rounded shadow-md mb-2">
                <ImageWithFallback
                  src={issue.image}
                  alt={issue.month}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {issue.premium && !isPremium && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Crown size={20} className="text-yellow-400" />
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{issue.month}</p>
              <p className="text-xs leading-snug mt-0.5 group-hover:text-red-600 transition-colors">{issue.headline}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Reports */}
      <div className="mb-10">
        <SH title="Special Reports & Research" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {specialReports.map((r) => (
            <div key={r.title} className="flex items-center justify-between border border-gray-200 rounded p-4 hover:shadow-md transition-shadow group cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen size={14} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm group-hover:text-red-600 transition-colors">{r.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{r.pages} pages · {r.format} · {r.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {!isPremium && <Crown size={14} className="text-yellow-500" />}
                <Download size={14} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium content */}
      <div className="mb-10">
        <div className="flex items-center gap-2 border-b-2 border-black pb-2 mb-4">
          <Crown size={14} className="text-yellow-500" />
          <h2 className="uppercase tracking-wider">Premium Exclusive Content</h2>
          {!isPremium && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded ml-auto">Premium Only</span>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {premiumContent.map((c) => (
            <div key={c.title} className={`border rounded p-4 group cursor-pointer transition-shadow hover:shadow-md ${!isPremium ? "opacity-60" : ""}`}>
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${c.type === "Video" ? "bg-red-100" : "bg-blue-50"}`}>
                  {c.type === "Video" ? <Play size={14} className="text-red-600" /> : <BookOpen size={14} className="text-blue-600" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-red-600 uppercase tracking-wider">{c.category}</span>
                    <span className="text-xs text-gray-400">· {c.type}</span>
                  </div>
                  <p className="text-sm group-hover:text-red-600 transition-colors leading-snug">{c.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{c.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe CTA */}
      {!isPremium && (
        <div className="bg-black text-white rounded p-8 text-center">
          <Crown size={24} className="text-yellow-400 mx-auto mb-3" />
          <h2 className="text-white mb-2">Unlock the Complete Pride Times Experience</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Get unlimited access to every article, every issue, all special reports, exclusive interviews, and premium newsletters. Ad-free. Starting at $4.99/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={isSignedIn ? "/dashboard" : "/signin"} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded transition-colors text-sm">
              Start Free 30-Day Trial
            </Link>
            <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-3 rounded transition-colors text-sm">
              Compare Plans
            </button>
          </div>
        </div>
      )}
     {selectedArticle && (
  <div className="fixed inset-0 z-[9999] bg-black/70 overflow-y-auto">
    <div className="max-w-5xl mx-auto bg-white min-h-screen relative">

      <button
        onClick={() => setSelectedArticle(null)}
        className="absolute top-4 right-4 z-20 bg-white rounded-full w-10 h-10 shadow"
      >
        ✕
      </button>

      <div
  className="relative bg-black overflow-auto"
  onWheel={(e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      setZoom((z) => Math.min(z + 0.1, 5));
    } else {
      setZoom((z) => Math.max(z - 0.1, 1));
    }
  }}
>

 <img
  src={
    selectedArticle.images
      ? selectedArticle.images[currentImage]
      : selectedArticle.image
  }
  alt={selectedArticle.headline}
  className="w-full max-h-[700px] object-contain transition-transform duration-200"
  style={{
    transform: `scale(${zoom})`,
    transformOrigin: "center center"
  }}
/>

  {selectedArticle.images && selectedArticle.images.length > 1 && (
    <>
      <button
      onClick={() => {
  setCurrentImage((prev) =>
    prev === 0
      ? selectedArticle.images.length - 1
      : prev - 1
  );

  setZoom(1);
}}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg text-2xl"
      >
        ←
      </button>

      <button
       onClick={() => {
  setCurrentImage((prev) =>
    prev === selectedArticle.images.length - 1
      ? 0
      : prev + 1
  );

  setZoom(1);
}}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 shadow-lg text-2xl"
      >
        →
      </button>
    </>
  )}
</div>

      <div className="px-12 py-10">

        <p className="text-yellow-700 uppercase text-sm font-semibold">
          {selectedArticle.category}
        </p>

        <h1 className="text-xl font-bold mt-3 leading-tight">
          {selectedArticle.headline}
        </h1>

        <div className="flex gap-3 text-gray-500 mt-5 text-sm">
          <span>{selectedArticle.author}</span>
          <span>•</span>
          <span>4 min read</span>
          <span>•</span>
          <span>{selectedArticle.month}</span>
        </div>

        <div className="mt-2 whitespace-pre-line text-3sm leading-10 text-gray-700">
          {selectedArticle.content}
        </div>

      </div>
    </div>
  </div>
)}
{showBanner && (
  <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

    <button
      onClick={() => setShowBanner(false)}
      className="absolute top-5 right-5 bg-white rounded-full w-10 h-10 z-50"
    >
      ✕
    </button>

    <div className="relative w-full max-w-6xl px-4">
      

      <img
        src={bannerImages[currentImage]}
        alt="Banner"
        className="w-full max-h-[90vh] object-contain"
      />

      {bannerImages.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0
                  ? bannerImages.length - 1
                  : prev - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 text-2xl"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === bannerImages.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 text-2xl"
          >
            →
          </button>
        </>
      )}
    </div>
  </div>
)}
{showBanner && (
  <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

    <button
      onClick={() => setShowBanner(false)}
      className="absolute top-5 right-5 bg-white rounded-full w-10 h-10 z-50"
    >
      ✕
    </button>

    <div className="relative w-full max-w-6xl px-4">
      

      <img
        src={bannerImages[currentImage]}
        alt="Banner"
        className="w-full max-h-[90vh] object-contain"
      />

      {bannerImages.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === 0
                  ? bannerImages.length - 1
                  : prev - 1
              )
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 text-2xl"
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentImage((prev) =>
                prev === bannerImages.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 text-2xl"
          >
            →
          </button>
        </>
      )}
    </div>
  </div>
)}
    </div>
  );
}

function SH({ title }: { title: string }) {
  return <div className="border-b-2 border-black pb-2 mb-4"><h2 className="uppercase tracking-wider">{title}</h2></div>;
}
