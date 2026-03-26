export default function HowItWorks() {
  const umkmSteps = [
    { step: "01", title: "Daftar & KYC", desc: "Verifikasi NIK, NPWP, dan data usaha kamu. Proses cepat via Verihubs." },
    { step: "02", title: "Submit Aset", desc: "Upload dokumen aset (invoice, inventori, sertifikat). Kami akan review dalam 3x24 jam." },
    { step: "03", title: "Token Diterbitkan", desc: "Aset kamu dikonversi jadi token digital dan dipasarkan ke ribuan investor." },
    { step: "04", title: "Terima Dana", desc: "Dana dari investor ditransfer ke rekeningmu. Bayar cicilan sesuai tenor." },
  ];

  const investorSteps = [
    { step: "01", title: "Buat Akun", desc: "Daftar dan verifikasi identitas. Hubungkan wallet atau bayar via transfer bank." },
    { step: "02", title: "Browse Aset", desc: "Pilih aset UMKM berdasarkan yield, tenor, kategori, dan profil risiko." },
    { step: "03", title: "Beli Token", desc: "Investasi mulai Rp 100.000. Token tercatat secara on-chain atas namamu." },
    { step: "04", title: "Terima Return", desc: "Yield didistribusikan otomatis ke walletmu setiap periode." },
  ];

  return (
    <section className="section" id="cara-kerja" style={{ position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="badge badge-green" style={{ marginBottom: 16 }}>Cara Kerja</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, marginBottom: 16 }}>
            Sederhana untuk{" "}
            <span className="gradient-text">Semua Pihak</span>
          </h2>
          <p style={{ color: "#8888AA", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            Baik kamu UMKM yang butuh modal atau investor yang ingin cuan, prosesnya mudah dan transparan.
          </p>
        </div>

        <div className="grid-2" style={{ gap: 40 }}>
          {/* UMKM Flow */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                padding: "8px 18px", borderRadius: 100,
                background: "linear-gradient(135deg, #6C63FF20, #6C63FF40)",
                border: "1px solid #6C63FF50",
                color: "#A78BFA", fontWeight: 700, fontSize: 14,
              }}>🏪 Untuk UMKM</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {umkmSteps.map((s, i) => (
                <div key={s.step} className="glass-card" style={{ padding: "20px 24px", display: "flex", gap: 20 }}>
                  <div style={{
                    minWidth: 44, height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, #6C63FF, #4F46E5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 13, color: "white",
                  }}>{s.step}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.title}</p>
                    <p style={{ color: "#8888AA", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investor Flow */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                padding: "8px 18px", borderRadius: 100,
                background: "linear-gradient(135deg, #10B98120, #10B98140)",
                border: "1px solid #10B98150",
                color: "#34D399", fontWeight: 700, fontSize: 14,
              }}>💰 Untuk Investor</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {investorSteps.map((s) => (
                <div key={s.step} className="glass-card" style={{ padding: "20px 24px", display: "flex", gap: 20 }}>
                  <div style={{
                    minWidth: 44, height: 44, borderRadius: 12,
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 13, color: "white",
                  }}>{s.step}</div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{s.title}</p>
                    <p style={{ color: "#8888AA", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
