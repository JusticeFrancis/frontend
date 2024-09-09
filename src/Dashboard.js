import { Routes, Route } from "react-router-dom";
import CastingProfile from "./components/dashboard/CastingProfile";
import CastingProfileForIndustry from "./components/dashboard/CastingProfileForIndustry";
import ChangePassword from "./components/dashboard/ChangePassword";
import CreditHistories from "./components/dashboard/CreditHistories";
import CreditHistory from "./components/dashboard/CreditHistory";
import CreditPurchase from "./components/dashboard/CreditPurchase";
import CreditPurchaseForm from "./components/dashboard/CreditPurchaseForm";
import EditCastingProfile from "./components/dashboard/EditCastingProfile";
import EditIndustryProfile from "./components/dashboard/EditIndustryProfile";
import EditPersonalProfile from "./components/dashboard/EditPersonalProfile";
import IndustryDashboard from "./components/dashboard/IndustryDashboard";
import IndustryProfile from "./components/dashboard/IndustryProfile";
import NoticeDetails from "./components/dashboard/NoticeDetails";
import PerformerProfile from "./components/dashboard/PerformerProfile";
import Performers from "./components/dashboard/Performers";
import PersonalProfile from "./components/dashboard/PersonalProfile";
import PostNotice from "./components/dashboard/PostNotice";
import SubscriptionPlans from "./components/dashboard/SubscriptionPlans";
import SubscriptionPurchase from "./components/dashboard/SubscriptionPurchase";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/industry-dashboard" element={<IndustryDashboard />} />
          <Route path="/industry-profile" element={<IndustryProfile />} />
          <Route path="/edit-industry-profile" element={<EditIndustryProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          

          <Route path="/post-notice" element={<PostNotice />} />
          <Route path="/notice-details" element={<NoticeDetails />} />
          


          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/subscription-purchase" element={<SubscriptionPurchase />} />
          <Route path="/credit-purchases" element={<CreditPurchase />} />
          <Route path="/credit-purchase" element={<CreditPurchaseForm />} />
          <Route path="/credit-histories" element={<CreditHistories />} />
          <Route path="/credit-history" element={<CreditHistory />} />

          <Route path="/casting-profile" element={<CastingProfile />} />
          <Route path="/casting-profile-for-industry" element={<CastingProfileForIndustry />} />
          <Route path="/edit-casting-profile" element={<EditCastingProfile />} />


          <Route path="/performers" element={<Performers />} />
          <Route path="/performer" element={<PerformerProfile />} />


          <Route path="/profile" element={<PersonalProfile />} />
          <Route path="/edit-profile" element={<EditPersonalProfile />} />


         
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
