import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* BRAND STRIP */}
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="brand-strip">
          <div style={{ background: "#f60", color: "#fff", padding: "8px 14px", fontSize: 12, fontWeight: 700, textAlign: "center" }}>
            <div style={{ fontSize: 16 }}>SAVE $1,000&apos;S</div>
            <div style={{ fontSize: 10 }}>ON THE TOP SPA BRANDS</div>
            <div style={{ background: "#ffcc00", color: "#333", fontSize: 10, padding: "2px 6px", marginTop: 3 }}>HUGE DISCOUNTS</div>
          </div>
          <div className="brand-logo" style={{ color: "#0066aa", fontStyle: "italic", fontSize: 20 }}>🌊 OceanicSpa</div>
          <div className="brand-logo" style={{ color: "#cc4400" }}>✦ CalderaSpas</div>
          <div className="brand-logo" style={{ color: "#226622" }}>🌴 IslandSpas <small style={{ fontSize: 10, color: "#888" }}>by ARTESIAN</small></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 14px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
            <div>
              <h6>CONTACT US</h6>
              <p>yoursitename.com<br />
              CALL 24/7: 888-201-8899<br />
              Your Address:<br />Street<br />
              State &amp; Zip Code<br />City &amp; Country<br />
              Email: servicemail@yoursitename.com</p>
              <div className="social-icons" style={{ marginTop: 8 }}>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div>
              <h6>INFORMATION</h6>
              <ul>
                <li><Link href="/about">ABOUT US</Link></li>
                <li><a href="#">CUSTOMER SERVICE</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">SITE MAP</a></li>
                <li><Link href="/contact">CONTACT US</Link></li>
              </ul>
            </div>
            <div>
              <h6>MY ACCOUNT</h6>
              <ul>
                <li><Link href="/login">SIGN IN</Link></li>
                <li><a href="#">VIEW CART</a></li>
                <li><a href="#">MY WISHLIST</a></li>
              </ul>
            </div>
            <div>
              <h6>SIGNUP FOR A NEWS LETTER</h6>
              <div className="footer-newsletter">
                <input type="email" placeholder="SIGN UP FOR OUR NEWS LETTER" />
              </div>
              <h6 style={{ marginTop: 12 }}>PAYMENT SOLUTIONS</h6>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 6 }}>
                <span style={{ background: "#1a3c6e", color: "#fff", padding: "3px 7px", fontSize: 10, borderRadius: 3 }}>VISA</span>
                <span style={{ background: "#eb0000", color: "#fff", padding: "3px 7px", fontSize: 10, borderRadius: 3 }}>MC</span>
                <span style={{ background: "#003087", color: "#fff", padding: "3px 7px", fontSize: 10, borderRadius: 3 }}>PayPal</span>
                <span style={{ background: "#2557d6", color: "#fff", padding: "3px 7px", fontSize: 10, borderRadius: 3 }}>AMEX</span>
              </div>
            </div>
          </div>
          <div className="footer-copyright">© 2014 Hottubspaservice.com. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}
