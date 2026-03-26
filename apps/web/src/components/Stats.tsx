export default function Stats() {
  const stats = [
    { label: "Total Aset Terdaftar", value: "Rp 2.4M", suffix: "", desc: "Nilai aset yang sedang berjalan" },
    { label: "UMKM Onboard", value: "247", suffix: "+", desc: "Dari seluruh Indonesia" },
    { label: "Investor Aktif", value: "1.8K", suffix: "+", desc: "Retail dan institusional" },
    { label: "Average Yield", value: "13.8", suffix: "%", desc: "Per tahun" },
  ];

  return (
    <section style={{ padding: "80px 0", background: "rgba(108, 99, 255, 0.03)" }}>
      <div className="container">
        <div className="grid-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className="stat-card" style={{
              animationDelay: `${i * 0.1}s`,
            }}>
              <p style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, fontFamily: "Plus Jakarta Sans" }}>
                <span className="gradient-text-purple">{stat.value}</span>
                <span style={{ color: "#6C63FF" }}>{stat.suffix}</span>
              </p>
              <p style={{ fontSize: 15, fontWeight: 600, margin: "8px 0 4px" }}>{stat.label}</p>
              <p style={{ fontSize: 13, color: "#8888AA" }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
