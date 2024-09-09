import {
  CloudUploadOutlined,
  InfoOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  MenuItem,
  Radio,
  Select,
  Switch,
} from "@mui/material";
import React from "react";

const EditCastingProfile = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [industry, setIndustry] = React.useState("");

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className="lg:px-[120px] lg:py-[40px] py-4 px-2">
      <div className="bg-white">
        <div className="col-span-2  px-4 py-7">
          <div className="relative">
            <div className="text-[20px] mb-4 font-[600] text-center  ">
              {" "}
              Set up your <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
              Casting profile
            </span> 
            </div>
            <div className="absolute lg:top-1   left-4 underline text-blue-500">
              Back
            </div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <div>
              <div className="text-center text-[12px] mb-1">COMPANY LOGO</div>
              <div className="backdrop-blur-lg bg-[#FAFAFA]/60 border-b-[1px] border-b-[#EAECF0]">
                <div className="flex justify-center ">
                  <CloudUploadOutlined
                    className="text-gray-400"
                    fontSize="large"
                  />
                </div>

                <div className="text-blue-500 cursor-pointer">
                  Click to upload
                </div>
                <p className="text-sm text-gray-400">or drag and drop</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CASTING TITLE
              </label>
              <InputBase
                fullWidth
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CASTING NAME
              </label>
              <InputBase
                fullWidth
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EMAIL
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  COMPANY PHONE
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                COMPANY DESCRIPTION
              </label>
              <InputBase
                fullWidth
                multiline
                rows={5}
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              COMPANY PREFERENCES
            </label>

            <div className="space-y-2">
              <div className="text-sm flex items-center">
                <Switch sx={{ color: "#1976D2" }} /> Phone number
              </div>

              <div className="text-sm flex items-center">
                <Switch sx={{ color: "#1976D2" }} /> Email
              </div>

              <div className="text-sm flex items-center">
                <Switch sx={{ color: "#1976D2" }} /> Internal message
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex justify-center mt-3">
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
                Save changes
              </Button>
            </div>

            <div className="flex justify-center mt-3">
              <Button
                variant=""
                color=""
                className="bg-gradient-to-r  text-black border-b-2 "
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  py: 1,
                  px: 3,
                  color: "black",
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCastingProfile;
