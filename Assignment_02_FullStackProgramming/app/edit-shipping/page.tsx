import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddressForm from "@/components/AddressForm";

export default function EditShippingPage() {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="page-breadcrumb">
          <div style={{ padding: "0 14px" }}>
            <Link href="/">Home</Link> <span>›</span>
            <Link href="/my-account">My Account</Link> <span>›</span> Edit Shipping Address
          </div>
        </div>
        <div className="page-wrapper">
          <div className="page-title">Edit Shipping Address</div>
          <div className="form-section">
            <h5>Shipping Address Details</h5>
            <p>Please update your shipping address information below.</p>
            <AddressForm title="Shipping address" formId="shippingForm" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
