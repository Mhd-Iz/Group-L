// Temporary mock data - will be replaced by real API calls to
// GET /api/payments/student/:studentId once the backend is ready.

const mockPayments = [
  {
    _id: "pay001",
    billId: "bill003",
    billType: "Semester Fee",
    amount: 45000,
    paymentMethod: "Card / Online Payment",
    paymentDate: "2026-08-14",
    referenceNumber: "TXN-1755123456789",
    receiptNumber: "RCPT-0001",
    status: "successful",
  },
  {
    _id: "pay002",
    billId: "bill006",
    billType: "Monthly Fee",
    amount: 15000,
    paymentMethod: "Bank Transfer",
    paymentDate: "2026-08-01",
    referenceNumber: "TXN-1754012345678",
    receiptNumber: "RCPT-0002",
    status: "successful",
  },
  {
    _id: "pay003",
    billId: "bill004",
    billType: "Damage Charge",
    amount: 2000,
    paymentMethod: "Card (Test - Declined)",
    paymentDate: "2026-09-05",
    referenceNumber: "TXN-1757012345678",
    receiptNumber: null,
    status: "failed",
  },
];

export default mockPayments;
