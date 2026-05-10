"use client";
import { useState } from "react";
import Link from "next/link";

interface AddressFormProps {
  title: string;
  formId: string;
}

const fields = [
  { id: "firstName", label: "First Name", type: "text" },
  { id: "lastName", label: "Last Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "text" },
  { id: "city", label: "City", type: "text" },
  { id: "state", label: "State", type: "text" },
  { id: "zip", label: "Zip Code", type: "text" },
  { id: "country", label: "Country", type: "text" },
];

export default function AddressForm({ title, formId }: AddressFormProps) {
  const init = Object.fromEntries(fields.map(f => [f.id, ""]));
  const [form, setForm] = useState<Record<string, string>>(init);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    fields.forEach(f => {
      if (f.id === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required.";
      } else {
        if (!form[f.id].trim()) errs[f.id] = `${f.label} is required.`;
      }
    });
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSuccess(true);
  };

  return (
    <form id={formId} onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
      {success && <div className="alert-success">✔ {title} updated successfully!</div>}
      <p style={{ color: "#cc0000", fontSize: 11, marginBottom: 12 }}>*Required Fields</p>
      {fields.map(f => (
        <div key={f.id} style={{ display: "grid", gridTemplateColumns: "130px 1fr", gap: 6, alignItems: "flex-start", marginBottom: 8 }}>
          <label style={{ textAlign: "right", fontSize: 12, paddingTop: 6 }}>{f.label} <span style={{ color: "#cc0000" }}>*</span></label>
          <div>
            <input type={f.type} className={`form-control${errors[f.id] ? " is-invalid" : ""}`}
              value={form[f.id]} onChange={e => setForm({ ...form, [f.id]: e.target.value })} />
            {errors[f.id] && <span className="invalid-feedback">{errors[f.id]}</span>}
          </div>
        </div>
      ))}
      <div style={{ marginLeft: 136, display: "flex", gap: 14, alignItems: "center", marginTop: 14 }}>
        <button type="submit" className="btn-red">SAVE ADDRESS</button>
        <Link href="/my-account" style={{ fontSize: 12 }}>Back to My Account</Link>
      </div>
    </form>
  );
}
