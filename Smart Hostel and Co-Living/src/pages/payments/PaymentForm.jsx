import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBillById } from "../../services/mockBills.js";

const paymentMethods = [
  { id: "card", label: "Card / Online Payment", outcome: "successful" },
  { id: "bank", label: "Bank Transfer", outcome: "pending" },
  { id: "cash", label: "Cash (Pay at Office)", outcome: "pending" },
  {
    id: "card_declined_test",
    label: "Card (Test - Declined)",
    outcome: "failed",
  },
];

function PaymentForm() {
  const { billId } = useParams();
  const bill = getBillById(billId);

  const [selectedMethod, setSelectedMethod] = useState("");
  const [result, setResult] = useState(null);

  if (!bill) {
    return (
      <div className="card">
        <h2>Bill not found</h2>
        <p>We couldn't find a bill with ID "{billId}".</p>
        <Link to="/payments">Back to My Bills</Link>
      </div>
    );
  }

  function handleConfirmPayment(e) {
    e.preventDefault();
    const method = paymentMethods.find((m) => m.id === selectedMethod);
    if (!method) return;

    setResult({
      status: method.outcome,
      referenceNumber: "TXN-" + Date.now(),
      paymentDate: new Date().toISOString().split("T")[0],
      methodLabel: method.label,
    });
  }

  if (result) {
    return (
      <div className="card">
        <h2>Payment {result.status}</h2>
        <span
          className={`badge badge-${result.status === "successful" ? "paid" : result.status}`}
        >
          {result.status}
        </span>

        <p>
          <strong>Bill:</strong> {bill.billType}
        </p>
        <p>
          <strong>Amount:</strong> Rs. {bill.amount.toLocaleString()}
        </p>
        <p>
          <strong>Method:</strong> {result.methodLabel}
        </p>
        <p>
          <strong>Reference Number:</strong> {result.referenceNumber}
        </p>
        <p>
          <strong>Date:</strong> {result.paymentDate}
        </p>

        {result.status === "pending" && (
          <p style={{ color: "var(--warning-color)" }}>
            Your payment is awaiting verification by finance staff.
          </p>
        )}
        {result.status === "failed" && (
          <p style={{ color: "var(--error-color)" }}>
            The payment could not be processed. Please try again.
          </p>
        )}

        <Link to="/payments">
          <button type="button" style={{ marginTop: "10px" }}>
            Back to My Bills
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Make a Payment</h2>

      <p>
        <strong>Bill:</strong> {bill.billType}
      </p>
      <p>
        <strong>Amount Due:</strong> Rs.{" "}
        {(bill.amount + bill.lateFee).toLocaleString()}
      </p>
      <p>
        <strong>Billing Period:</strong> {bill.billingPeriod}
      </p>

      <form onSubmit={handleConfirmPayment}>
        <label htmlFor="payment-method">
          <strong>Payment Method</strong>
        </label>
        <br />
        <select
          id="payment-method"
          value={selectedMethod}
          onChange={(e) => setSelectedMethod(e.target.value)}
          required
          style={{ margin: "8px 0", padding: "6px" }}
        >
          <option value="" disabled>
            Select a payment method
          </option>
          {paymentMethods.map((m) => (
            <option key={m.id} value={m.id}>
              {m.label}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" disabled={!selectedMethod}>
          Confirm Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
