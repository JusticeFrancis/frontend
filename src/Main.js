import { Routes, Route } from "react-router-dom";
import IndustryDashboard from "./components/dashboard/IndustryDashboard";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import VisitorHeader from "./components/layout/VisitorHeader";
import ForgotPassword from "./components/visitor/ForgotPassword";
import Login from "./components/visitor/Login";
import Notices from "./components/visitor/Notices";
import RegisterAsIndustry from "./components/visitor/RegisterAsIndustry";
import RegisterAsPerformer from "./components/visitor/RegisterAsPerformer";

function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      <VisitorHeader />
      <div className="flex-grow">
        <Routes>
          <Route path="/register-as-industry" element={<RegisterAsIndustry />} />
          <Route path="/register-as-performer" element={<RegisterAsPerformer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Main;
