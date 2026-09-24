import { useParams, Link } from "react-router";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  getBusinessArticleById,
  getRelatedBusinessArticles,
} from "../../data/businessNewsData";

/* =========================================================
   ARTICLE DETAIL PAGE
   Generic reader for any article the site links to via
   /article/:id. Currently backed by the Business News
   dataset — same pattern extends to other sections later.
========================================================= */

export function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const article = getBusinessArticleById(id);

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
          Not Found
        </p>
        <h1 className="mt-3 font-serif text-2xl font-bold text-gray-900">
          We couldn't find that story
        </h1>
        <Link
          to="/business-news"
          className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-red-600"
        >
          <ArrowLeft size={12} />
          Back to Business News
        </Link>
      </div>
    );
  }

  const related = getRelatedBusinessArticles(article);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-10">
      {/* BACK LINK */}
      <Link
        to="/business-news"
        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-gray-500 hover:text-red-600 transition-colors"
      >
        <ArrowLeft size={12} />
        Business News
      </Link>

      {/* CATEGORY */}
      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
        {article.category}
      </p>

      {/* HEADLINE */}
      <h1 className="mt-2 font-serif text-2xl font-bold leading-[1.1] tracking-tight text-gray-950 sm:text-3xl md:text-4xl">
        {article.title}
      </h1>

      {/* DECK / SUBHEAD */}
      {article.excerpt && (
        <p className="mt-4 text-sm leading-[1.7] text-gray-600 md:text-base">
          {article.excerpt}
        </p>
      )}

      {/* BYLINE */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-gray-200 py-4 text-xs text-gray-400">
        {article.author && (
          <>
            <span className="font-semibold text-gray-600">
              By {article.author}
            </span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
          </>
        )}
        <span className="flex items-center gap-1.5">
          <Clock size={11} strokeWidth={2.25} />
          {article.time}
        </span>
      </div>

      {/* MAIN IMAGE */}
      {article.image && (
        <div className="mt-6 overflow-hidden rounded-md">
          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px]"
          />
        </div>
      )}

      {/* RELATED COVERAGE */}
      {related.length > 0 && (
        <div className="mt-12 border-t-2 border-black pt-6">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-gray-900">
            Related Coverage
          </h2>

          <div className="mt-4 divide-y divide-gray-200">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/article/${item.id}`}
                className="group flex items-center justify-between gap-4 py-4"
              >
                <div className="min-w-0">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold leading-[1.4] text-gray-900 transition-colors group-hover:text-red-600">
                    {item.title}
                  </h3>
                  <span className="mt-1.5 flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock size={9} />
                    {item.time}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-gray-300 transition-colors group-hover:text-red-600"
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
