import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/articles", label: "Artikel" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="NeuraVenture beranda">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Neura<span className="text-gradient">Venture</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <nav className="container flex flex-col py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 text-sm font-medium rounded-md transition-colors",
                    isActive ? "text-foreground bg-secondary" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
