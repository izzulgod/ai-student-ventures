import { useEffect, useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Search } from "lucide-react";

const categories = ["Semua", ...Array.from(new Set(articles.map((a) => a.category)))];

const Articles = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Semua");

  useEffect(() => {
    document.title = "Artikel — NeuraVenture";
  }, []);

  const filtered = useMemo(
    () =>
      articles.filter(
        (a) =>
          (cat === "Semua" || a.category === cat) &&
          (a.title.toLowerCase().includes(q.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(q.toLowerCase()))
      ),
    [q, cat]
  );

  return (
    <div className="container py-16 md:py-24">
      <header className="max-w-3xl mb-12 animate-fade-up">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Semua Artikel</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Wawasan untuk <span className="text-gradient">generasi builder</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Telusuri seluruh tulisan tentang AI, startup, creator economy, dan transformasi digital
          yang relevan untuk mahasiswa Indonesia.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10">
        <div className="relative max-w-sm w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari artikel..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                cat === c
                  ? "bg-gradient-primary text-primary-foreground border-transparent"
                  : "glass border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground py-20">Tidak ada artikel yang cocok.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
