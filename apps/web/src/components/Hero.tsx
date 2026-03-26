import Link from "next/link";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden", paddingTop: 68,
    }}>
      {/* Background Orbs */}
      <div className="orb animate-pulse-glow" style={{
        width: 600, height: 600, background: "#6C63FF",
        top: -200, left: -100,
      }} />
      <div className="orb animate-pulse-glow" style={{
        width: 400, height: 400, background: "#10B981",
        bottom: -100, right: -50, animationDelay: "1.5s",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>

          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div className="badge badge-purple animate-fade-in-up">
              <span>🇮🇩</span>
              <span>Platform RWA #1 untuk UMKM Indonesia</span>
            </div>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800, marginBottom: 24,
            lineHeight: 1.1,
            animation: "fade-in-up 0.6s ease-out 0.1s both",
          }}>
            Ubah Aset UMKM{" "}
            <span className="gradient-text">Jadi Investasi</span>{" "}
            Digital
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)", color: "#8888AA",
            marginBottom: 40, lineHeight: 1.7,
            animation: "fade-in-up 0.6s ease-out 0.2s both",
          }}>
            AssetChain memungkinkan UMKM Indonesia mengakses modal melalui tokenisasi aset nyata.
            Investor mendapatkan return transparan. Semua tercatat di blockchain.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
            animation: "fade-in-up 0.6s ease-out 0.3s both",
          }}>
            <Link href="/marketplace" className="btn-primary" style={{ padding: "14px 32px", fontSize: 16 }}>
              Jelajahi Marketplace →
            </Link>
            <Link href="/umkm/daftar" className="btn-secondary" style={{ padding: "14px 32px", fontSize: 16 }}>
              Daftarkan UMKM
            </Link>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: "flex", gap: 32, justifyContent: "center", marginTop: 56,
            flexWrap: "wrap",
            animation: "fade-in-up 0.6s ease-out 0.4s both",
          }}>
            {[
              { label: "Terverifikasi KYC", icon: "✅" },
              { label: "Smart Contract Audit", icon: "🔒" },
              { label: "OJK Sandbox", icon: "🏛️" },
            ].map((trust) => (
              <div key={trust.label} style={{
                display: "flex", alignItems: "center", gap: 8,
                color: "#8888AA", fontSize: 14,
              }}>
                <span>{trust.icon}</span>
                <span>{trust.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Cards (floating asset preview) */}
        <div style={{
          display: "flex", gap: 20, justifyContent: "center", marginTop: 80,
          flexWrap: "wrap",
          animation: "fade-in-up 0.6s ease-out 0.5s both",
        }}>
          {[
            { name: "Invoice Kuliner Nusantara", yield: "14.5%", tenor: "90 hari", funded: 78, type: "INVOICE" },
            { name: "Inventori Batik Pekalongan", yield: "12.0%", tenor: "180 hari", funded: 45, type: "INVENTORY" },
            { name: "Piutang Konveksi Bandung", yield: "16.2%", tenor: "60 hari", funded: 91, type: "RECEIVABLE" },
          ].map((asset) => (
            <div key={asset.name} className="glass-card animate-float" style={{
              padding: "20px 24px", width: 220,
              animationDelay: `${Math.random() * 2}s`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span className="badge badge-purple" style={{ fontSize: 11, padding: "3px 10px" }}>{asset.type}</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, lineHeight: 1.4 }}>{asset.name}</p>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <div>
                  <p style={{ fontSize: 11, color: "#8888AA" }}>Yield</p>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#10B981" }}>{asset.yield}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: 11, color: "#8888AA" }}>Tenor</p>
                  <p style={{ fontSize: 13, fontWeight: 600 }}>{asset.tenor}</p>
                </div>
              </div>
              {/* Progress bar */}
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, height: 4 }}>
                <div style={{
                  width: `${asset.funded}%`, height: "100%",
                  background: "linear-gradient(90deg, #6C63FF, #10B981)",
                  borderRadius: 4,
                }} />
              </div>
              <p style={{ fontSize: 11, color: "#8888AA", marginTop: 6 }}>{asset.funded}% terdanai</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
