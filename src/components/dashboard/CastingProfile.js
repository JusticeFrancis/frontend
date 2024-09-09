import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  InputBase,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Add, Link, Message } from "@mui/icons-material";

const CastingProfile = () => {
  return (
    <div className="py-12  rounded-md  lg:px-[80px] px-2 ">
      <div className="lg:flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Casting Profile</h2>
      </div>

      <div className="shadow-md px-4 py-3">
        <div className="flex items-center justify-between mb-3 ">
          <h2 className="text-[16px] font-semibold">The Titan Films</h2>
          <div className="flex space-x-3">
            <div className="text-[16px] text-[#1976D2] flex items-center cursor-pointer "> <img src='/edit.png' className="w-[26px] h-[26px] mr-1" /><span className="hidden lg:block">Edit</span></div>
            <div className="text-[16px] text-[#D92D20] flex items-center cursor-pointer "> <img src='/delete.png' className="w-[26px] h-[26px] mr-1"/><span className="hidden lg:block">Delete</span></div>
          </div>
        </div>

        <div className="lg:flex items-start space-x-4">
          <img src="/rec.png" className="lg:w-[250px] w-full h-[230px] py-7 object-cover" />

          <div>
            <div>
              <div className="text-[13px] font-bold text-[#1976D2] mb-1">COMPANY INFORMATION</div>
              <div className="text-[16px] font-bold">Stark Studios</div>
              <div className="text-[14px] lg:w-[500px]">
                Titan Films is seeking dynamic and diverse talent for Shadow
                Warriors, a ground-breaking sci-fi action movie. We're casting
                lead and supporting roles for a high-intensity, futuristic
                storyline where rebels battle an authoritarian regime. We’re
                looking for strong, charismatic actors with martial arts
                experience, as well as a range of background performers to bring
                this dystopian world to life. This is your chance to be part of
                a bold new adventure in action cinema!
              </div>
            </div>

            <div>
              <div className="text-[13px] font-bold text-[#1976D2] mb-1 mt-7">CONTACT INFORMATION</div>

              <div className="mb-2">
                <div className="text-[15px] font-semibold">Phone Number</div>
                <div className="text-[13px]">19203023923</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">Email</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
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
                startIcon={<img src='/message.png' className="w-[15px] " />}
              >
                Send a message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastingProfile;
