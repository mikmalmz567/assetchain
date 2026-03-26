import Link from "next/link";

export default function AssetShowcase() {
  const assets = [
    { name: "Invoice Resto Padang Murah Meriah", type: "INVOICE", yield: "14.5%", tenor: "90 hari", funded: 78, min: "Rp 100rb", total: "Rp 150jt", kota: "Jakarta" },
    { name: "Inventori Batik Tulis Pekalongan", type: "INVENTORY", yield: "12.0%", tenor: "180 hari", funded: 45, min: "Rp 500rb", total: "Rp 300jt", kota: "Pekalongan" },
    { name: "Piutang Konveksi Kaos Polos", type: "RECEIVABLE", yield: "16.2%", tenor: "60 hari", funded: 91, min: "Rp 250rb", total: "Rp 80jt", kota: "Bandung" },
  ];

  const typeColors: Record<string, string> = {
    INVOICE: "#6C63FF",
    INVENTORY: "#10B981",
    RECEIVABLE: "#F59E0B",
  };

  return (
    <section className="section" id="marketplace">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="badge badge-green" style={{ marginBottom: 12 }}>Live Marketplace</div>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 800 }}>
              Aset Tersedia <span className="gradient-text">Sekarang</span>
            </h2>
          </div>
          <Link href="/marketplace" className="btn-secondary">
            Lihat Semua →
          </Link>
        </div>

        <div className="grid-3">
          {assets.map((asset) => (
            <div key={asset.name} className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
              {/* Card Header */}
              <div style={{
                padding: "20px 24px 16px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: `linear-gradient(135deg, ${typeColors[asset.type]}10, transparent)`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{
                    background: `${typeColors[asset.type]}20`,
                    border: `1px solid ${typeColors[asset.type]}40`,
                    color: typeColors[asset.type],
                    padding: "3px 12px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                  }}>{asset.type}</span>
                  <span style={{ color: "#8888AA", fontSize: 12 }}>📍 {asset.kota}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4 }}>{asset.name}</h3>
              </div>

              {/* Card Body */}
              <div style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>
                    <p style={{ fontSize: 11, color: "#8888AA", marginBottom: 4 }}>Expected Yield</p>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "#10B981" }}>{asset.yield}</p>
                    <p style={{ fontSize: 11, color: "#8888AA" }}>per tahun</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: 11, color: "#8888AA", marginBottom: 4 }}>Tenor</p>
                    <p style={{ fontSize: 18, fontWeight: 700 }}>{asset.tenor}</p>
                    <p style={{ fontSize: 11, color: "#8888AA" }}>Min. {asset.min}</p>
                  </div>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: "#8888AA" }}>Terdanai</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: typeColors[asset.type] }}>{asset.funded}%</span>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, height: 6 }}>
                    <div style={{
                      width: `${asset.funded}%`, height: "100%",
                      background: `linear-gradient(90deg, ${typeColors[asset.type]}, ${typeColors[asset.type]}99)`,
                      borderRadius: 4, transition: "width 1s ease",
                    }} />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ fontSize: 12, color: "#8888AA" }}>Total Target</span>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{asset.total}</span>
                </div>

                <Link href="/marketplace" className="btn-primary" style={{
                  width: "100%", justifyContent: "center", fontSize: 14, padding: "11px 0",
                  background: `linear-gradient(135deg, ${typeColors[asset.type]}, ${typeColors[asset.type]}CC)`,
                }}>
                  Investasi Sekarang
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
