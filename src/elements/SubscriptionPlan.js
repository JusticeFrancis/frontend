import React from "react";
import { Button, Tooltip, IconButton, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Check } from "@mui/icons-material";

const SubscriptionPlan = () => {
  return (
    <div className="py-6   bg-white rounded-md shadow-md w-full h-fit ">
      <div className="  flex justify-center space-x-2 items-center mb-4 px-6">
        <div className=" text-[14px] font-semibold  ">
          <div>Basic plan(Casting Subscription)</div>
          <div>
            $160 / <span className="text-[#8A8A8A]">month</span>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="bg-gradient-to-r from-[#000000] to-[#000000] text-white border-b-2 "
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            py: 1,
            px: 3,
          }}
        >
          Subscribe
        </Button>
      </div>

      <Divider />
      <div className="space-y-1  text-[14px] py-1 px-4  ">
        <div className="flex items-center space-x-1">
          <span>
            {" "}
            <Check sx={{ color: "green", fontSize: "20px", position:'relative', bottom: 2 }} /> Post 1 casting
            notice.
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <span>
            {" "}
            <Check sx={{ color: "green", fontSize: "20px", position:'relative', bottom: 2 }} /> Post 1 casting
            notice.
          </span>
        </div>

      

      </div>
    </div>
  );
};

export default SubscriptionPlan;
