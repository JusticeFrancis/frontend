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

const IndustryProfile = () => {
  return (
    <div className="py-12  rounded-md  lg:px-[80px] px-2 ">
      <div className="lg:flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Industry Profile</h2>
      </div>

      <div className="shadow-md px-4 py-3">
        <div className="flex items-center justify-between mb-3 ">
          <h2 className="text-[16px] font-semibold">My Company</h2>
          <div className="flex space-x-3">
            <div className="text-[16px] text-[#1976D2] flex items-center cursor-pointer ">
              {" "}
              <img src="/edit.png" className="w-[26px] h-[26px] mr-1" />
              <span className="hidden lg:block">Edit</span>
            </div>
          </div>
        </div>

        <div className=" space-y-4">
          <div>
            <div className="text-[13px] font-bold text-[#1976D2] mb-1 mt-7">
              PERSONAL INFORMATION
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <div className="text-[15px] font-semibold">Display name</div>
                <div className="text-[13px]">19203023923</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">Email</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">First name</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">Last name</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>
              <div className="mb-4">
                <div className="text-[15px] font-semibold">Phone number</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">
                  Password{" "}
                  <span className="text-blue-400 text-[13px] ml-4 cursor-pointer">change</span>{" "}
                </div>
                <div className="text-[13px]">**********</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[13px] font-bold text-[#1976D2] mb-1 mt-7">
              COMPANY INFORMATION
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-2">
                <div className="text-[15px] font-semibold">
                  Company name or DBA
                </div>
                <div className="text-[13px]">19203023923</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">Company website</div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">
                  Physical business address
                </div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4"></div>
              <div className="mb-4">
                <div className="text-[15px] font-semibold">
                  Business License/IMDb/LinkedIn/EIN #/Otherr
                </div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>


              <div className="mb-4"></div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">
                  Studio Affiliation
                </div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>

              <div className="mb-4">
                <div className="text-[15px] font-semibold">
                  Studio Contact (referred by)
                </div>
                <div className="text-[13px]">starkstudios@abilityE.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryProfile;
