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

const CreditPurchase = () => {
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

      <div className="flex justify-center lg:divide-x-2 ">
        <div className=" lg:w-[600px] w-full lg:shadow-md  px-4 py-7">
          <div className="text-[20px] mb-4 font-[500] "> Credit purchase</div>

          <div className="mb-4">
                <FormControl fullWidth variant="outlined">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    variant="body1"
                    gutterBottom
                  >
                    PACK TYPE
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

              <div className="mb-4">
                <FormControl fullWidth variant="outlined">
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    variant="body1"
                    gutterBottom
                  >
                    NUMBER OF CREDITS
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



              <div className="flex space-x-4 mt-3">
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

export default CreditPurchase;
