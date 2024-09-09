import React, { useState } from "react";
import { Button, Divider, Drawer, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import { TuneOutlined } from "@mui/icons-material";
import Notice from "../../elements/Notice";
import FilterMenu from "../../elements/FilterMenu";

const Notices = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [openFilterModal, setOpenFilterModal] = useState(false)
  return (
    <div className="lg:p-6 lg:px-[100px] grid grid-cols-8">
         <Drawer open={openFilterModal} onClose={()=> setOpenFilterModal(false)}>
            <FilterMenu setOpenFilterModal={setOpenFilterModal}  setShowFilter={setShowFilter} showFilter={showFilter} />
        </Drawer>
      <div className={showFilter ? "col-span-2" : "col-span-2 hidden"}>
        <FilterMenu setShowFilter={setShowFilter} showFilter={showFilter} />
      </div>
      <div className={showFilter ? "bg-white  p-3 col-span-6" : "bg-white  p-3 col-span-8 "}>
        <h1 className="lg:text-4xl text-2xl  font-bold mb-6">
          Find your dream project
        </h1>

        <div className="lg:flex lg:space-x-4 lg:space-y-0 space-y-4 items-center mb-6 text-[14px] lg:text-[17px]">
          <div className="border-[1px] border-gray-300 p-2 rounded-[20px] px-4 cursor-pointer"
          onClick={()=>{
            setShowFilter(true)
            if (window.innerWidth <= 600) { // 600px corresponds to typical 'sm' breakpoint
                setOpenFilterModal(true)
              }
          }}
          >
            <TuneOutlined /> Filters
          </div>

          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Hinted search text"
              className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-0 bg-[#F9F9F9]"
            />
            <SearchIcon className="absolute left-3 top-3 text-gray-400" />
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
          >
            Search
          </Button>
        </div>

        <Divider className="" />

        <Notice />
        <Notice />
      </div>
    </div>
  );
};

export default Notices;
