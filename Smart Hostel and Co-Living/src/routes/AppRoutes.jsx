import BillDashboard from "../pages/student/BillDashboard.jsx";
import PaymentHistory from "../pages/student/PaymentHistory.jsx";
import PaymentForm from "../pages/payments/PaymentForm.jsx";
import VendorDashboard from "../pages/vendor/VendorDashboard.jsx";
import VendorRegister from "../pages/vendor/VendorRegister.jsx";
import FinanceDashboard from "../pages/finance/FinanceDashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/payments" replace />} />
      {/* Student payment views */}
      <Route path="/payments" element={<BillDashboard />} />
      <Route path="/payments/history" element={<PaymentHistory />} />
      <Route path="/payments/pay/:billId" element={<PaymentForm />} />

      {/* Vendor views */}
      <Route path="/vendor" element={<VendorDashboard />} />
      <Route path="/vendor/register" element={<VendorRegister />} />

      {/* Finance staff views */}
      <Route path="/finance/payments" element={<FinanceDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
