import { Button } from "@mui/material";
import React from "react";

const Notice = () => {
  return (
    <div className="border p-6 rounded-[40px] bg-white my-6 lg:text-[17px] text-[14px] ">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">A wheel chair actress</h2>
          <div className="lg:flex justify-between lg:mb-2 mb-3 lg:space-x-44 space-y-3 lg:space-y-0">
            <div>
              <p className="text-gray-700 lg:mb-4 mb-3">
                <strong>Location:</strong> Los Angeles, CA
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Age range:</strong> 18-27
              </p>
            </div>
            <div className="">
              <p className="text-gray-700 lg:mb-4 mb-3">
                <strong>Project:</strong> The Titan Films
              </p>
              <p className="text-gray-700">
                <strong>Perform Type:</strong>{" "}
                <span>Actor, Stunt Performer, Musician, Comedian</span>
              </p>
            </div>
          </div>
          ˝
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

      <p className="text-gray-700 mb-4 ">
        <strong>Description</strong>
        <br />
        In the gritty underworld where chaos reigns, a group of rogue bad boys
        takes on the city's most dangerous criminals. With explosive action,
        high-speed chases, and intense shootouts, they blur the lines between
        justice and vengeance. Loyalty is tested, alliances are shattered, and
        the battle for control erupts in a relentless fight for survival...
      </p>
    </div>
  );
};

export default Notice;
