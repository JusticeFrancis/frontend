import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  InputBase,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, InfoOutlined } from "@mui/icons-material";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const [industry, setIndustry] = React.useState("");

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className=" flex justify-center ">
    
      <div className=" lg:w-[900px] flex justify-center lg:pr-10 lg:px-0  my-auto relative">
        <div className=" w-fit p-6 bg-white  rounded-md lg:my-10 my-5 ">

            <div className="underline text-[14px] text-[#1976D2] font-[600] absolute top-15 cursor-pointer left-4 ">Back</div>
          <h2 className="text-2xl font-semibold text-center mb-2">
          Forgot
            <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
            {" "} Password
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
          Fill your information to access your dashboard. 
          </p>

          <form>
            

           

            {/* Email Address Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <InputBase
                fullWidth
                type="email"
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            
           



            



           


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
                  width: "200px",
                }}
              >
              Submit
              </Button>
            </div>
            <p className="text-center mt-4 text-sm ">
           Cancel
             
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
