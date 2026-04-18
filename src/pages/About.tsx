import { Target, BookOpen, Users, Lightbulb } from "lucide-react";
import { useEffect } from "react";

const values = [
  { icon: Target, title: "Praktis", desc: "Bukan teori muluk. Setiap artikel berisi langkah konkret yang bisa langsung dieksekusi minggu ini." },
  { icon: BookOpen, title: "Kontekstual", desc: "Ditulis dengan latar mahasiswa Indonesia—bukan terjemahan kering dari blog luar negeri." },
  { icon: Users, title: "Komunitas", desc: "Dibangun untuk mahasiswa yang ingin tumbuh bersama, bukan bersaing sendirian." },
  { icon: Lightbulb, title: "Berbasis Data", desc: "Setiap klaim didukung observasi nyata dari ekosistem startup dan kreator Indonesia." },
];

const About = () => {
  useEffect(() => { document.title = "Tentang — NeuraVenture"; }, []);

  return (
    <div className="container py-16 md:py-24 max-w-4xl">
      <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Tentang NeuraVenture</p>
      <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-up">
        Blog yang lahir dari <span className="text-gradient">ruang kelas</span>,
        bertumbuh untuk satu generasi.
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12 animate-fade-up [animation-delay:100ms]">
        NeuraVenture adalah ruang baca yang berfokus pada peluang bisnis di era kecerdasan buatan
        dan transformasi digital. Kami percaya mahasiswa hari ini sedang berada di titik paling
        menarik dalam sejarah teknologi—di mana satu orang dengan laptop bisa membangun produk
        yang dulu butuh tim 50 orang.
      </p>

      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass rounded-2xl p-6 hover:shadow-glow transition-all">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg mb-1.5">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-8 md:p-10">
        <h2 className="font-display text-2xl font-bold mb-4">Tentang Penulis</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          NeuraVenture dirintis sebagai proyek mahasiswa di mata kuliah Lingkungan Bisnis,{" "}
          <a href="https://www.amikom.ac.id" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Universitas Amikom Yogyakarta
          </a>
          . Tujuannya sederhana: mengubah tugas akhir menjadi platform yang benar-benar bermanfaat
          untuk mahasiswa lain yang sedang mencari arah di era AI.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Penulis</div>
            <div className="font-display font-semibold text-lg">[Nama Mahasiswa]</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">NIM</div>
            <div className="font-display font-semibold text-lg">[XX.XX.XXXX]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
