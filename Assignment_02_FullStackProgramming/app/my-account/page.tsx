import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyAccountPage() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span> My Account
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">User Profile Details</div>
          <div className="form-section account-section">
            <h5>My Orders</h5>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order #</th>
                  <th>Date</th>
                  <th>Ship To</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#100001</td>
                  <td>05/01/2026</td>
                  <td>John Doe</td>
                  <td>$4,899.00</td>
                  <td>Processing</td>
                  <td><a href="#">View Order</a></td>
                </tr>
                <tr>
                  <td>#100002</td>
                  <td>04/15/2026</td>
                  <td>John Doe</td>
                  <td>$3,299.00</td>
                  <td>Delivered</td>
                  <td><a href="#">View Order</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="form-section account-section">
            <h5>Address Book</h5>
            <div className="address-grid">
              <div className="address-box">
                <h6>Default Billing Address</h6>
                <p>John Doe<br />123 Main Street<br />New York, NY 10001<br />United States<br />T: (555) 123-4567</p>
                <div style={{ marginTop: 10 }}>
                  <Link href="/edit-billing" className="btn-red" style={{ fontSize: 11, padding: "5px 12px" }}>Edit Address</Link>
                </div>
              </div>
              <div className="address-box">
                <h6>Default Shipping Address</h6>
                <p>John Doe<br />456 Oak Avenue<br />Los Angeles, CA 90210<br />United States<br />T: (555) 987-6543</p>
                <div style={{ marginTop: 10 }}>
                  <Link href="/edit-shipping" className="btn-red" style={{ fontSize: 11, padding: "5px 12px" }}>Edit Address</Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, fontSize: 12 }}>
            <Link href="/login" style={{ color: "#555" }}>← Back to Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
