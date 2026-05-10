"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (form.password.length < 6) errs.password = "Password must be at least 6 characters.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setTimeout(() => router.push("/my-account"), 1500);
    }
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> My Account
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">Login Or Creat Account</div>
          <div className="form-section">
            {success && <div className="alert-success">✔ Login successful! Redirecting...</div>}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
              {/* LOGIN */}
              <div style={{ borderRight: "1px solid #ddd", paddingRight: 20 }}>
                <h5>User Login Details</h5>
                <p>Please sign in below with your login information.</p>
                <p style={{ color: "#cc0000", fontSize: 11 }}>*Required Fields</p>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 8 }}>
                    <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>Email <span style={{ color: "#cc0000" }}>*</span></label>
                    <div>
                      <input type="email" className={`form-control${errors.email ? " is-invalid" : ""}`}
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      {errors.email && <span className="invalid-feedback">{errors.email}</span>}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 10 }}>
                    <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>Password <span style={{ color: "#cc0000" }}>*</span></label>
                    <div>
                      <input type="password" className={`form-control${errors.password ? " is-invalid" : ""}`}
                        value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                      {errors.password && <span className="invalid-feedback">{errors.password}</span>}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12, fontSize: 12, marginLeft: 106 }}>
                    <input type="checkbox" id="remember" checked={form.remember}
                      onChange={e => setForm({ ...form, remember: e.target.checked })} />
                    {" "}<label htmlFor="remember">Remember me th next time I visit</label>
                  </div>
                  <div style={{ marginLeft: 106, display: "flex", alignItems: "center", gap: 16 }}>
                    <button type="submit" className="btn-red">LOGIN</button>
                    <Link href="/forgot-password" style={{ fontSize: 12 }}>Forgot your password?</Link>
                  </div>
                </form>
              </div>
              {/* REGISTER */}
              <div>
                <h5>New Customer?</h5>
                <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                <div style={{ marginTop: 14 }}>
                  <Link href="/register" className="btn-red">CREATE AN ACCOUNT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
