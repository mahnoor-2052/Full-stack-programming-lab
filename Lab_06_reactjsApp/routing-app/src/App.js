import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const s = {
  page: {
    minHeight: "100vh",
    background: "#f4f4f8",
    fontFamily: "'Segoe UI',sans-serif",
  },
  nav: {
    display: "flex",
    gap: "4px",
    background: "#fff",
    borderBottom: "1px solid #e8e8f0",
    padding: "12px 2rem",
    position: "sticky",
    top: 0,
  },
  nl: {
    padding: "9px 16px",
    border: "none",
    background: "transparent",
    borderRadius: "9px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    color: "#6b6b8a",
    textDecoration: "none",
  },
  nlActive: { background: "#f0eeff", color: "#534ab7" },
  wrap: { maxWidth: "700px", margin: "0 auto", padding: "2rem" },
  card: {
    background: "#fff",
    border: "0.5px solid #e8e8f0",
    borderRadius: "16px",
    padding: "2rem",
  },
  h1: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#1a1a2e",
    margin: "0 0 8px",
  },
  p: { fontSize: "14px", color: "#6b6b8a", lineHeight: "1.7" },
  inp: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px 14px",
    border: "1px solid #e0e0ec",
    borderRadius: "9px",
    fontSize: "14px",
    marginBottom: "10px",
    fontFamily: "inherit",
    color: "#1a1a2e",
    background: "#fafafa",
    outline: "none",
    display: "block",
  },
  btn: {
    padding: "12px 24px",
    background: "#534ab7",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "600",
  },
  hero: {
    background: "#f0eeff",
    borderRadius: "12px",
    padding: "2rem",
    marginBottom: "1.2rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "1rem",
  },
  prod: {
    background: "#fafafa",
    border: "1px solid #e8e8f0",
    borderRadius: "12px",
    padding: "1rem",
  },
  abtn: {
    padding: "8px 14px",
    background: "#f0eeff",
    color: "#534ab7",
    border: "1px solid #d0c8f8",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer",
  },
  cart: {
    background: "#f0eeff",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#534ab7",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "1rem",
  },
};

function NavLink({ to, children }) {
  const loc = useLocation();
  const active = loc.pathname === to;
  return (
    <Link to={to} style={{ ...s.nl, ...(active ? s.nlActive : {}) }}>
      {children}
    </Link>
  );
}

function Home() {
  return (
    <div style={s.wrap}>
      <div style={s.card}>
        <div style={s.hero}>
          <h1 style={s.h1}>Welcome to ShopLite</h1>
          <p style={s.p}>
            Your modern shopping destination for quality products at great
            prices.
          </p>
        </div>
        <p style={s.p}>
          Browse our curated collection, reach out via contact, or learn more
          about us. Built with React Router for seamless navigation.
        </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={s.wrap}>
      <div style={s.card}>
        <h1 style={s.h1}>About Us</h1>
        <p style={s.p}>
          ShopLite is a modern e-commerce platform built by students learning
          full-stack development. We showcase React state, event handling, and
          routing concepts in a real-world context.
        </p>
        <p style={s.p}>
          This project was built as part of Lab 06 at Air University —
          Department of Creative Technologies.
        </p>
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <div style={s.wrap}>
      <div style={s.card}>
        <h1 style={s.h1}>Contact Us</h1>
        <p style={{ ...s.p, marginBottom: "1.2rem" }}>
          Have a question? Fill in the form below.
        </p>
        <input
          style={s.inp}
          placeholder="Your name"
          value={form.name}
          onChange={set("name")}
        />
        <input
          style={s.inp}
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={set("email")}
        />
        <textarea
          style={{ ...s.inp, resize: "vertical", minHeight: "90px" }}
          placeholder="Your message..."
          value={form.message}
          onChange={set("message")}
        />
        <button style={s.btn} onClick={() => alert("Message sent!")}>
          Send Message
        </button>
      </div>
    </div>
  );
}

function Products() {
  const [cart, setCart] = useState([]);
  const items = [
    { id: 1, name: "Laptop Pro", desc: "High performance, 16GB RAM" },
    { id: 2, name: "Smartphone X", desc: "Latest model, 5G enabled" },
    { id: 3, name: "Headphones", desc: "Noise cancelling, wireless" },
    { id: 4, name: "Smartwatch", desc: "Health tracking, GPS" },
  ];
  return (
    <div style={s.wrap}>
      <div style={s.card}>
        <h1 style={s.h1}>Products</h1>
        <div style={s.cart}>
          Cart: {cart.length} item{cart.length !== 1 ? "s" : ""}
        </div>
        <div style={s.grid}>
          {items.map((p) => (
            <div key={p.id} style={s.prod}>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#1a1a2e",
                  margin: "0 0 4px",
                }}
              >
                {p.name}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#9090a8",
                  margin: "0 0 12px",
                }}
              >
                {p.desc}
              </p>
              <button style={s.abtn} onClick={() => setCart([...cart, p])}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ ...s.wrap, textAlign: "center", paddingTop: "4rem" }}>
      <div style={{ fontSize: "72px", fontWeight: "700", color: "#e0dff8" }}>
        404
      </div>
      <h1 style={s.h1}>Page Not Found</h1>
      <p style={s.p}>The page you are looking for does not exist.</p>
      <Link
        to="/"
        style={{
          ...s.btn,
          textDecoration: "none",
          display: "inline-block",
          marginTop: "1rem",
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={s.page}>
        <nav style={s.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
