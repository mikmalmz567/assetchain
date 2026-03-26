import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "60px 24px 36px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "linear-gradient(135deg, #6C63FF, #10B981)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 800, color: "white",
              }}>A</div>
              <span style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 700, fontSize: 20 }}>
                Asset<span style={{ color: "#6C63FF" }}>Chain</span>
              </span>
            </div>
            <p style={{ color: "#8888AA", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Platform tokenisasi aset nyata (RWA) pertama yang fokus untuk UMKM Indonesia.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["𝕏", "📘", "💬", "📸"].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", fontSize: 16, transition: "all 0.2s",
                }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Platform", links: ["Marketplace", "Cara Kerja", "UMKM", "Investor"] },
            { title: "Perusahaan", links: ["Tentang Kami", "Blog", "Karir", "Press"] },
            { title: "Legal", links: ["Syarat & Ketentuan", "Kebijakan Privasi", "KYC Policy", "Disclaimer"] },
          ].map((col) => (
            <div key={col.title}>
              <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <Link key={link} href="#" style={{
                    color: "#8888AA", fontSize: 14, textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F1F1F8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#8888AA")}
                  >{link}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 28, display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ color: "#8888AA", fontSize: 13 }}>
            © 2024 AssetChain. Beroperasi dalam OJK Regulatory Sandbox.
          </p>
          <p style={{ color: "#8888AA", fontSize: 13 }}>
            Investasi mengandung risiko. Baca prospektus sebelum berinvestasi.
          </p>
        </div>
      </div>
    </footer>
  );
}
