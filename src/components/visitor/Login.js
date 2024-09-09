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

const Login = () => {
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
    <div className=" grid lg:grid-cols-4 ">
      <div className="col-span-2 hidden lg:block">
        <img src="/register2.png" />
      </div>
      <div className="col-span-2 w-full lg:pr-10 lg:px-0  my-auto">
        <div className=" w-full p-6 bg-white  rounded-md lg:my-10 my-5">
          <h2 className="text-2xl font-semibold text-center mb-2">
           Welcome back to 
            <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
            {" "} abilityE
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

            
            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <InputBase
                fullWidth
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="text-right text-[#1976D2] text-[14px] my-2">
                Forgot Password?
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
                Log In
              </Button>
            </div>
            <p className="text-center mt-4 text-sm">
            I don’t have an account 
              <a href="#" className="text-blue-600">
              Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
