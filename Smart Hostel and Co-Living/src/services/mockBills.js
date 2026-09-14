// Temporary mock data - will be replaced by real API calls to
// GET /api/bills/student/:studentId once the backend is ready.

const mockBills = [
  {
    _id: "bill001",
    billType: "Monthly Fee",
    amount: 15000,
    dueDate: "2026-09-30",
    lateFee: 0,
    billingPeriod: "September 2026",
    status: "pending",
  },
  {
    _id: "bill002",
    billType: "Utility Charge",
    amount: 3200,
    dueDate: "2026-09-10",
    lateFee: 500,
    billingPeriod: "September 2026",
    status: "overdue",
  },
  {
    _id: "bill003",
    billType: "Semester Fee",
    amount: 45000,
    dueDate: "2026-08-15",
    lateFee: 0,
    billingPeriod: "Semester 1",
    status: "paid",
  },
  {
    _id: "bill004",
    billType: "Damage Charge",
    amount: 2000,
    dueDate: "2026-09-20",
    lateFee: 0,
    billingPeriod: "September 2026",
    status: "failed",
  },
  {
    _id: "bill005",
    billType: "Late Fee",
    amount: 1000,
    dueDate: "2026-08-01",
    lateFee: 0,
    billingPeriod: "August 2026",
    status: "refunded",
  },
];

export function getBillById(billId) {
  return mockBills.find((bill) => bill._id === billId);
}

export default mockBills;
