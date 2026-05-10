"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function validate(fields: Record<string, string>) {
  const errors: Record<string, string> = {};
  if (!fields.name.trim()) errors.name = "First name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "Please enter a valid email address.";
  if (!fields.subject.trim()) errors.subject = "Subject is required.";
  if (fields.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> Contact Us
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">Contact Us</div>
          <div className="form-section">
            {success && <div className="alert-success">✔ Your message has been sent successfully!</div>}

            <div className="contact-info">
              <h5>Hot Tub Spa Service</h5>
              <div className="call">CALL 24/7: 888-201-8899</div>
            </div>

            <div className="contact-cols">
              <div className="contact-col">
                <h6>ADDRESS</h6>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.8 }}>
                  Your Address Here<br />
                  Street Name<br />
                  City, State ZIP<br />
                  Country
                </p>
              </div>
              <div className="contact-col">
                <h6>HOURS OF OPERATION</h6>
                <p style={{ fontSize: 12, color: "#555", lineHeight: 1.8 }}>
                  Monday–Friday: 8am–8pm<br />
                  Saturday: 9am–6pm<br />
                  Sunday: 10am–4pm
                </p>
              </div>
            </div>

            <form id="contactForm" onSubmit={handleSubmit} style={{ maxWidth: 560 }}>
              <p style={{ color: "#cc0000", fontSize: 11 }}>*Required Fields</p>
              {[
                { id: "name", label: "First Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map(f => (
                <div key={f.id} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 8 }}>
                  <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>{f.label} <span style={{ color: "#cc0000" }}>*</span></label>
                  <div>
                    <input type={f.type} className={`form-control${errors[f.id] ? " is-invalid" : ""}`}
                      value={(form as any)[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })} />
                    {errors[f.id] && <span className="invalid-feedback">{errors[f.id]}</span>}
                  </div>
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 14 }}>
                <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>Message <span style={{ color: "#cc0000" }}>*</span></label>
                <div>
                  <textarea className={`form-control${errors.message ? " is-invalid" : ""}`} rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
                  {errors.message && <span className="invalid-feedback">{errors.message}</span>}
                </div>
              </div>
              <div style={{ marginLeft: 126 }}>
                <button type="submit" className="btn-red">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
