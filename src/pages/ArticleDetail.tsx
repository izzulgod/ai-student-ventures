import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { articles, getArticle } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { useEffect } from "react";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticle(slug || "");

  useEffect(() => {
    if (article) document.title = `${article.title} — NeuraVenture`;
  }, [article]);

  if (!article) {
    return (
      <div className="container py-32 text-center">
        <h1 className="font-display text-3xl font-bold mb-3">Artikel tidak ditemukan</h1>
        <Link to="/articles" className="text-primary hover:underline">Kembali ke daftar artikel</Link>
      </div>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="pb-16">
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={article.cover} alt="" width={1280} height={832} className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>
        <div className="container py-16 md:py-24 max-w-3xl">
          <Link to="/articles" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Semua artikel
          </Link>
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full glass mb-5">
            {article.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-up">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{article.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readTime}</span>
            <span>·</span>
            <span>Oleh <span className="text-foreground font-medium">Muhammad Izzul Fahmi Mustofa</span></span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="container max-w-4xl">
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <img src={article.cover} alt={article.title} width={1280} height={832} className="w-full aspect-[16/10] object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="container max-w-2xl py-12">
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          {article.content.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{
              __html: p.replace(
                /(www\.amikom\.ac\.id)/g,
                '<a href="https://www.amikom.ac.id" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
              )
            }} />
          ))}
        </div>

        {/* Author card */}
        <div className="mt-12 glass rounded-2xl p-6 flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-primary grid place-items-center font-display font-bold text-primary-foreground text-xl">
            N
          </div>
          <div>
            <div className="font-display font-semibold">Muhammad Izzul Fahmi Mustofa</div>
            <div className="text-sm text-muted-foreground">
              NIM 25.12.3693 · Mahasiswa{" "}
              <a href="https://www.amikom.ac.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Universitas Amikom Yogyakarta
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="container py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Baca juga</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {related.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>
    </article>
  );
};

export default ArticleDetail;
