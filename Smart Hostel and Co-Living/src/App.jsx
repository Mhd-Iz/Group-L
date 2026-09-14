import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
