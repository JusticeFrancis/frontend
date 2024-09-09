import React from "react";
import { Button, Tooltip, IconButton, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const CreditPack = () => {
  return (
    <div className="py-6 bg-white rounded-md shadow-md w-full max-w-sm">
      <div className="flex justify-between items-center mb-4 px-6">
        <h2 className="text-lg font-semibold ">
          Message packs
          <Tooltip
            title="You need casting subscription, in order
to purchase this pack."
            arrow
          >
            <IconButton size="small">
              <InfoOutlinedIcon sx={{ color: "#1976D2" }} fontSize="small" />
            </IconButton>
          </Tooltip>
        </h2>
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
          Buy Credits
        </Button>
      </div>
      <div className="space-y-4 text-[14px] ">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center space-x-1">
            <span>5 Credits</span>
          </div>
          <div>
            $50<div></div>
          </div>
        </div>

        <Divider />

        <div className="flex justify-between items-center px-6">
          <div className="flex items-center space-x-1">
            <span>10 Credits</span>
          </div>
          <div>
            $80<div></div>
          </div>
        </div>

        <Divider />

        <div className="flex justify-between items-center px-6">
          <div className="flex items-center space-x-1">
            <span>5 Credits</span>
          </div>
          <div>
            $150<div></div>
          </div>
        </div>

        <Divider />

       

        <div className="flex justify-center">
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
            Buy
          </Button>
        </div>

       
      </div>
    </div>
  );
};

export default CreditPack;
