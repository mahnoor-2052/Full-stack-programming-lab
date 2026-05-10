"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Call for Customer support: <a href="tel:02038989565">020 38989565</a></span>
          <div className="top-links">
            <Link href="/my-account">My Account</Link>
            <a href="#">Wishlist</a>
            <a href="#">To Checkout</a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-header">
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className="site-logo" style={{ color: "inherit" }}>
            HOTSPRING<span>Portable Spas</span>
          </Link>
          <a href="#" className="cart-btn">
            <i className="fas fa-shopping-cart"></i> My Cart:&nbsp; 1 Items (1)
          </a>
        </div>
      </header>

      {/* SECOND NAV (top page links) */}
      <nav className="second-nav">
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 14px", display: "flex" }}>
          <Link href="/" className={`snav-link${pathname === "/" ? " active" : ""}`}>HOME</Link>
          <Link href="/category" className={`snav-link${pathname === "/category" ? " active" : ""}`}>PRODUCTS</Link>
          <a href="#" className="snav-link">SPECIAL OFFERS</a>
          <Link href="/contact" className={`snav-link${pathname === "/contact" ? " active" : ""}`}>CUSTC</Link>
        </div>
      </nav>

      {/* RED NAV */}
      <nav className="main-nav">
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <Link href="/category" className="nav-link">CATAGORY</Link>
            <span style={{ color: "rgba(255,255,255,0.3)", padding: "10px 4px" }}>|</span>
            <a href="#" className="nav-link">BRAND</a>
            <span style={{ color: "rgba(255,255,255,0.3)", padding: "10px 4px" }}>|</span>
            <a href="#" className="nav-link">INFO</a>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button type="button">SEARCH</button>
          </div>
        </div>
      </nav>
    </>
  );
}
