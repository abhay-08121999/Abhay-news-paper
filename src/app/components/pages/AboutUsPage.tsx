import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Link } from "react-router";
import { Globe, ArrowRight, MapPin } from "lucide-react";

/* ============================================================
   ABOUT US PAGE
   Content preserved from the original About Us page.
   Layout redesigned to match the provided reference image.
   ============================================================ */

const milestones = [
  {
    year: "2014",
    text: "Founded in London as a weekly print briefing for institutional investors.",
  },
  {
    year: "2016",
    text: "Digital edition launches; first international bureau opens in Singapore.",
  },
  {
    year: "2019",
    text: "Crosses 500,000 monthly readers; expands into broadcast with Pride Times Live.",
  },
  {
    year: "2022",
    text: "Named Business Publication of the Year by the Global Press Institute.",
  },
  {
    year: "2024",
    text: "Reaches 2 million global readers across 120 countries.",
  },
  {
    year: "2026",
    text: "Launches the Pride Times 30 leadership index; newsroom grows to 40 bureaus.",
  },
];

const principles = [
  {
    title: "Independence",
    text: "Our journalism answers to readers, not to advertisers or shareholders.",
  },
  {
    title: "Accuracy first",
    text: "We correct our mistakes in public, and as fast as we made them.",
  },
  {
    title: "A global lens",
    text: "We report from where the story is, not from where it's convenient.",
  },
  {
    title: "Plain language",
    text: "Complex markets and policy, explained without jargon.",
  },
  {
    title: "On the record",
    text: "Every claim is sourced. Every source is checked.",
  },
];

