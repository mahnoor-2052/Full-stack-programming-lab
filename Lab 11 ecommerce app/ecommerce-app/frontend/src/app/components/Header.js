"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #f0f0f0",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@600;700&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#111",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            🛒
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: "700",
              color: "#111",
            }}
          >
            ShopMERN
          </span>
        </Link>
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/admin", label: "⚙️ Admin" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#555",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f5f5f5";
                e.target.style.color = "#111";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#555";
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            style={{
              padding: "9px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#fff",
              background: "#111",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Shop Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
