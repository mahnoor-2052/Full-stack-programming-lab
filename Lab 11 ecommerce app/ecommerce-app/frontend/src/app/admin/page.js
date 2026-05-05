"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const emptyForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  stock: "",
  image: "",
};

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    fetch(`${API_URL}/api/products`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) {
      showMessage("error", "Name, price and category are required.");
      return;
    }
    setSubmitting(true);
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `${API_URL}/api/products/${editingId}`
      : `${API_URL}/api/products`;
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
        }),
      });
      const data = await res.json();
      if (data.success) {
        showMessage(
          "success",
          editingId ? "Product updated!" : "Product added!",
        );
        setForm(emptyForm);
        setEditingId(null);
        fetchProducts();
      } else {
        showMessage("error", data.message || "Something went wrong.");
      }
    } catch {
      showMessage("error", "Could not connect to backend.");
    }
    setSubmitting(false);
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        showMessage("success", "Product deleted!");
        setDeleteConfirm(null);
        fetchProducts();
      } else {
        showMessage("error", "Failed to delete.");
      }
    } catch {
      showMessage("error", "Could not connect to backend.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #e5e5e5",
    borderRadius: "10px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    color: "#111",
    background: "#fafafa",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "12px",
    fontWeight: "600",
    color: "#666",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fafafa",
        minHeight: "100vh",
      }}
    >
      {/* Page Header */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#aaa",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "6px",
            }}
          >
            Dashboard
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "32px",
              fontWeight: "700",
              color: "#111",
              letterSpacing: "-0.5px",
            }}
          >
            Admin Panel
          </h1>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        {/* LEFT — Form */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #f0f0f0",
            borderRadius: "16px",
            padding: "28px",
            position: "sticky",
            top: "84px",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#111",
              marginBottom: "20px",
            }}
          >
            {editingId ? "✏️ Edit Product" : "➕ Add New Product"}
          </h2>

          {message && (
            <div
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "16px",
                fontSize: "13px",
                fontWeight: "500",
                background: message.type === "success" ? "#f0fdf4" : "#fff5f5",
                color: message.type === "success" ? "#16a34a" : "#dc2626",
                border: `1px solid ${message.type === "success" ? "#bbf7d0" : "#fecaca"}`,
              }}
            >
              {message.type === "success" ? "✅ " : "⚠️ "}
              {message.text}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <label style={labelStyle}>Product Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Wireless Headphones"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short description..."
                rows={3}
                style={{ ...inputStyle, resize: "vertical", lineHeight: "1.5" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div>
                <label style={labelStyle}>Price ($) *</label>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Stock</label>
                <input
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  style={inputStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Category *</label>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="e.g. Electronics"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Image URL</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  flex: 1,
                  padding: "12px",
                  background: editingId ? "#2563eb" : "#111",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting
                  ? "Saving..."
                  : editingId
                    ? "Update Product"
                    : "Add Product"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  style={{
                    padding: "12px 16px",
                    background: "#f5f5f5",
                    color: "#555",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* RIGHT — Products List */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111" }}>
              All Products{" "}
              <span style={{ color: "#aaa", fontWeight: "400" }}>
                ({products.length})
              </span>
            </h2>
            <button
              onClick={fetchProducts}
              style={{
                padding: "8px 14px",
                background: "#f5f5f5",
                border: "1px solid #ebebeb",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "600",
                color: "#555",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ↻ Refresh
            </button>
          </div>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px",
                color: "#aaa",
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid #f0f0f0",
              }}
            >
              Loading products...
            </div>
          ) : products.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px",
                color: "#aaa",
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid #f0f0f0",
              }}
            >
              No products yet. Add your first one!
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {products.map((product) => (
                <div
                  key={product._id}
                  style={{
                    background: "#fff",
                    border:
                      editingId === product._id
                        ? "1px solid #2563eb"
                        : "1px solid #f0f0f0",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.15s",
                  }}
                >
                  <img
                    src={
                      product.image ||
                      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100"
                    }
                    alt={product.name}
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "10px",
                      objectFit: "cover",
                      flexShrink: 0,
                      background: "#f5f5f5",
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#111",
                        }}
                      >
                        {product.name}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          background: "#f5f5f5",
                          color: "#666",
                          padding: "2px 8px",
                          borderRadius: "6px",
                          fontWeight: "500",
                        }}
                      >
                        {product.category}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "700",
                          color: "#111",
                        }}
                      >
                        ${product.price}
                      </span>
                      <span
                        style={{
                          fontSize: "13px",
                          color: product.stock > 0 ? "#16a34a" : "#dc2626",
                        }}
                      >
                        {product.stock > 0
                          ? `${product.stock} in stock`
                          : "Out of stock"}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                    <button
                      onClick={() => handleEdit(product)}
                      style={{
                        padding: "8px 14px",
                        background: "#eff6ff",
                        color: "#2563eb",
                        border: "1px solid #bfdbfe",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      ✏️ Edit
                    </button>

                    {deleteConfirm === product._id ? (
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          onClick={() => handleDelete(product._id)}
                          style={{
                            padding: "8px 14px",
                            background: "#dc2626",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          style={{
                            padding: "8px 14px",
                            background: "#f5f5f5",
                            color: "#555",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontFamily: "'DM Sans', sans-serif",
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(product._id)}
                        style={{
                          padding: "8px 14px",
                          background: "#fff5f5",
                          color: "#dc2626",
                          border: "1px solid #fecaca",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        🗑️ Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
