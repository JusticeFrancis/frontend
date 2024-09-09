import React from "react";
import { Button, IconButton } from "@mui/material";
import { Email } from "@mui/icons-material";

const PersonalProfileDetails = () => (
  <div className="bg-white p-6 rounded-lg border-[1px] border-[#EAE2F0] w-full   ">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-xl font-semibold text-[#262626] mb-4">
        My  profile
      </h2>
      <div className="text-[16px] text-[#1976D2] flex items-center cursor-pointer "> <img src='/edit.png' className="w-[26px] h-[26px] mr-1" /><span className="hidden lg:block">Edit</span></div>
    </div>

    <div className="lg:grid lg:grid-cols-4 gap-5">
      {/* Section: User Images */}
      <div className="grid grid-cols-2 gap-2 mb-4 h-fit">
        <div className="col-span-2">
          <img
            src="/user23.png"
            alt="Performer"
            className="w-full h-[200px] rounded object-cover mb-2"
          />
        </div>
      </div>

      <div className="col-span-3">
        {/* Section: Stage Information */}
        <div className="uppercase text-xs font-semibold text-[#1976D2] mb-2">
          PERSONAL INFORMATION
        </div>

        <div className="text-sm font-semibold text-[#262626] col-span-2">
          Nickname
        </div>
        <div className="text-sm text-[#262626]">Ricky A</div>
       

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="text-sm font-semibold text-[#262626]">First name</div>
            <div className="text-sm text-[#262626] mb-2">Richard</div>
            <div className="text-sm font-semibold text-[#262626]">
              Date of Birth
            </div>
            <div className="text-sm text-[#262626] mb-2">
            February 9, 2000
            </div>
            <div className="text-sm font-semibold text-[#262626]">Password <span className="text-[#1976D2] cursor-pointer">change</span> </div>
            <div className="text-sm text-[#262626] mb-2">
             *************
            </div>
            
          </div>

          <div className="">
            <div className="text-sm font-semibold text-[#262626]">
             Last Name
            </div>
            <div className="text-sm text-[#262626] mb-2">Allen</div>
            <div className="text-sm font-semibold text-[#262626]">Email</div>
            <div className="text-sm text-[#262626] mb-2">RickyAA@gmail.com</div>
          </div>
        </div>

        {/* Section: Authentic Information */}
        
      </div>
    </div>
  </div>
);

const PersonalProfile = () => (
  <div className="p-4 lg:p-8 lg:px-[50px]">
    <div className="flex justify-between items-center mb-6 ">
      <h1 className="text-2xl font-semibold text-[#262626]">
        Performer profile
      </h1>
    </div>
    <PersonalProfileDetails />
  </div>
);

export default PersonalProfile;
