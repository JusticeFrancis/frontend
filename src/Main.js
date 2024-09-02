import { Routes, Route } from "react-router-dom";
import IndustryDashboard from "./components/dashboard/IndustryDashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/industry-dashboard" element={<IndustryDashboard />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Main;
