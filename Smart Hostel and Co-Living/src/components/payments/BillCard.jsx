import { Link } from "react-router-dom";

function BillCard({ bill }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{bill.billType}</h3>
        <span className={`badge badge-${bill.status}`}>{bill.status}</span>
      </div>

      <p>
        <strong>Amount:</strong> Rs. {bill.amount.toLocaleString()}
      </p>
      <p>
        <strong>Billing Period:</strong> {bill.billingPeriod}
      </p>
      <p>
        <strong>Due Date:</strong> {bill.dueDate}
      </p>

      {bill.lateFee > 0 && (
        <p style={{ color: "var(--error-color)" }}>
          <strong>Late Fee:</strong> Rs. {bill.lateFee.toLocaleString()}
        </p>
      )}

      {(bill.status === "pending" ||
        bill.status === "overdue" ||
        bill.status === "failed") && (
        <Link to={`/payments/pay/${bill._id}`}>
          <button type="button" style={{ marginTop: "10px" }}>
            Pay Now
          </button>
        </Link>
      )}
    </div>
  );
}

export default BillCard;
