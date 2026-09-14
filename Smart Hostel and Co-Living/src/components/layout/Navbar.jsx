import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "var(--primary-color)",
        padding: "12px 20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <span style={{ color: "white", fontWeight: "bold", marginRight: "20px" }}>
        SmartStay
      </span>
      <Link to="/payments" style={{ color: "white" }}>
        My Bills
      </Link>
      <Link to="/payments/history" style={{ color: "white" }}>
        Payment History
      </Link>
      <Link to="/vendor" style={{ color: "white" }}>
        Vendor Dashboard
      </Link>
      <Link to="/vendor/register" style={{ color: "white" }}>
        Vendor Registration
      </Link>
      <Link to="/finance/payments" style={{ color: "white" }}>
        Finance
      </Link>
    </nav>
  );
}

export default Navbar;
