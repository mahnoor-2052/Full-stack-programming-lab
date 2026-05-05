"use client";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        border: hovered ? "1px solid #e0e0e0" : "1px solid #f0f0f0",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.08)"
          : "0 1px 4px rgba(0,0,0,0.03)",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "210px",
          overflow: "hidden",
          background: "#f8f8f8",
        }}
      >
        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
          }
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: "rgba(255,255,255,0.95)",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "10px",
            fontWeight: "700",
            color: "#555",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {product.category}
        </div>
      </div>
      <div
        style={{
          padding: "18px 20px 20px",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <h3
          style={{
            fontSize: "15px",
            fontWeight: "600",
            color: "#111",
            marginBottom: "6px",
            lineHeight: "1.3",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "#999",
            lineHeight: "1.5",
            marginBottom: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#111",
              letterSpacing: "-0.5px",
            }}
          >
            ${product.price.toFixed(2)}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: product.stock > 0 ? "#16a34a" : "#dc2626",
              background: product.stock > 0 ? "#f0fdf4" : "#fff5f5",
              padding: "3px 9px",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            {product.stock > 0 ? `${product.stock} left` : "Sold out"}
          </span>
        </div>
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          disabled={product.stock === 0}
          style={{
            width: "100%",
            padding: "11px",
            borderRadius: "10px",
            border: "none",
            cursor: product.stock === 0 ? "not-allowed" : "pointer",
            background: added
              ? "#16a34a"
              : product.stock === 0
                ? "#f0f0f0"
                : "#111",
            color: added ? "#fff" : product.stock === 0 ? "#aaa" : "#fff",
            fontSize: "13px",
            fontWeight: "600",
            transition: "all 0.2s",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {added
            ? "✓ Added!"
            : product.stock === 0
              ? "Unavailable"
              : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
