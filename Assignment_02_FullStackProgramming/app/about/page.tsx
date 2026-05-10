import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
  { name: "Jennifer Lawrence", role: "Business Consultant", img: "https://placehold.co/300x200/cccccc/ffffff?text=Team+Member" },
  { name: "Michael Anderson", role: "Lead Engineer", img: "https://placehold.co/300x200/cccccc/ffffff?text=Team+Member" },
  { name: "Sarah Johnson", role: "Customer Relations", img: "https://placehold.co/300x200/cccccc/ffffff?text=Team+Member" },
  { name: "David Williams", role: "Sales Manager", img: "https://placehold.co/300x200/cccccc/ffffff?text=Team+Member" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> About Us
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">About Us</div>
          <div className="form-section">
            <div className="about-content">
              <h4>Welcome to the Company</h4>
              <img src="https://placehold.co/300x200/cccccc/ffffff?text=Spa+Showroom" alt="Spa Showroom"
                className="about-img" style={{ width: 200, height: 140, objectFit: "cover" }} />
              <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
              condimentum sit amet a augue. Sed non neque elit.</p>
              <p style={{ marginTop: 10 }}>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
            </div>

            <div style={{ clear: "both" }}></div>
            <hr style={{ margin: "16px 0" }} />

            <div className="about-content">
              <h4>Our Company members</h4>
              <p>This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
              accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
            </div>

            <div className="team-grid" style={{ marginTop: 12 }}>
              {team.map((m, i) => (
                <div key={i} className="team-card">
                  <img src={m.img} alt={m.name} />
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                  <div className="bio">This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit auctor.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
