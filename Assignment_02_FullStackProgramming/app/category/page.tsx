import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Barrier Reef 158 Jet TV Spa", desc: "Extra Large 8 Person TV-Home Theater Spa System with 158 jets", price: "$4,899.00", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=130&fit=crop" },
  { name: "Premium 5-7 Person Spa", desc: "Luxury hot tub with advanced jet system and LED lighting", price: "$3,299.00", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&h=130&fit=crop" },
  { name: "TV Theater Ultimate Spa", desc: "Built-in entertainment system with 4K display and surround sound", price: "$5,499.00", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=130&fit=crop" },
  { name: "Corner Portable Spa", desc: "Space-saving corner design with 90 jets and 6 person capacity", price: "$2,899.00", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=200&h=130&fit=crop" },
  { name: "XS SCYBA X SERUES 119", desc: "The goods of our stores are very reliable and due we care about the customer", price: "$500.00", img: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?w=200&h=130&fit=crop" },
  { name: "Deep Soak 4 Person Spa", desc: "Extra deep design for full body immersion with hydrotherapy jets", price: "$1,999.00", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=130&fit=crop" },
];

export default function CategoryPage() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> Catagory
          </div>
        </div>
        <div className="page-wrapper">
          <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 20 }}>
            {/* SIDEBAR */}
            <div className="sidebar">
              <div className="page-title">Shopping Options</div>
              <h6>SEATING CAPACITY</h6>
              <ul>
                <li><a href="#" className="active">2 - 4 PEOPLE</a></li>
                <li><a href="#">5 - 7 PEOPLE</a></li>
                <li><a href="#">8 PEOPLE AND MORE</a></li>
              </ul>
              <h6>CHOOSE SIZES</h6>
              <ul>
                <li><a href="#">5 - 6 FEET LONG</a></li>
                <li><a href="#">6 - 7 FEET LONG</a></li>
                <li><a href="#">7 - 8 FEET LONG</a></li>
                <li><a href="#">8 FEET TO LARGE SIZE</a></li>
              </ul>
              <h6>SPAS BY TYPE</h6>
              <ul>
                <li><a href="#">PLUG AND PLAY 110 VOLT</a></li>
                <li><a href="#">TV - STERIO SPAS</a></li>
                <li><a href="#">CORNER SPAS</a></li>
                <li><a href="#">PORTABLE SPAS</a></li>
                <li><a href="#">DEEPER SPAS</a></li>
              </ul>
              <h6>PRICE RANGES FROM</h6>
              <ul>
                <li><a href="#">UNDER $3,000</a></li>
                <li><a href="#">$3,000 TO 4,000</a></li>
                <li><a href="#">$4,000 TO 5,000</a></li>
                <li><a href="#">$5,000 TO 6,000</a></li>
                <li><a href="#">$6,000 +</a></li>
              </ul>
            </div>
            {/* PRODUCTS */}
            <div>
              <div className="products-header">
                <span>Items 1-{products.length} of {products.length}</span>
                <select>
                  <option>Position</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low</option>
                  <option>Name</option>
                </select>
              </div>
              <div className="product-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
                {products.map((p, i) => (
                  <ProductCard key={i} {...p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
