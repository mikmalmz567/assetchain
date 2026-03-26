import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          borderRadius: 28, padding: "72px 40px", textAlign: "center",
          background: "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(16,185,129,0.1) 100%)",
          border: "1px solid rgba(108,99,255,0.25)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Orb decorations */}
          <div className="orb" style={{ width: 300, height: 300, background: "#6C63FF", top: -100, left: -50 }} />
          <div className="orb" style={{ width: 200, height: 200, background: "#10B981", bottom: -80, right: -30 }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="badge badge-purple" style={{ marginBottom: 24, display: "inline-flex" }}>
              🚀 Mulai Sekarang
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, marginBottom: 20 }}>
              Siap Bergabung dengan{" "}
              <span className="gradient-text">AssetChain?</span>
            </h2>
            <p style={{ color: "#8888AA", fontSize: 18, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Bergabung dengan ribuan UMKM dan investor yang sudah merasakan manfaat tokenisasi aset nyata.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/umkm/daftar" className="btn-primary" style={{ padding: "16px 36px", fontSize: 16 }}>
                Daftarkan UMKM Saya
              </Link>
              <Link href="/register" className="btn-secondary" style={{ padding: "16px 36px", fontSize: 16 }}>
                Mulai Investasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
