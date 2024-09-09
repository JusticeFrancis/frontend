import React from "react";
import { Button, Link, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { FileOpen } from "@mui/icons-material";

const CompanyInfo = () => (
  <div className="bg-white p-6 rounded-lg border-[1px] border-[#EAE2F0] h-fit max-w-full  lg:mr-6">
    <h2 className="text-xl font-semibold text-[#262626] mb-2">
      Company Information
    </h2>
    <div className="mb-4">
      <div className="text-[14px] font-semibold text-[#262626]">Company name</div>
      <div className="text-sm font-medium text-[#262626]">Stark Studios</div>
    </div>

    <div className="mb-4">
      <div className="text-[14px] font-semibold text-[#262626]">Phone number</div>
      <div className="text-sm font-medium text-[#262626]">(480) 555-0103</div>
    </div>

    <div className="mb-4">
      <div className="text-[14px] font-semibold text-[#262626]">Email</div>
      <div className="text-sm font-medium text-[#262626]">
        starkstudios@abilityye.com
      </div>
    </div>

    <div className="flex items-center space-x-4">
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
          Save changes
        </Button>
      </div>

      <div className="flex justify-center mt-3">
        <Button
          variant=""
          color=""
          className="bg-gradient-to-r  text-black border-b-2 "
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
);

const NoticeInformation = () => (
  <div className="bg-white p-6 rounded-lg shadow-md flex-1">
    <div className="uppercase text-xs font-semibold text-[#1976D2] mb-4">
      Notice Information
    </div>
    <h2 className="text-2xl font-semibold text-gray-900">
      A wheel chair actress
    </h2>
    <p className="text-red-600 text-sm  font-semibold mb-1 mt-5">
      Open until: August 20, 2024
    </p>

    <div className="mb-4">
      <div className="text-sm font-semibold text-[#262626]">Project</div>
      <div className="text-[14px] font-medium text-[#262626]">
        The titan films
      </div>
    </div>

    <div className="mb-4">
      <div className="text-sm font-semibold text-[#262626]">Notice type</div>
      <div className="text-[14px] font-medium text-[#262626]">
        Actor, Comedian, Singer
      </div>
    </div>

    <div className="mb-4">
      <div className="text-sm font-semibold text-[#262626]">Description</div>
      <div className="text-[14px] font-medium text-[#262626]">
        I need a female, has a good voice, as well with acting skills.
      </div>
    </div>

    <div className="mb-4">
      <div className="text-sm font-semibold text-[#262626]">
        Required Skills
      </div>
      <div className="text-[14px] font-medium text-[#262626]">
        I need a female, has a good voice, as well with acting skills.
      </div>
    </div>

    <div className="grid lg:grid-cols-2">
      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">
          Disability category
        </div>
        <div className="text-[14px] font-medium text-[#262626]">
          Wheel chair
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">Union status</div>
        <div className="text-[14px] font-medium text-[#262626]">Non-union</div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">Gender</div>
        <div className="text-[14px] font-medium text-[#262626]">Female</div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">Age range</div>
        <div className="text-[14px] font-medium text-[#262626]">20 - 28</div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">
          Term/Timeframe
        </div>
        <div className="text-[14px] font-medium text-[#262626]">
          10 - 20 days
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">Start date</div>
        <div className="text-[14px] font-medium text-[#262626]">
          August 24, 2024
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-semibold text-[#262626]">
          Project Location
        </div>
        <div className="text-[14px] font-medium text-[#262626]">
          LA, Alaska, United Kingdom
        </div>
      </div>
    </div>

    <div className="mb-4">
      <div className="text-sm font-semibold text-[#262626]">
        Side short description
      </div>
      <div className="text-[14px] font-medium text-[#262626]">
        “No Strings Attached”: This 2011 rom-com stars Natalie Portman as Emma
        and Ashton Kutcher as Adam. The beginning and end of the selection are
        clearly marked on the script.
      </div>
    </div>

    <div className="text-sm font-semibold text-[#262626] mt-2 mb-1">
      Side document
    </div>
    <div className="flex items-center bg-white p-4 rounded-lg lg:w-[500px] w-full  border-[#EAECF0] border-[1px] cursor-pointer">
      <IconButton color="primary">
        <FileOpen />
      </IconButton>
      <div className="flex-1">
        <div className="text-sm font-semibold text-[#262626] ">Script.pdf</div>
        <div className="text-sm font-normal text-[#667085] ">200kb</div>
      </div>
      <Link href="#" download className="text-blue-600">
        <IconButton color="primary">
          <DownloadIcon />
        </IconButton>
      </Link>
    </div>
  </div>
);

const NoticeDetails = () => (
  <div className="lg:flex lg:px-[120px] lg:py-[40px] py-4 px-2 space-y-2 lg:space-y-0">
    <CompanyInfo />
    <NoticeInformation />
  </div>
);

export default NoticeDetails;
