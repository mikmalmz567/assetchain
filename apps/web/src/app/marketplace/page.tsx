"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const assets = [
  { id: 1, name: "Invoice Resto Padang Murah Meriah", type: "INVOICE", yield: "14.5%", tenor: "90 hari", funded: 78, min: "Rp 100rb", total: "Rp 150jt", kota: "Jakarta", risk: "Rendah" },
  { id: 2, name: "Inventori Batik Tulis Pekalongan", type: "INVENTORY", yield: "12.0%", tenor: "180 hari", funded: 45, min: "Rp 500rb", total: "Rp 300jt", kota: "Pekalongan", risk: "Rendah" },
  { id: 3, name: "Piutang Konveksi Kaos Polos Bandung", type: "RECEIVABLE", yield: "16.2%", tenor: "60 hari", funded: 91, min: "Rp 250rb", total: "Rp 80jt", kota: "Bandung", risk: "Sedang" },
  { id: 4, name: "Invoice Supplier Spare Part Otomotif", type: "INVOICE", yield: "13.8%", tenor: "120 hari", funded: 33, min: "Rp 500rb", total: "Rp 500jt", kota: "Surabaya", risk: "Rendah" },
  { id: 5, name: "Inventori Frozen Food UMKM Semarang", type: "INVENTORY", yield: "11.5%", tenor: "90 hari", funded: 60, min: "Rp 200rb", total: "Rp 120jt", kota: "Semarang", risk: "Rendah" },
  { id: 6, name: "Piutang Percetakan Digital Yogyakarta", type: "RECEIVABLE", yield: "18.0%", tenor: "45 hari", funded: 85, min: "Rp 100rb", total: "Rp 50jt", kota: "Yogyakarta", risk: "Sedang" },
];

const typeColors: Record<string, string> = {
  INVOICE: "#6C63FF",
  INVENTORY: "#10B981",
  RECEIVABLE: "#F59E0B",
};

const riskColors: Record<string, string> = {
  Rendah: "#10B981",
  Sedang: "#F59E0B",
  Tinggi: "#EF4444",
};

export default function Marketplace() {
  const [filter, setFilter] = useState("SEMUA");
  const [sort, setSort] = useState("yield");

  const types = ["SEMUA", "INVOICE", "INVENTORY", "RECEIVABLE"];

  const filtered = assets
    .filter(a => filter === "SEMUA" || a.type === filter)
    .sort((a, b) => {
      if (sort === "yield") return parseFloat(b.yield) - parseFloat(a.yield);
      if (sort === "funded") return b.funded - a.funded;
      return 0;
    });

  return (
    <main>
      <Navbar />
      <section style={{ paddingTop: 100, minHeight: "100vh", background: "var(--color-bg)" }}>
        <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div className="badge badge-green" style={{ marginBottom: 12 }}>Live Marketplace</div>
            <h1 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, marginBottom: 8 }}>
              Marketplace <span className="gradient-text">Aset UMKM</span>
            </h1>
            <p style={{ color: "#8888AA", fontSize: 15 }}>
              {assets.length} aset tersedia · Terverifikasi & On-Chain
            </p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {types.map(t => (
                <button key={t} onClick={() => setFilter(t)} style={{
                  padding: "8px 18px", borderRadius: 100, border: "1px solid",
                  background: filter === t ? "#6C63FF" : "transparent",
                  borderColor: filter === t ? "#6C63FF" : "rgba(255,255,255,0.1)",
                  color: filter === t ? "white" : "#8888AA",
                  cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all 0.2s",
                }}>{t}</button>
              ))}
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)} style={{
              background: "var(--color-bg-card)", color: "#F1F1F8",
              border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
              padding: "8px 14px", fontSize: 13, cursor: "pointer",
            }}>
              <option value="yield">Sort: Yield Tertinggi</option>
              <option value="funded">Sort: Hampir Penuh</option>
            </select>
          </div>

          {/* Asset Grid */}
          <div className="grid-3">
            {filtered.map(asset => (
              <div key={asset.id} className="glass-card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{
                  padding: "18px 22px 14px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  background: `linear-gradient(135deg, ${typeColors[asset.type]}10, transparent)`,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{
                      background: `${typeColors[asset.type]}20`, border: `1px solid ${typeColors[asset.type]}40`,
                      color: typeColors[asset.type], padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    }}>{asset.type}</span>
                    <span style={{
                      background: `${riskColors[asset.risk]}15`, border: `1px solid ${riskColors[asset.risk]}30`,
                      color: riskColors[asset.risk], padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 600,
                    }}>Risiko {asset.risk}</span>
                  </div>
                  <h3 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, marginBottom: 4 }}>{asset.name}</h3>
                  <span style={{ color: "#8888AA", fontSize: 12 }}>📍 {asset.kota}</span>
                </div>
                <div style={{ padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <div>
                      <p style={{ fontSize: 11, color: "#8888AA", marginBottom: 2 }}>Expected Yield</p>
                      <p style={{ fontSize: 24, fontWeight: 800, color: "#10B981" }}>{asset.yield}</p>
                      <p style={{ fontSize: 11, color: "#8888AA" }}>per tahun</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: 11, color: "#8888AA", marginBottom: 2 }}>Tenor</p>
                      <p style={{ fontSize: 16, fontWeight: 700 }}>{asset.tenor}</p>
                      <p style={{ fontSize: 11, color: "#8888AA" }}>Min. {asset.min}</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontSize: 12, color: "#8888AA" }}>Progress Pendanaan</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: typeColors[asset.type] }}>{asset.funded}%</span>
                    </div>
                    <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 4, height: 6 }}>
                      <div style={{ width: `${asset.funded}%`, height: "100%", background: `linear-gradient(90deg, ${typeColors[asset.type]}, ${typeColors[asset.type]}99)`, borderRadius: 4 }} />
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ fontSize: 12, color: "#8888AA" }}>Total Target</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{asset.total}</span>
                  </div>
                  <Link href={`/marketplace/${asset.id}`} className="btn-primary" style={{
                    width: "100%", justifyContent: "center", fontSize: 13, padding: "10px 0",
                    background: `linear-gradient(135deg, ${typeColors[asset.type]}, ${typeColors[asset.type]}CC)`,
                    boxShadow: `0 4px 15px ${typeColors[asset.type]}30`,
                  }}>
                    Lihat Detail & Investasi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
