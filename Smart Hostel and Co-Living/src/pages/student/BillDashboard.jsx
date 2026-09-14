import mockBills from "../../services/mockBills.js";
import BillCard from "../../components/payments/BillCard.jsx";

function BillDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Bills</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {mockBills.map((bill) => (
          <BillCard key={bill._id} bill={bill} />
        ))}
      </div>
    </div>
  );
}

export default BillDashboard;
