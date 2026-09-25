import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, Bookmark, Clock, Share2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getBusinessArticleById, getRelatedBusinessArticles } from "../../data/businessNewsData";
import { getHomepageArticleBySlug } from "../../data/homepageArticleData";

export function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const homepageArticle = getHomepageArticleBySlug(id);

  if (homepageArticle) {
    return (
      <article className="bg-[#fbfaf7] text-[#171717]">
        <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-red-600">
            <ArrowLeft size={13} /> Back to the front page
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-red-600">{homepageArticle.category}</p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-[1.04] tracking-[-0.025em] sm:text-5xl md:text-6xl">
                {homepageArticle.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-[1.55] text-gray-600 md:text-xl">{homepageArticle.dek}</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-gray-300 py-4 text-[11px] text-gray-500">
                <span className="font-semibold text-gray-800">By {homepageArticle.author}</span>
                <span className="h-1 w-1 rounded-full bg-red-600" />
                <span>{homepageArticle.publishedAt}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {homepageArticle.readTime}</span>
                <span className="ml-auto flex items-center gap-3 text-gray-700"><Bookmark size={14} /> <Share2 size={14} /></span>
              </div>

              <div className="mt-7 overflow-hidden rounded-sm border border-gray-200 bg-gray-100">
                <ImageWithFallback src={homepageArticle.image} alt={homepageArticle.title} className="h-[300px] w-full object-cover sm:h-[420px] md:h-[500px]" />
              </div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-gray-400">Pride Times / Editorial illustration</p>

              <div className="mt-9 max-w-3xl font-serif text-[17px] leading-[1.85] text-gray-800 md:text-[18px]">
                <p className="text-xl leading-[1.65] text-gray-950 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-red-600">
                  {homepageArticle.dek} The story is unfolding at the intersection of business ambition, public policy and a rapidly changing global economy.
                </p>
                {homepageArticle.sections.map((section) => (
                  <section key={section.heading} className="mt-9">
                    <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-600">{section.heading}</h2>
                    <p className="mt-3">{section.body}</p>
                  </section>
                ))}
              </div>
            </div>

            <aside className="lg:pt-24">
              <div className="sticky top-6 border-t-2 border-black bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">Inside the story</p>
                <h2 className="mt-2 font-serif text-2xl font-bold">Key takeaways</h2>
                <ul className="mt-5 divide-y divide-gray-200">
                  {homepageArticle.highlights.map((point) => (
                    <li key={point} className="flex gap-3 py-4 text-sm leading-[1.55] text-gray-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />{point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-gray-200 pt-4 text-[10px] uppercase tracking-[0.14em] text-gray-400">The Pride Times Magazine Desk</div>
              </div>
            </aside>
          </div>

          <div className="mt-12 border-t-2 border-black pt-5">
            <Link to="/" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gray-700 hover:text-red-600">
              Continue reading the newsroom <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  const article = getBusinessArticleById(id);
  if (!article) {
    return <div className="mx-auto max-w-3xl px-4 py-16 text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Not Found</p><h1 className="mt-3 font-serif text-2xl font-bold">We couldn't find that story</h1><Link to="/" className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-red-600"><ArrowLeft size={12} /> Back to home</Link></div>;
  }

  const related = getRelatedBusinessArticles(article);
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-10">
      <Link to="/business-news" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-500 hover:text-red-600"><ArrowLeft size={12} /> Business News</Link>
      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">{article.category}</p>
      <h1 className="mt-2 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-gray-950 sm:text-4xl">{article.title}</h1>
      {article.excerpt && <p className="mt-4 text-base leading-[1.7] text-gray-600">{article.excerpt}</p>}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 border-y border-gray-200 py-4 text-xs text-gray-400"><span className="font-semibold text-gray-600">By {article.author}</span><span className="flex items-center gap-1.5"><Clock size={11} />{article.time}</span></div>
      {article.image && <div className="mt-6 overflow-hidden rounded-md"><ImageWithFallback src={article.image} alt={article.title} className="h-[240px] w-full object-cover sm:h-[380px]" /></div>}
      <div className="mt-8 font-serif text-[17px] leading-[1.8] text-gray-800"><p>{article.excerpt || "Our newsroom is following the people, decisions and market forces shaping this story."}</p><p className="mt-6">The implications will become clearer as companies respond, policymakers weigh their next steps and new information enters the public record.</p></div>
      {related.length > 0 && <div className="mt-12 border-t-2 border-black pt-6"><h2 className="text-[12px] font-bold uppercase tracking-[0.16em]">Related Coverage</h2><div className="mt-4 divide-y divide-gray-200">{related.map((item) => <Link key={item.id} to={`/article/${item.id}`} className="group flex items-center justify-between gap-4 py-4"><h3 className="text-sm font-semibold leading-[1.4] group-hover:text-red-600">{item.title}</h3><ArrowRight size={14} className="shrink-0 text-gray-300" /></Link>)}</div></div>}
    </div>
  );
}
EOF
