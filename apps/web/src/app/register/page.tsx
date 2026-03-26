"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"INVESTOR" | "UMKM">("INVESTOR");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Nama, email, dan password wajib diisi.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password minimal 8 karakter.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Gagal mendaftar. Coba lagi.");
      } else {
        setSuccess(true);
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (err) {
      setError("Tidak bisa terhubung ke server. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main style={{ minHeight: "100vh", background: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Akun Berhasil Dibuat!</h2>
          <p style={{ color: "#8888AA" }}>Mengalihkan ke halaman login...</p>
        </div>
      </main>
    );
  }

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
          <p style={{ color: "#8888AA", fontSize: 13, textAlign: "center", marginBottom: 28 }}>
            Sudah punya akun? <Link href="/login" style={{ color: "#6C63FF", textDecoration: "none", fontWeight: 600 }}>Masuk</Link>
          </p>

          {/* Role Selector */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
            {[
              { value: "INVESTOR", icon: "💰", label: "Investor", desc: "Saya ingin berinvestasi" },
              { value: "UMKM", icon: "🏪", label: "UMKM", desc: "Saya butuh modal usaha" },
            ].map(r => (
              <button key={r.value} type="button" onClick={() => setRole(r.value as "INVESTOR" | "UMKM")} style={{
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

          <form onSubmit={handleSubmit}>
            {[
              { name: "name", label: "Nama Lengkap", type: "text", placeholder: "Nama sesuai KTP" },
              { name: "email", label: "Email", type: "email", placeholder: "nama@email.com" },
              { name: "phone", label: "Nomor HP", type: "tel", placeholder: "+62 812 xxxx xxxx" },
              { name: "password", label: "Password", type: "password", placeholder: "Min. 8 karakter" },
            ].map(field => (
              <div key={field.name} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 8, color: "#8888AA" }}>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 10,
                    border: `1px solid ${error && !form[field.name as keyof typeof form] ? "#EF444460" : "rgba(255,255,255,0.1)"}`,
                    background: "rgba(255,255,255,0.04)", color: "#F1F1F8",
                    fontSize: 14, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            ))}

            {/* Error */}
            {error && (
              <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 10, padding: "12px 14px", marginBottom: 16 }}>
                <p style={{ color: "#EF4444", fontSize: 13 }}>⚠️ {error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: 15, opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer", marginBottom: 8 }}
            >
              {loading ? "⏳ Mendaftar..." : `Daftar sebagai ${role === "INVESTOR" ? "Investor" : "UMKM"} →`}
            </button>
          </form>

          <p style={{ color: "#8888AA", fontSize: 12, textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
            Dengan mendaftar, kamu menyetujui <Link href="#" style={{ color: "#6C63FF", textDecoration: "none" }}>Syarat & Ketentuan</Link> dan <Link href="#" style={{ color: "#6C63FF", textDecoration: "none" }}>Kebijakan Privasi</Link> kami.
          </p>
        </div>
      </div>
    </main>
  );
}
