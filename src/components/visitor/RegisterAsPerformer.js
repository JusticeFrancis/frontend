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

const RegisterAsPerformer = () => {
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
      <div className="col-span-2 w-full lg:pr-10 lg:px-0 ">
        <div className=" w-full p-6 bg-white  rounded-md lg:my-10 my-5">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Sign Up as a{" "}
            <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
              Performer
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome to abilityE, enter your information to register. 
          </p>

          <form>
            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Nickname Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nickname
                <InfoOutlined />
              </label>
              <InputBase
                fullWidth
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

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

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                variant="body1"
                gutterBottom
              >
                Date of Birth <InfoOutlined />
              </label>
              <InputBase
                fullWidth
                type="date"
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

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <InputBase
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword}>
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>



            <div className="">
            <label className="block text-sm  text-gray-700 mb-3  text-[16px] font-bold">
            Parent / Guardian details
              </label>


               {/* Nickname Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                FULLNAME
              </label>
              <InputBase
                fullWidth
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
                 PHONE NUMBER
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            </div>



           

            {/* Agreement Checkbox */}
            <div className="mt-4">
              <div className="mb-1">
                <div className="flex items-center mb-0">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">
                    I have one or more disabilities.
                  </span>
                </div>
                <div className="mb-4 pl-5">
                  <span className="text-[#757575] underline-offset-1  cursor-pointer text-[16px]">
                    I hereby affirm that I am a Person with a Disability as
                    defined by the 
                  </span>{" "}
                  <a
                    href="#"
                    className="text-[#757575] underline cursor-pointer text-[16px]"
                  >
                    ADA - Americans with Disabilities Act.
                  </a>
                </div>

               
              </div>

              <div className="mb-1">
                  <div className="flex items-center mb-0">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm">I have read and agree.</span>
                  </div>
                  <div className="mb-4 pl-5">
                    <a
                      href="#"
                      className="text-[#757575] underline cursor-pointer text-[16px] underline-offset-1"
                    >
                      Privacy Policy
                    </a>{" "}
                    <span className="text-[#757575] underline-offset-1  cursor-pointer text-[16px]">
                      and
                    </span>{" "}
                    <a
                      href="#"
                      className="text-[#757575] underline cursor-pointer text-[16px]"
                    >
                      Terms of Use Confirmation
                    </a>
                  </div>
                </div>


                <div className="mb-1">
                <div className="flex items-center mb-0">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">
                  Keep me up to date
                  </span>
                </div>
                <div className="mb-4 pl-5">
                  <span className="text-[#757575] underline-offset-1  cursor-pointer text-[16px]">
                  Subscribe for announcements
                  </span>{" "}
                  
                </div>

               
              </div>
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
                Sign Up
              </Button>
            </div>
            <p className="text-center mt-4 text-sm">
              I have already have an account{" "}
              <a href="#" className="text-blue-600">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsPerformer;
