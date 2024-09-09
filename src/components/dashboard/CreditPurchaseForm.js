import { InfoOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
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

const CreditPurchaseForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [industry, setIndustry] = React.useState("");

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <div className="lg:px-[120px] lg:py-[40px] py-4 px-2">
      <div className=" text-[28px] font-bold py-4 ">
        <div>Review credit purchase</div>
      </div>

      <div className="lg:grid grid-cols-3 gap-4 lg:divide-x-2 lg:shadow-md">
        <div className="col-span-2  px-4 py-7">
          <div className="text-[20px] mb-4 font-[500] "> Card details</div>

          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CARD NUMBER
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

            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  FIRST NAME
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LAST NAME
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EXPIRATION MONTH
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EXPIRATION YEAR
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SECURITY CODE
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="text-[20px] mb-4 font-[500] "> Billing address</div>

          <div className="space-y-4">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <FormControl fullWidth variant="outlined">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    variant="body1"
                    gutterBottom
                  >
                    COUNTRY
                  </label>
                  <Select
                    value={industry}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      border: "0.3px solid gray",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Regular border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Hover state border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Remove focus border color
                      },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "transparent", // Hover border color
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "transparent", // Remove focus border color
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

              {/* Last Name Input */}
              <div className="mb-4">
                <FormControl fullWidth variant="outlined">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    variant="body1"
                    gutterBottom
                  >
                    STATE
                  </label>
                  <Select
                    value={industry}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      border: "0.3px solid gray",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Regular border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Hover state border color
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent", // Remove focus border color
                      },
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "transparent", // Hover border color
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "transparent", // Remove focus border color
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
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ADDRESS
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
                  PHONE NUMBER
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  COMPANY NAME (OPTIONAL)
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CITY
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIPCODE
                </label>
                <InputBase
                  fullWidth
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="text-sm flex items-center">
              <Switch sx={{ color: "#1976D2" }} /> Save details for later
              <IconButton size="small">
                <InfoOutlined sx={{ color: "#1976D2", fontSize: "15px" }} />
              </IconButton>
            </div>

            <div className="text-sm flex items-center">
              <Switch sx={{ color: "#1976D2" }} /> Auto-renewal
              <IconButton size="small">
                <InfoOutlined sx={{ color: "#1976D2", fontSize: "15px" }} />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="col-span-1  px-4 py-7">
          <div className="text-[20px] mb-2 font-[500] "> Credit Pack</div>

          <div className="mb-1 text-[17px] font-[600]">
            Breakdown notice pack
          </div>
          <div className="mb-5 mt-2">
          5credits for $200 
          </div>

          <div>
            <label className="block text-[14px] font-medium text-gray-700 mb-1">
              COUPON CODE
            </label>
            <div className="flex items-center w-full  space-x-4">
              <div className="w-full">
                <InputBase
                  fullWidth
                  required
                  sx={{width:'100%'}}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
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
                  Apply
                </Button>
              </div>
            </div>
          </div>

          <div className="text-[12px] mb-7">
            Don’t have a coupon code?{" "}
            <span className="underline">Contact us</span>
          </div>
          <div className="flex items-center text-[14px] mb-4 justify-between">
            <div>Subtotal</div>
            <div>$160</div>
          </div>

          <div className="flex items-center text-[14px] mb-3  justify-between font-[500]">
            <div>Subtotal</div>
            <div>$160</div>
          </div>

          <div className="text-[14px] mb-3">
            Your personal data will be used to process your order support your
            experience throughout this website, and for other purposes described
            in our 
            <span className="underline">privacy policy</span>.
          </div>

          <div className="mb-1">
            <div className="flex items-center mb-0">
              <input type="checkbox" className="mr-2" required />
              <span className="text-sm">I have read and agree to the website {" "}
              
              <a
                href="#"
                className="text-[#757575] underline cursor-pointer text-sm underline-offset-1"
              >
               terms and conditions
              </a>{" "} </span>
            
            </div>
          </div>

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
              Pay now
            </Button>
          </div>

          <div className="flex justify-center mt-3">
            <Button
              variant=""
              color="primary"
              className="bg-gradient-to-r from-[#fff] to-[#fff] text-black border-b-2 "
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
  );
};

export default CreditPurchaseForm;
