"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{ minHeight: "100vh", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, position: "relative", overflow: "hidden" }}>
      <div className="orb" style={{ width: 500, height: 500, background: "#6C63FF", top: -200, left: -100 }} />
      <div className="orb" style={{ width: 300, height: 300, background: "#10B981", bottom: -100, right: -50 }} />

      <div style={{ width: "100%", maxWidth: 420, position: "relative", zIndex: 1 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 40 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #6C63FF, #10B981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "white" }}>A</div>
          <span style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 700, fontSize: 20, color: "#F1F1F8" }}>Asset<span style={{ color: "#6C63FF" }}>Chain</span></span>
        </Link>

        <div className="glass-card" style={{ padding: "36px 32px" }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6, textAlign: "center" }}>Masuk ke Akun</h1>
          <p style={{ color: "#8888AA", fontSize: 14, textAlign: "center", marginBottom: 32 }}>Belum punya akun? <Link href="/register" style={{ color: "#6C63FF", textDecoration: "none", fontWeight: 600 }}>Daftar sekarang</Link></p>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="nama@email.com" style={{
              width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none",
              transition: "border-color 0.2s", boxSizing: "border-box",
            }} />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" style={{
              width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, outline: "none",
              transition: "border-color 0.2s", boxSizing: "border-box",
            }} />
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <Link href="#" style={{ color: "#6C63FF", fontSize: 12, textDecoration: "none" }}>Lupa password?</Link>
            </div>
          </div>

          <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15 }}>
            Masuk
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0" }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
            <span style={{ color: "#8888AA", fontSize: 12 }}>atau masuk dengan</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)" }} />
          </div>

          <button style={{
            width: "100%", padding: "12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)", color: "#F1F1F8", fontSize: 14, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            fontWeight: 600, transition: "all 0.2s",
          }}>
            🦊 Hubungkan Wallet (MetaMask)
          </button>
        </div>
      </div>
    </main>
  );
}
