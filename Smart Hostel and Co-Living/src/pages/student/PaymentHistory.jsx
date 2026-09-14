import mockPayments from "../../services/mockPayments.js";
import PaymentHistoryItem from "../../components/payments/PaymentHistoryItem.jsx";

function PaymentHistory() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment History</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {mockPayments.map((payment) => (
          <PaymentHistoryItem key={payment._id} payment={payment} />
        ))}
      </div>
    </div>
  );
}

export default PaymentHistory;
