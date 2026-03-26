export default function Features() {
  const features = [
    { icon: "⛓️", title: "On-Chain Transparency", desc: "Setiap transaksi tercatat immutable di Polygon blockchain. Tidak bisa dimanipulasi siapapun.", color: "#6C63FF" },
    { icon: "🪙", title: "Fraksional Ownership", desc: "Investasi mulai Rp 100.000. Diversifikasi ke banyak aset UMKM sekaligus.", color: "#10B981" },
    { icon: "🆔", title: "KYC Terintegrasi", desc: "Verifikasi NIK real-time via Verihubs. Aman, legal, dan sesuai regulasi Indonesia.", color: "#F59E0B" },
    { icon: "💸", title: "Auto Yield Distribution", desc: "Return didistribusikan otomatis via smart contract. Tidak perlu klaim manual.", color: "#EC4899" },
    { icon: "📱", title: "Pasar Sekunder", desc: "Jual token kamu ke investor lain kapan saja. Likuiditas terjaga.", color: "#8B5CF6" },
    { icon: "🏛️", title: "Patuh Regulasi", desc: "Beroperasi dalam framework OJK Sandbox. Terdaftar dan diawasi.", color: "#14B8A6" },
  ];

  return (
    <section className="section" id="fitur" style={{
      background: "linear-gradient(180deg, transparent, rgba(108,99,255,0.03), transparent)"
    }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="badge badge-purple" style={{ marginBottom: 16 }}>Fitur Unggulan</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Dibangun untuk{" "}
            <span className="gradient-text">Kepercayaan</span>
          </h2>
          <p style={{ color: "#8888AA", fontSize: 17, maxWidth: 480, margin: "0 auto" }}>
            Teknologi terdepan bertemu dengan kebutuhan nyata UMKM Indonesia.
          </p>
        </div>

        <div className="grid-3">
          {features.map((f) => (
            <div key={f.title} className="glass-card" style={{ padding: "28px 24px" }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${f.color}20`,
                border: `1px solid ${f.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, marginBottom: 20,
              }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: "#8888AA", fontSize: 14, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
