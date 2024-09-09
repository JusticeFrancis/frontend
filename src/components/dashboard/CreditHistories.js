import React from 'react';
import { Button, TextField, InputAdornment, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Add, Link } from '@mui/icons-material';

const CreditHistories = () => {
  return (
    <div className="py-12  rounded-md  lg:px-[80px] px-2 ">
      <div className="lg:flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Credit history</h2>
       
      </div>
      <div className="overflow-x-auto shadow-md w-full">
  <div className="min-w-[600px]">
    <table className="min-w-full text-center">
      <thead className="bg-[#dde0e4] border-b-[1px] border-b-[#EAECF0]">
        <tr className="text-[#667085] text-[14px]">
          <th className="py-2 text-start pl-6 font-[500] w-[1/5]">Transaction ID</th>
          <th className="py-2 text-start font-[500] w-[1/5]">Date</th>
          <th className="py-2 text-start font-[500] w-[1/5]">Status</th>
          <th className="py-2 text-start font-[500] w-[1/5]">Item</th>
          <th className="py-2 text-start font-[500] w-[1/5] pr-6"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-[#667085] text-[14px]">
          <td className="py-2 text-start pl-6 font-[500]">#10293</td>
          <td className="py-2 text-start font-[500]">June 13, 2024</td>
          <td className="py-2 text-start font-[500]">Failed</td>
          <td className="py-2 text-start font-[500]">5 credit for $50</td>
          <td className="py-2 text-start font-[500] pr-6">
            <div className="text-[#0077B6] w-fit text-start px-4 text-[14px] py-2 cursor-pointer bg-[#67b9e614]">View</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


    </div>
  );
};

export default CreditHistories;
