"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", rePassword: "", firstName: "", lastName: "", newsletter: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (form.password.length < 6 || form.password.length > 20) errs.password = "Password must be 6–20 characters long.";
    if (form.rePassword !== form.password) errs.rePassword = "Passwords do not match.";
    if (!form.firstName.trim()) errs.firstName = "First name is required.";
    if (!form.lastName.trim()) errs.lastName = "Last name is required.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  const fields = [
    { id: "email", label: "Email Address", type: "email" },
    { id: "password", label: "Password", type: "password" },
    { id: "rePassword", label: "Re-enter Password", type: "password" },
    { id: "firstName", label: "First Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
  ];

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> Register
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">Create New Account</div>
          <div className="form-section">
            {success && <div className="alert-success">✔ Account created successfully!</div>}
            <h5>User Account Details</h5>
            <p>To create a new account, please fill in the required information below. Passwords are case sensitive and must be 6 to 20 characters long</p>
            <p style={{ color: "#cc0000", fontSize: 11 }}>*Required Fields</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
              {fields.map(f => (
                <div key={f.id} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 8 }}>
                  <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>{f.label} <span style={{ color: "#cc0000" }}>*</span></label>
                  <div>
                    <input type={f.type} className={`form-control${errors[f.id] ? " is-invalid" : ""}`}
                      value={(form as any)[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })} />
                    {errors[f.id] && <span className="invalid-feedback">{errors[f.id]}</span>}
                  </div>
                </div>
              ))}
              <div style={{ marginLeft: 146, marginBottom: 14, fontSize: 12 }}>
                <input type="checkbox" id="newsletter" checked={form.newsletter}
                  onChange={e => setForm({ ...form, newsletter: e.target.checked })} />
                {" "}<label htmlFor="newsletter">Yes, I want to receive email about new products and specials!</label>
              </div>
              <div style={{ marginLeft: 146, display: "flex", alignItems: "center", gap: 16 }}>
                <button type="submit" className="btn-red">CREATE ACCOUNT</button>
                <Link href="/forgot-password" style={{ fontSize: 12 }}>Forgot your password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
