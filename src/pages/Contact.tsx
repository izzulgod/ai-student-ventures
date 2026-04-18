import { useEffect, useState } from "react";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);
  useEffect(() => { document.title = "Kontak — NeuraVenture"; }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Pesan terkirim! Terima kasih sudah menghubungi.");
    }, 800);
  };

  return (
    <div className="container py-16 md:py-24 max-w-5xl">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">Hubungi Kami</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-up">
          Punya ide atau <span className="text-gradient">kolaborasi?</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Kami terbuka untuk diskusi, saran topik artikel, hingga peluang kolaborasi antar
          mahasiswa di seluruh Indonesia.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, title: "Email", value: "hello@neuraventure.id" },
            { icon: MessageSquare, title: "Sosial Media", value: "@neuraventure" },
            { icon: MapPin, title: "Kampus", value: "Universitas Amikom Yogyakarta" },
          ].map(({ icon: Icon, title, value }) => (
            <div key={title} className="glass rounded-2xl p-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center shrink-0">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{title}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="md:col-span-3 glass rounded-2xl p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Nama</label>
              <input required className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
              <input required type="email" className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Subjek</label>
            <input required className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2 block">Pesan</label>
            <textarea required rows={5} className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
          </div>
          <button
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-violet transition-all disabled:opacity-60"
          >
            {sending ? "Mengirim..." : <>Kirim Pesan <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
