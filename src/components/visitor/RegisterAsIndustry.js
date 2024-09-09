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

const RegisterAsIndustry = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);


    const [industry, setIndustry] = React.useState('');

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className=" grid lg:grid-cols-4 ">
      <div className="col-span-2 hidden lg:block">
        <img src="/register.png" />
      </div>
      <div className="col-span-2 w-full lg:pr-10 lg:px-0 ">
        <div className=" w-full p-6 bg-white  rounded-md lg:my-10 my-5">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Sign Up as a{" "}
            <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
              Industry
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Thank you for your interest in abilityE, and your efforts to
            authentically cast. We are a non-profit working to increase
            disability engagement in the entertainment industry. Learn about{" "}
            <a href="#" className="cursor-pointer underline">
              Authenticity in Entertainment
            </a>
            .
          </p>

          <form>
            {/* Nickname Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nickname   <InfoOutlined />
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

            <div className="grid lg:grid-cols-2 gap-4">
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

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <InputBase
                  fullWidth
                  type="tel"
                  required
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* Company Name or DBA Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name or DBA
                </label>
                <InputBase
                  fullWidth
                  required
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Company Website Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Website
                </label>
                <InputBase
                  fullWidth
                  placeholder="example: https://mycompany.com"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Business License/IMDB/LinkedIn/EIN#/Other Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business License/IMDB/LinkedIn/EIN#/Other
              </label>
              <InputBase
                fullWidth
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Industry Type Input */}
            <div className="mb-4">
            <FormControl fullWidth variant="outlined">
      <label className="block text-sm font-medium text-gray-700 mb-1" variant="body1" gutterBottom>
        Industry Type
      </label>
      <Select
        value={industry}
        onChange={handleChange}
        displayEmpty
        sx={{
            border:'0.3px solid gray',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Regular border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Hover state border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Remove focus border color
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'transparent', // Hover border color
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove focus border color
            },
          },
        }}
      >
        <MenuItem value="">
          <em>-- not set --</em>
        </MenuItem>
        <MenuItem value="Film">Film</MenuItem>
        <MenuItem value="Television">Television</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        <MenuItem value="Theater">Theater</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
            </div>

            {/* Physical Business Address Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Physical Business Address
              </label>
              <InputBase
                fullWidth
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* Studio Affiliation Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Studio Affiliation
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Studio Contact (Referred By) Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Studio Contact (Referred By)
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Goal in Joining abilityE Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your goal in joining abilityE?
              </label>
              <InputBase
                fullWidth
                multiline
                rows={3}
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
            <div className="mb-4">
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

            {/* Agreement Checkbox */}
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-2">
                Please read before proceeding
                <br />
                All talent and user profile content, videos, images and other
                miscellaneous content on abilityE.com is copyrighted and
                proprietary and may not be downloaded, stored, copied or shared
                in any form outside of abilityE.com without express written
                permission from abilityE.
              </p>
              <div className="flex items-center mb-0">
                <input type="checkbox" className="mr-2" required />
                <span className="text-sm">
                  I have read and agree. 
                 
                </span>
              </div>
              <div className="mb-4 pl-5">
              <a
                    href="#"
                    className="text-[#757575] underline cursor-pointer text-[20px] underline-offset-1"
                  >
                    Privacy Policy
                  </a>{" "}
                  <span className="text-[#757575] underline-offset-1  cursor-pointer text-[20px]">
                    and
                  </span>{" "}
                  <a
                    href="#"
                    className="text-[#757575] underline cursor-pointer text-[20px]"
                  >
                    Terms of Use Confirmation
                  </a>
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

export default RegisterAsIndustry;
