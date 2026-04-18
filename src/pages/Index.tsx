import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Brain, Rocket, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "NeuraVenture — Peluang Bisnis AI & Teknologi untuk Mahasiswa";
    const desc = "Blog independen tentang peluang bisnis di era AI dan digital, ditulis untuk mahasiswa yang siap membangun masa depan.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" width={1920} height={1088} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="absolute inset-0 bg-grid -z-10 opacity-40" />

        <div className="container py-24 md:py-36 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium tracking-wide">Era baru bisnis dimulai dari kamar kos</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up">
            Peluang Bisnis<br />
            di Era <span className="text-gradient">Kecerdasan Buatan</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:120ms]">
            Wawasan praktis, ide bisnis konkret, dan pelajaran dari founder muda—dirangkum khusus untuk
            mahasiswa yang ingin membangun, bukan menunggu.
          </p>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-up [animation-delay:240ms]">
            <Link
              to="/articles"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-violet transition-all"
            >
              Jelajahi Artikel
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium hover:bg-secondary transition-colors"
            >
              Tentang Blog Ini
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Brain, label: "Topik AI & Bisnis", value: "10+" },
              { icon: Rocket, label: "Studi Kasus", value: "Mingguan" },
              { icon: TrendingUp, label: "Untuk Mahasiswa", value: "100%" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-xl p-4 md:p-5">
                <Icon className="h-5 w-5 text-primary mb-2 mx-auto" />
                <div className="font-display font-bold text-xl md:text-2xl">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">Artikel Pilihan</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Bacaan terbaru untuk <br className="hidden md:block" />
              <span className="text-gradient">founder masa depan</span>
            </h2>
          </div>
          <Link to="/articles" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Lihat semua <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ArticleCard article={articles[0]} featured />
          {articles.slice(1).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-hero opacity-60 -z-10" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Siap mengubah ide menjadi <span className="text-gradient">bisnis nyata?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Mulai dari satu artikel. Satu eksperimen. Satu produk kecil yang kamu rilis minggu ini.
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-violet transition-all"
          >
            Mulai Membaca <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
