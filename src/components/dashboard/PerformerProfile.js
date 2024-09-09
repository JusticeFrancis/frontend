import React from "react";
import { Button, IconButton } from "@mui/material";
import { Email } from "@mui/icons-material";

const PerformerProfileDetails = () => (
  <div className="bg-white p-6 rounded-lg border-[1px] border-[#EAE2F0] w-full   ">
    <div className="lg:flex items-center justify-between mb-2">
      <h2 className="text-xl font-semibold text-[#262626] mb-4">
        My stage profile
      </h2>
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
        startIcon={<img src="/message.png" className="w-[15px] " />}
      >
        Send a message
      </Button>
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

        <img
          src="/user23.png"
          alt="Performer"
          className="w-full rounded object-cover mb-2"
        />
        <img
          src="/user23.png"
          alt="Performer"
          className="w-full rounded object-cover mb-2"
        />

        <img
          src="/user23.png"
          alt="Performer"
          className="w-full rounded object-cover mb-2"
        />
        <img
          src="/user23.png"
          alt="Performer"
          className="w-full rounded object-cover"
        />
      </div>

      <div className="col-span-3">
        {/* Section: Stage Information */}
        <div className="uppercase text-xs font-semibold text-[#1976D2] mb-2">
          Stage Information
        </div>

        <div className="text-sm font-semibold text-[#262626] col-span-2">
          Nickname
        </div>
        <div className="text-sm text-[#262626]">Ricky A</div>
        <div className="text-sm font-semibold text-[#262626] mt-2">
          About me
        </div>
        <div className="text-sm text-[#262626] mb-3">
          I am talented and musical
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="text-sm font-semibold text-[#262626]">Location</div>
            <div className="text-sm text-[#262626] mb-2">NY, United States</div>
            <div className="text-sm font-semibold text-[#262626]">
              Performer Type
            </div>
            <div className="text-sm text-[#262626] mb-2">
              Actor, Voice-over Artist
            </div>
            <div className="text-sm font-semibold text-[#262626]">Race</div>
            <div className="text-sm text-[#262626] mb-2">
              Middle Eastern, White / European Descent
            </div>
            <div className="text-sm font-semibold text-[#262626]">
              Languages
            </div>
            <div className="text-sm text-[#262626] mb-2">English</div>
            <div className="text-sm font-semibold text-[#262626] ">
              Representation
            </div>
            <div className="text-sm text-[#262626] mb-2">No Agent/Manager</div>
          </div>

          <div className="">
            <div className="text-sm font-semibold text-[#262626]">
              Age Range
            </div>
            <div className="text-sm text-[#262626] mb-2">43-57</div>
            <div className="text-sm font-semibold text-[#262626]">Gender</div>
            <div className="text-sm text-[#262626] mb-2">Male</div>
            <div className="text-sm font-semibold text-[#262626]">
              Ethnicity
            </div>
            <div className="text-sm text-[#262626] mb-2">Mediterranean</div>
            <div className="text-sm font-semibold text-[#262626]">Union</div>
            <div className="text-sm text-[#262626] mb-2">SAG-AFTRA</div>
          </div>
        </div>

        {/* Section: Authentic Information */}
        <div className="uppercase text-xs font-semibold text-[#1976D2] mt-4 mb-2">
          I Authentically Can...
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="text-sm font-semibold text-[#262626]">
              Disability Type
            </div>
            <div className="text-sm text-[#262626] mb-2">
              Amputee / Limb Difference
            </div>
            <div className="text-sm font-semibold text-[#262626]">
              Disability Description
            </div>
            <div className="text-sm text-[#262626] mb-2">
              I lost my legs to flesh-eating disease
            </div>
            <div className="text-sm font-semibold text-[#262626]">
              Skills/Talents
            </div>
            <div className="text-sm text-[#262626] mb-2">
              Acting, voice over, camera
            </div>
            <div className="text-sm font-semibold text-[#262626]">
              Experience/Highlights
            </div>
            <div className="text-sm text-[#262626] mb-2">
              'Intent Unknown' - Role: Harold Pointer (principal), Feature
              Length Film with Eric Roberts
              <br />
              'Chicago P.D. S7E4 Infection Part III' - Role: Security Guard 1
              (principal), NBCUniversal
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-[#262626]">
              Specific Disability Type
            </div>
            <div className="text-sm text-[#262626] mb-2">
              Amputee Leg, Amputee Double
            </div>
            <div className="text-sm font-semibold text-[#262626]">Devices</div>
            <div className="text-sm text-[#262626] mb-2">
              I authentically use... prosthetic legs
            </div>
            <div className="text-sm font-semibold text-[#262626]">
              Education/Training
            </div>
            <div className="text-sm text-[#262626] mb-2">
              Second City Chicago - Voice Over
            </div>
          </div>
        </div>

        <div className="uppercase text-xs font-semibold text-[#D92D20] mt-4 mb-2">
          important information
        </div>
        <div className="text-[14px]">
          All talent profile content, videos, images and other miscellaneous
          content on abilityE.com is copyrighted and proprietary and may not be
          downloaded, stored, copied or shared in any form outside of
          abilityE.com without express written permission from abilityE.
          See Terms of Use.
        </div>
      </div>
    </div>
  </div>
);

const PerformerProfile = () => (
  <div className="p-4 lg:p-8 lg:px-[50px]">
    <div className="flex justify-between items-center mb-6 ">
      <h1 className="text-2xl font-semibold text-[#262626]">
        Performer profile
      </h1>
    </div>
    <PerformerProfileDetails />
  </div>
);

export default PerformerProfile;
