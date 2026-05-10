"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> Forgot Password
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">Forgot Your Password?</div>
          <div className="form-section" style={{ maxWidth: 500 }}>
            {success && <div className="alert-success">✔ Password reset link has been sent to your email.</div>}
            <h5>Password Reset</h5>
            <p>Please enter the email address associated with your account and we will email you a password reset link.</p>
            <p style={{ color: "#cc0000", fontSize: 11 }}>*Required Fields</p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 14 }}>
                <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>Email <span style={{ color: "#cc0000" }}>*</span></label>
                <div>
                  <input type="email" className={`form-control${error ? " is-invalid" : ""}`}
                    value={email} onChange={e => setEmail(e.target.value)} />
                  {error && <span className="invalid-feedback">{error}</span>}
                </div>
              </div>
              <div style={{ marginLeft: 126, display: "flex", gap: 14, alignItems: "center" }}>
                <button type="submit" className="btn-red">RESET PASSWORD</button>
                <Link href="/login" style={{ fontSize: 12 }}>Back to Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
