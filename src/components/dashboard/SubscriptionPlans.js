import React from "react";
import { Button, Card, CardContent, Typography, Tooltip } from "@mui/material";
import CreditPack from "../../elements/CreditPack";
import SubscriptionPlan from "../../elements/SubscriptionPlan";

const SubscriptionPlans = () => {
  return (
    <div className="lg:px-[120px] px-2 py-4">
      <div className=" text-[28px] font-bold py-4 ">
        <div>Subscription plan</div>
      </div>

      <div className=" min-h-screen bg-gray-50 ">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <SubscriptionPlan />
          </div>
          {/* Credit Packs */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Messaging Packs */}
            <CreditPack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
