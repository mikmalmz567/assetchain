"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10, 10, 15, 0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #6C63FF, #10B981)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 800, color: "white",
          }}>A</div>
          <span style={{ fontFamily: "Plus Jakarta Sans", fontWeight: 700, fontSize: 20, color: "#F1F1F8" }}>
            Asset<span style={{ color: "#6C63FF" }}>Chain</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="nav-links">
          {["Marketplace", "UMKM", "Investor", "Tentang"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} style={{
              color: "#8888AA", textDecoration: "none", fontSize: 14, fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F1F1F8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8888AA")}
            >{item}</Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Link href="/login" className="btn-secondary" style={{ padding: "9px 20px", fontSize: 14 }}>
            Masuk
          </Link>
          <Link href="/register" className="btn-primary" style={{ padding: "9px 20px", fontSize: 14 }}>
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}