const leadership = [
  {
    name: "Elena Marchetti",
    role: "Editor-in-Chief",
    bio: "Twenty years covering global markets, from the 2008 crisis to the AI capital boom.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "David Okonkwo",
    role: "Managing Editor, Markets",
    bio: "Formerly a derivatives desk analyst; now leads our markets and finance coverage.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "Priya Raghunathan",
    role: "Head of Global Bureaus",
    bio: "Oversees reporting across our 40 international bureaus and correspondent network.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
  {
    name: "Marcus Lindqvist",
    role: "Chief Technology Officer",
    bio: "Builds the data infrastructure behind our live markets and research tools.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
  },
];

const bureaus = [
  "London",
  "New York",
  "Singapore",
  "Mumbai",
  "Dubai",
  "Nairobi",
  "São Paulo",
  "Tokyo",
];

export function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">

        {/* =====================================================
            RED TOP LINE
        ====================================================== */}
        <div className="border-t-[3px] border-[#e31b23] mb-5" />

        {/* =====================================================
            PAGE TITLE
        ====================================================== */}
        <section className="mb-8">
          <h1
            className="
              font-serif
              text-[34px]
              sm:text-[40px]
              lg:text-[46px]
              font-bold
              leading-[1.08]
              tracking-[-0.02em]
              text-[#111111]
            "
          >
            About The Pride Times
          </h1>
        </section>

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <section
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1fr)_300px]
            gap-7
            lg:gap-8
            items-start
          "
        >

          {/* LEFT COLUMN */}
          <div>

            {/* Existing image - unchanged */}
            <div
              className="
                overflow-hidden
                rounded-[8px]
                bg-[#f5f5f5]
                border
                border-[#eeeeee]
              "
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80"
                alt="The Pride Times newsroom"
                className="
                  block
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  lg:h-[365px]
                  object-cover
                "
              />
            </div>

            {/* First paragraph */}
            <div className="mt-5">
              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  text-[#3A3934]
                  leading-[1.7]
                "
              >
                <strong className="font-bold text-[#111111]">
                  The Pride Times
                </strong>{" "}
                is the world's leading global business and innovation magazine,
                founded with a singular mission: to empower leaders,
                entrepreneurs, and changemakers with the intelligence they need
                to shape tomorrow.
              </p>
            </div>

            {/* Second paragraph */}
            <div className="mt-4">
              <p
                className="
                  text-[14px]
                  sm:text-[15px]
                  text-[#3A3934]
                  leading-[1.7]
                "
              >
                Published by <strong className="font-bold">Sagar Kumar</strong>,
                The Pride Times covers the full spectrum of global business —
                from Wall Street to emerging markets, from Silicon Valley
                breakthroughs to policy shifts reshaping industries. Our
                editorial team spans 35 countries, bringing unmatched depth to
                every story we tell.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <aside>

            {/* By The Numbers */}
            <div
              className="
                rounded-[8px]
                bg-[#f7f7f7]
                border
                border-[#eeeeee]
                p-5
                sm:p-6
              "
            >
              <h2
                className="
                  font-serif
                  text-[20px]
                  sm:text-[21px]
                  font-bold
                  text-[#111111]
                  border-b
                  border-[#dedede]
                  pb-3
                "
              >
                By the Numbers
              </h2>

              <div className="mt-1">

                <div className="flex items-center justify-between py-3 border-b border-[#e5e5e5]">
                  <span className="text-[13px] text-[#666666]">
                    Monthly Readers
                  </span>

                  <span className="text-[14px] font-bold text-[#e31b23]">
                    2M+
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#e5e5e5]">
                  <span className="text-[13px] text-[#666666]">
                    Countries Covered
                  </span>

                  <span className="text-[14px] font-bold text-[#e31b23]">
                    120+
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#e5e5e5]">
                  <span className="text-[13px] text-[#666666]">
                    Editorial Staff
                  </span>

                  <span className="text-[14px] font-bold text-[#e31b23]">
                    35+
                  </span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <span className="text-[13px] text-[#666666]">
                    Founded
                  </span>

                  <span className="text-[14px] font-bold text-[#e31b23]">
                    2026
                  </span>
                </div>

              </div>
            </div>

          </aside>
        </section>

        {/* =====================================================
            OUR MISSION
        ====================================================== */}
        <section className="mt-9 mb-9 max-w-[760px]">

          <h2
            className="
              font-serif
              text-[22px]
              sm:text-[24px]
              font-bold
              text-[#111111]
              mb-3
            "
          >
            Our Mission
          </h2>

          <p
            className="
              text-[14px]
              sm:text-[15px]
              text-[#3A3934]
              leading-[1.7]
            "
          >
            To deliver authoritative, impartial, and impactful journalism that
            informs the decisions of business leaders, policymakers, and
            professionals worldwide. We believe that informed leadership
            creates a better world.
          </p>

        </section>

        {/* =====================================================
            OUR VALUES
        ====================================================== */}
        <section className="mb-10 max-w-[800px]">

          <h2
            className="
              font-serif
              text-[22px]
              sm:text-[24px]
              font-bold
              text-[#111111]
              mb-4
            "
          >
            Our Values
          </h2>

          <div className="space-y-3">

            <div className="flex gap-3">
              <span className="text-[#e31b23] text-[12px] mt-[3px]">
                ▸
              </span>

              <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.6]">
                <strong className="text-[#333333]">
                  Editorial Independence
                </strong>{" "}
                — We report without fear or favor.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#e31b23] text-[12px] mt-[3px]">
                ▸
              </span>

              <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.6]">
                <strong className="text-[#333333]">
                  Accuracy First
                </strong>{" "}
                — Every fact is verified before it reaches you.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#e31b23] text-[12px] mt-[3px]">
                ▸
              </span>

              <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.6]">
                <strong className="text-[#333333]">
                  Global Perspective
                </strong>{" "}
                — 120+ countries covered every day.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#e31b23] text-[12px] mt-[3px]">
                ▸
              </span>

              <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.6]">
                <strong className="text-[#333333]">
                  Innovation
                </strong>{" "}
                — We lead the conversation on business transformation.
              </p>
            </div>

          </div>

        </section>

        {/* =====================================================
            LEADERSHIP
        ====================================================== */}
        <section className="mb-10 max-w-[760px]">

          <h2
            className="
              font-serif
              text-[22px]
              sm:text-[24px]
              font-bold
              text-[#111111]
              mb-4
            "
          >
            Leadership
          </h2>

          <div
            className="
              flex
              items-center
              gap-4
              border
              border-[#e1e1e1]
              rounded-[7px]
              p-4
              bg-white
            "
          >

            {/* Existing leadership image */}
            <div
              className="
                w-[58px]
                h-[58px]
                sm:w-[64px]
                sm:h-[64px]
                rounded-full
                overflow-hidden
                shrink-0
                bg-[#eeeeee]
              "
            >
              <ImageWithFallback
                src={leadership[0].image}
                alt={leadership[0].name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0">

              <h3 className="text-[15px] sm:text-[16px] font-bold text-[#111111]">
                Sagar Kumar
              </h3>

              <p className="text-[11px] sm:text-[12px] text-[#777777] mt-0.5">
                Founder & Publisher, The Pride Times
              </p>

              <p className="text-[11px] sm:text-[12px] text-[#777777] mt-1 leading-[1.5]">
                Visionary media entrepreneur dedicated to elevating global
                business journalism.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            ORIGINAL HISTORY
        ====================================================== */}
        <section className="mb-10">

          <div className="border-b-2 border-[#111111] pb-2 mb-5">
            <h2
              className="
                font-serif
                text-[22px]
                sm:text-[24px]
                font-bold
                text-[#111111]
              "
            >
              Our History
            </h2>
          </div>

          <div>
            {milestones.map((m) => (
              <div
                key={m.year}
                className="
                  grid
                  grid-cols-[65px_1fr]
                  sm:grid-cols-[80px_1fr]
                  gap-4
                  py-3
                  border-t
                  border-[#e2e2e2]
                  first:border-t-0
                  max-w-[850px]
                "
              >
                <span className="font-serif text-[17px] font-bold text-[#e31b23]">
                  {m.year}
                </span>

                <p className="text-[13px] sm:text-[14px] text-[#3A3934] leading-[1.6]">
                  {m.text}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* =====================================================
            WHAT WE STAND FOR
        ====================================================== */}
        <section className="mb-10">

          <div className="border-b-2 border-[#111111] pb-2 mb-5">
            <h2
              className="
                font-serif
                text-[22px]
                sm:text-[24px]
                font-bold
                text-[#111111]
              "
            >
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

            {principles.map((p) => (
              <div
                key={p.title}
                className="py-4 border-t border-[#e2e2e2]"
              >
                <h3 className="font-serif text-[17px] font-bold text-[#111111] mb-1">
                  {p.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#555555] leading-[1.6]">
                  {p.text}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            NEWSROOM LEADERSHIP
        ====================================================== */}
        <section className="mb-10">

          <div className="border-b-2 border-[#111111] pb-2 mb-5">
            <h2
              className="
                font-serif
                text-[22px]
                sm:text-[24px]
                font-bold
                text-[#111111]
              "
            >
              Newsroom Leadership
            </h2>
          </div>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
            "
          >

            {leadership.map((person) => (
              <article
                key={person.name}
                className="
                  overflow-hidden
                  rounded-[7px]
                  border
                  border-[#e1e1e1]
                  bg-white
                  transition-shadow
                  duration-300
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                "
              >

                <div className="aspect-[4/5] overflow-hidden bg-[#f4f4f4]">
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      grayscale-[20%]
                      transition-transform
                      duration-500
                      hover:scale-[1.03]
                    "
                  />
                </div>

                <div className="p-4">

                  <h3 className="text-[14px] font-bold text-[#111111]">
                    {person.name}
                  </h3>

                  <p className="text-[10px] text-[#e31b23] uppercase tracking-[0.06em] mt-1">
                    {person.role}
                  </p>

                  <p className="text-[12px] text-[#666666] mt-2 leading-[1.55]">
                    {person.bio}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* =====================================================
            GLOBAL BUREAUS
        ====================================================== */}
        <section className="mb-10">

          <div
            className="
              flex
              items-center
              gap-2
              border-b-2
              border-[#111111]
              pb-2
              mb-5
            "
          >

            <MapPin
              size={16}
              className="text-[#e31b23]"
            />

            <h2
              className="
                font-serif
                text-[22px]
                sm:text-[24px]
                font-bold
                text-[#111111]
              "
            >
              Global Bureaus
            </h2>

          </div>

          <div className="flex flex-wrap items-center gap-y-3">

            {bureaus.map((city, i) => (
              <div
                key={city}
                className="flex items-center"
              >

                <span className="text-[13px] sm:text-[14px] text-[#3A3934]">
                  {city}
                </span>

                {i < bureaus.length - 1 && (
                  <span className="mx-4 text-[#d0d0d0]">
                    /
                  </span>
                )}

              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section
          className="
            border
            border-[#dddddd]
            rounded-[7px]
            bg-[#fafafa]
            p-6
            sm:p-7
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-5
          "
        >

          <div>

            <h2
              className="
                font-serif
                text-[22px]
                sm:text-[24px]
                font-bold
                text-[#111111]
              "
            >
              Join the newsroom
            </h2>

            <p className="text-[13px] sm:text-[14px] text-[#555555] mt-1.5 leading-[1.6] max-w-[550px]">
              We're always looking for reporters, analysts, and engineers who
              want to cover the story before it's obvious.
            </p>

          </div>

          <Link
            to="/careers"
            className="
              inline-flex
              items-center
              gap-2
              whitespace-nowrap
              bg-[#e31b23]
              hover:bg-[#c9141b]
              text-white
              px-5
              py-3
              rounded-[4px]
              text-[11px]
              sm:text-[12px]
              font-semibold
              uppercase
              tracking-[0.04em]
              transition-colors
            "
          >
            View open roles
            <ArrowRight size={14} />
          </Link>

        </section>

      </div>
    </main>
  );
}
