import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/articles";

const ArticleCard = ({ article, featured = false }: { article: Article; featured?: boolean }) => (
  <Link
    to={`/articles/${article.slug}`}
    className={`group relative overflow-hidden rounded-2xl glass shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1 ${
      featured ? "md:col-span-2 md:flex" : ""
    }`}
  >
    <div className={`relative overflow-hidden ${featured ? "md:w-3/5 aspect-[16/10]" : "aspect-[16/10]"}`}>
      <img
        src={article.cover}
        alt={article.title}
        loading="lazy"
        width={1280}
        height={832}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
      <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full bg-background/70 backdrop-blur border border-border">
        {article.category}
      </span>
    </div>
    <div className={`p-6 ${featured ? "md:w-2/5 md:flex md:flex-col md:justify-center md:p-8" : ""}`}>
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
        <span>{article.date}</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
      </div>
      <h3 className={`font-display font-bold leading-tight mb-3 group-hover:text-gradient transition-all ${featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.excerpt}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Baca artikel <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </Link>
);

export default ArticleCard;
