function PaymentHistoryItem({ payment }) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{payment.billType}</h3>
        <span
          className={`badge badge-${payment.status === "successful" ? "paid" : payment.status}`}
        >
          {payment.status}
        </span>
      </div>

      <p>
        <strong>Amount:</strong> Rs. {payment.amount.toLocaleString()}
      </p>
      <p>
        <strong>Method:</strong> {payment.paymentMethod}
      </p>
      <p>
        <strong>Date:</strong> {payment.paymentDate}
      </p>
      <p>
        <strong>Reference Number:</strong> {payment.referenceNumber}
      </p>

      {payment.receiptNumber && (
        <p>
          <strong>Receipt Number:</strong> {payment.receiptNumber}
        </p>
      )}
    </div>
  );
}

export default PaymentHistoryItem;
