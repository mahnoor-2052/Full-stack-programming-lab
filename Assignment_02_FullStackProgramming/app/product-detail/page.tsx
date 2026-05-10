"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const thumbs = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
];

const tabs = [
  { id: "details", label: "Details" },
  { id: "specs", label: "Quick Specs" },
  { id: "accessories", label: "Accessories" },
  { id: "reviews", label: "Reviews" },
  { id: "qa", label: "Q & A" },
];

export default function ProductDetail() {
  const [mainImg, setMainImg] = useState(thumbs[0]);
  const [activeTab, setActiveTab] = useState("details");
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span>
            <Link href="/category">Category</Link> <span>›</span> Product Detail
          </div>
        </div>
        <div className="page-wrapper">
          <h2 className="product-detail-title">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h2>
          <div className="product-meta">Air Model: B22CS30SNS8 | UPC Code: 825215868720</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* LEFT */}
            <div>
              <div className="product-main-img">
                <img src={mainImg} alt="Hot Tub" style={{ maxHeight: 280, objectFit: "contain" }} />
              </div>
              <div className="thumb-gallery">
                {thumbs.map((t, i) => (
                  <img key={i} src={t} alt={`thumb${i}`}
                    className={activeThumb === i ? "active" : ""}
                    onClick={() => { setMainImg(t); setActiveThumb(i); }} />
                ))}
              </div>
              <a href="#" className="zoom-link">+ Larger View</a>

              <div className="product-tabs">
                {tabs.map(tab => (
                  <button key={tab.id} className={`tab-btn${activeTab === tab.id ? " active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                ))}
              </div>
              <div className="tab-content-box">
                {activeTab === "details" && (
                  <div><strong>Product Details</strong><br />
                  The Emerald Bay XL is a top-of-the-line portable spa featuring 90 powerful jets for the ultimate hydrotherapy experience. Includes built-in TV/DVD/Stereo system, LED lighting, and energy-efficient insulation. Seats 6-8 adults comfortably with ergonomic seating positions designed by hydrotherapy experts.</div>
                )}
                {activeTab === "specs" && (
                  <ul className="specs-list">
                    <li><strong>Jets:</strong> 90 Stainless Steel Jets</li>
                    <li><strong>Seating:</strong> 6-8 Person</li>
                    <li><strong>Dimensions:</strong> 94&quot; x 94&quot; x 36&quot;</li>
                    <li><strong>Water Capacity:</strong> 450 Gallons</li>
                    <li><strong>Pump:</strong> 2 x 3HP Pumps</li>
                    <li><strong>Entertainment:</strong> TV/DVD/Stereo System</li>
                    <li><strong>Lighting:</strong> Multi-color LED</li>
                  </ul>
                )}
                {activeTab === "accessories" && <div>Cover, steps, chemical starter kit, and filter available as add-ons.</div>}
                {activeTab === "reviews" && <div>⭐⭐⭐⭐⭐ "Best purchase ever!" — 4.8/5 from 24 reviews</div>}
                {activeTab === "qa" && <div>Q: Does it include a cover? A: Yes, an insulated cover is included with every purchase.</div>}
              </div>

              {/* RELATED */}
              <div className="related-section">
                <div className="section-title">RELATED PRODUCTS</div>
                <div id="relSlider" className="related-slider">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="related-item">
                      <img src={`https://picsum.photos/60/60?random=${i+10}`} alt="Related" />
                      <div className="rel-name">XS SCYBA Series {i}</div>
                      <div className="rel-price">${(499 + i * 100).toLocaleString()}.00</div>
                    </div>
                  ))}
                </div>
                <div className="slider-nav">
                  <button>‹</button>
                  <button>›</button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="star-rating">★★★★★</div>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 8 }}>24 Review(s) | Add Your Review</div>
              <div className="retail-price">Retail Price: $6,299.00</div>
              <div className="sale-label">YOU SAVE: $1,400.00 (22%)</div>
              <div className="sale-price">$4,899.00</div>
              <div className="guarantee">✔ 30-Day Money Back Guarantee</div>

              <div style={{ marginTop: 14, marginBottom: 14 }}>
                <div style={{ fontSize: 12, marginBottom: 6 }}>
                  <strong>Availability:</strong> <span style={{ color: "green" }}>In Stock</span>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                  <label style={{ fontSize: 12 }}>Qty:</label>
                  <input type="number" defaultValue={1} min={1} className="form-control" style={{ width: 60 }} />
                </div>
                <button className="btn-red" style={{ width: "100%", padding: 10, fontSize: 13, marginBottom: 8 }}>
                  <i className="fas fa-shopping-cart"></i> ADD TO CART
                </button>
                <button className="btn-dark-custom" style={{ width: "100%", padding: 10, fontSize: 13 }}>
                  ADD TO WISH LIST
                </button>
              </div>

              <div className="price-calculator">
                <h6>Price Calculator</h6>
                <select><option>-- Select Cover --</option><option>Standard Cover (+$199)</option><option>Premium Cover (+$299)</option></select>
                <select><option>-- Select Steps --</option><option>2-Step Entry (+$99)</option><option>3-Step Entry (+$149)</option></select>
                <select><option>-- Chemical Kit --</option><option>Basic Kit (+$49)</option><option>Premium Kit (+$89)</option></select>
                <div className="total-price">TOTAL: $4,899.00</div>
                <button className="btn-red" style={{ width: "100%" }}>ADD ALL TO CART</button>
              </div>

              <div className="download-resources" style={{ marginTop: 14 }}>
                <h6>Downloads &amp; Resources</h6>
                <a href="#">📄 Product Brochure (PDF)</a>
                <a href="#">📋 Owner&apos;s Manual (PDF)</a>
                <a href="#">🎥 Video Tour</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
