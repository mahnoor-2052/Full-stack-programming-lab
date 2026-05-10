"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const slides = [
  {
    bg: "linear-gradient(135deg,#0a1628 0%,#1a3a5c 100%)",
    title: "Barrier Reef 158 Jet\nTV- Stereo - Home Theater\nSupter Spa",
    desc: "Extra Large and Deep 8 Person\n158 Jet Supper Spa, TV-Home Theater Spa System",
    price: "$4899.00",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=280&h=190&fit=crop",
  },
  {
    bg: "linear-gradient(135deg,#1a0a28 0%,#3a1a5c 100%)",
    title: "5-7 Person Spa\nPremium Series",
    desc: "Luxury hot tub with advanced jet system",
    price: "$3299.00",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=280&h=190&fit=crop",
  },
  {
    bg: "linear-gradient(135deg,#0a2818 0%,#1a5c3a 100%)",
    title: "TV Theater Spa\nUltimate Experience",
    desc: "Built-in entertainment system with 4K display",
    price: "$5499.00",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=280&h=190&fit=crop",
  },
];

const products = [
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SET+ES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=130&fit=crop" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* HERO SLIDER */}
        <div className="hero-slider">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`hero-slide${currentSlide === i ? " active" : ""}`}
              style={{ background: slide.bg }}
            >
              <div className="hero-text">
                <h2>{slide.title.split("\n").map((l, j) => (<span key={j}>{l}<br /></span>))}</h2>
                <p>{slide.desc.split("\n").map((l, j) => (<span key={j}>{l}<br /></span>))}</p>
                <div className="price">{slide.price}</div>
                <Link href="/product-detail" className="btn-red" style={{ display: "inline-block", padding: "8px 20px" }}>More Details</Link>
              </div>
              <div style={{ width: 280, textAlign: "center" }}>
                <img src={slide.img} alt="Hot Tub" style={{ width: 280, height: 190, objectFit: "cover", borderRadius: 6 }} />
              </div>
            </div>
          ))}
          <div className="hero-dots">
            {slides.map((_, i) => (
              <span key={i} className={currentSlide === i ? "active" : ""} onClick={() => setCurrentSlide(i)}></span>
            ))}
          </div>
        </div>

        {/* PROMO BANNERS */}
        <div className="promo-banners">
          <div className="promo-banner" style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=320&h=120&fit=crop" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} alt="" />
            <div className="promo-text" style={{ position: "relative", zIndex: 1, color: "#fff" }}>
              <h4>5-7 PERSON SPA</h4>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
            </div>
          </div>
          <div className="promo-banner" style={{ position: "relative", overflow: "hidden" }}>
            <img src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=320&h=120&fit=crop" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} alt="" />
            <div className="promo-text" style={{ position: "relative", zIndex: 1, color: "#fff" }}>
              <h4>TV THEATER SPA</h4>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
            </div>
          </div>
          <div className="promo-banner save-banner">
            <div className="promo-text">
              <h4>SAVE<br />50%</h4>
              <p>THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIBH VEL VELIT AUCTOR</p>
            </div>
          </div>
        </div>

        {/* NEW PRODUCTS */}
        <div className="page-wrapper">
          <div className="section-title">NEW PRODUCTS</div>
          <div className="product-grid">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
