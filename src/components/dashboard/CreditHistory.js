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
import { Add, Link } from "@mui/icons-material";

const CreditHistory = () => {
  return (
    <div className="py-12  rounded-md  lg:px-[80px] px-2 ">
      <div className="lg:flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Credit history</h2>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-4 space-y-6 lg:space-y-0">
        <div className="overflow-x-auto shadow-md w-full lg:col-span-2 h-fit">
          <div className="min-w-[600px]">
            <table className="min-w-full text-center">
              <thead className="bg-[#dde0e4] border-b-[1px] border-b-[#EAECF0]">
                <tr className="text-[#667085] text-[14px]">
                  <th className="py-2 text-start pl-6 font-[500] w-[1/5]">
                    Transaction ID
                  </th>
                  <th className="py-2 text-start font-[500] w-[1/5]">Date</th>
                  <th className="py-2 text-start font-[500] w-[1/5]">Status</th>
                  <th className="py-2 text-start font-[500] w-[1/5]">Item</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#667085] text-[14px]">
                  <td className="py-2 text-start pl-6 font-[500]">#10293</td>
                  <td className="py-2 text-start font-[500]">June 13, 2024</td>
                  <td className="py-2 text-start font-[500]">Failed</td>
                  <td className="py-2 text-start font-[500]">
                    5 credit for $50
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-1 w-full bg-white shadow-md  h-fit ">
          <div className="text-[16px] font-[600] px-4 py-2">
            Transaction details
          </div>

          <div className="text-[#667085] text-[14px] bg-[#eff0f2] py-3 px-4">
            Product
          </div>

          <div className="text-[14px] flex justify-between px-4 py-3">
            <div className="font-[500]">Basic plan</div>
            <div className="text-[#667085]">$160 / month</div>
          </div>

          <Divider />

          <div className="text-[14px] flex justify-between px-4 py-3">
            <div className="font-[500]">Subtotal</div>
            <div className="text-[#667085]">$160 / month</div>
          </div>

          <Divider />

          <div className="text-[14px] flex justify-between px-4 py-3">
            <div className="font-[500]">Total</div>
            <div className="text-[#667085]">$160 / month</div>
          </div>

          <Divider />
        </div>
      </div>
    </div>
  );
};

export default CreditHistory;
