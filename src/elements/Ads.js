import React from 'react';
import { Button, TextField, InputAdornment, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Add } from '@mui/icons-material';

const Ads = () => {
  return (
    <div className="py-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between items-center mb-4 px-6">
        <h2 className="text-lg font-semibold">My Ads</h2>
      </div>
      <table className="w-full   ">
        <thead className='bg-[#F9FAFB] border-b-[1px] border-b-[#EAECF0] ' >
          <tr className="text-[#667085] text-[14px]   ">
            <th className="py-2 pl-6 font-[500]">#</th>
            <th className="py-2  font-[500]">Banner preview</th>
            <th className="py-2 text-start  font-[500]">Url</th>
            <th className="py-2  font-[500]">Status</th>
            <th className="py-2  font-[500]">Comment</th>
            <th className="py-2  font-[500] pr-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="text-center text-[14px] text-[#656565] py-14 ">
            No ads yet!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ads;
