"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState<"INVESTOR" | "UMKM">("INVESTOR");
  const [step, setStep] = useState(1);

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "#10B981", top: -200, right: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: "#6C63FF", bottom: -100, left: -50 }} />

      <div style={{ width: "100%", maxWidth: 460, position: "relative", zIndex: 1 }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 40 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6C63FF, #10B981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "white" }}>A</div>
          <span style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 700, fontSize: 20, color: "#F1F1F8" }}>Asset<span style={{ color: "#6C63FF" }}>Chain</span></span>
        </Link>

        <div className="glass-card" style={{ padding: "36px 32px" }}>
          <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, textAlign: "center" }}>Buat Akun Baru</h1>
          <p style={{ color: "#8888AA", fontSize: 13, textAlign: "center", marginBottom: 28 }}>Sudah punya akun? <Link href="/login" style={{ color: "#6C63FF", textDecoration: "none", fontWeight: 600 }}>Masuk</Link></p>

          {/* Role Selector */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
            {[
              { value: "INVESTOR", icon: "💰", label: "Investor", desc: "Saya ingin berinvestasi" },
              { value: "UMKM", icon: "🏪", label: "UMKM", desc: "Saya butuh modal usaha" },
            ].map(r => (
              <button key={r.value} onClick={() => setRole(r.value as any)} style={{
                padding: "14px 12px", borderRadius: 12, border: `2px solid`,
                borderColor: role === r.value ? "#6C63FF" : "rgba(255,255,255,0.08)",
                background: role === r.value ? "rgba(108,99,255,0.12)" : "rgba(255,255,255,0.02)",
                cursor: "pointer", textAlign: "center", transition: "all 0.2s",
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{r.icon}</div>
                <p style={{ fontWeight: 700, fontSize: 13, color: "#F1F1F8" }}>{r.label}</p>
                <p style={{ fontSize: 11, color: "#8888AA" }}>{r.desc}</p>
              </button>
            ))}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Nama Lengkap</label>
            <input type="text" placeholder="Nama sesuai KTP" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Email</label>
            <input type="email" placeholder="nama@email.com" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Nomor HP</label>
            <input type="tel" placeholder="+62 812 xxxx xxxx" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Password</label>
            <input type="password" placeholder="Min. 8 karakter" style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>

          <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15 }}>
            Daftar sebagai {role === "INVESTOR" ? "Investor" : "UMKM"} →
          </button>

          <p style={{ color: "#8888AA", fontSize: 12, textAlign: "center", marginTop: 20, lineHeight: 1.6 }}>
            Dengan mendaftar, kamu menyetujui <Link href="#" style={{ color: "#6C63FF", textDecoration: "none" }}>Syarat & Ketentuan</Link> dan <Link href="#" style={{ color: "#6C63FF", textDecoration: "none" }}>Kebijakan Privasi</Link> kami.
          </p>
        </div>
      </div>
    </main>
  );
}
