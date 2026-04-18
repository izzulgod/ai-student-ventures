import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="container py-12 grid gap-8 md:grid-cols-3">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold">
            Neura<span className="text-gradient">Venture</span>
          </span>
        </Link>
        <p className="text-sm text-muted-foreground max-w-xs">
          Blog independen tentang peluang bisnis di era AI dan teknologi—untuk mahasiswa yang ingin
          membangun, bukan sekadar menonton.
        </p>
      </div>

      <div>
        <h4 className="font-display font-semibold text-sm mb-3">Navigasi</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-foreground transition-colors">Beranda</Link></li>
          <li><Link to="/articles" className="hover:text-foreground transition-colors">Artikel</Link></li>
          <li><Link to="/about" className="hover:text-foreground transition-colors">Tentang</Link></li>
          <li><Link to="/contact" className="hover:text-foreground transition-colors">Kontak</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold text-sm mb-3">Terhubung</h4>
        <div className="flex gap-3 mb-4">
          <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-md glass grid place-items-center hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
          <a href="#" aria-label="GitHub" className="h-9 w-9 rounded-md glass grid place-items-center hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
          <a href="mailto:hello@example.com" aria-label="Email" className="h-9 w-9 rounded-md glass grid place-items-center hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-muted-foreground">
          Bagian dari proyek mahasiswa{" "}
          <a href="https://www.amikom.ac.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Universitas Amikom Yogyakarta
          </a>
          .
        </p>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} NeuraVenture. Dibuat untuk mahasiswa.</span>
        <span>Disusun oleh <span className="text-foreground font-medium">Muhammad Izzul Fahmi Mustofa</span> · NIM <span className="text-foreground font-medium">25.12.3693</span></span>
      </div>
    </div>
  </footer>
);

export default Footer;
