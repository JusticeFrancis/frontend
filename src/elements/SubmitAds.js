import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Button, InputBase } from "@mui/material";

const SubmitAds = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md ">
      <h2 className="text-lg font-semibold mb-4">Submit ads</h2>

      {/* Featured Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          FEATURED IMAGE
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-md p-6 bg-gray-50 text-center">
          <div className="flex flex-col justify-center items-center space-y-2">
            <CloudUploadOutlinedIcon
              className="text-gray-400"
              fontSize="large"
            />
            <div className="text-blue-500 cursor-pointer">Click to upload</div>
            <p className="text-sm text-gray-400">or drag and drop</p>
            <p className="text-xs text-gray-400">
              Image size: 1584 x 396
              <br />
              Image formats: JPG, JPEG and PNG
            </p>
          </div>
        </div>
      </div>

      {/* Link to Ads */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">LINK TO ADS</label>
        <InputBase
          
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="https://www.abilitye.com"
        />
      </div>

      {/* Publish Button */}
      <div className="text-left">
      <Button
            variant="contained"
            color="primary"
            className="bg-gradient-to-r from-[#000000] to-[#000000] text-white border-b-2 "
            sx={{
                borderRadius: '20px',
                textTransform: "none",
                py:1,
                px:3
            }}
          
          >
            Publish
          </Button>
      </div>
    </div>
  );
};

export default SubmitAds;
