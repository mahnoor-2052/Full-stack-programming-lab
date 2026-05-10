import Link from "next/link";

interface ProductCardProps {
  name: string;
  desc: string;
  price: string;
  img: string;
}

export default function ProductCard({ name, desc, price, img }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="prod-img">
        <img src={img} alt={name} />
      </div>
      <div className="prod-name">{name}</div>
      <div className="prod-desc">{desc}</div>
      <div className="prod-price">{price}</div>
      <button className="btn-cart"><i className="fas fa-shopping-cart"></i> ADD TO CART</button>
      <div className="prod-links">
        <a href="#">ADD TO WISH LIST</a>
        <Link href="/product-detail">MORE DETAILS</Link>
      </div>
    </div>
  );
}
