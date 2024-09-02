import React from 'react';
import { Button, TextField, InputAdornment, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Add } from '@mui/icons-material';

const Notifications = () => {
  return (
    <div className="py-6 bg-white rounded-md shadow-md">
      <div className="lg:flex justify-between items-center mb-4 px-6">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex items-center space-x-2">
          <InputBase
            variant="outlined"
            placeholder="Search"
            size="small"
            endAdornment={
                <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }

            sx={{
                border:'1px solid #F0EBE6',
                paddingX: 1,
                paddingY: 0.7,
                borderRadius:'20px'
            }}
          />
        </div>
      </div>
      <table className="w-full text-left  ">
        {/* <thead className='bg-[#F9FAFB] border-b-[1px] border-b-[#EAECF0] ' >
          <tr className="text-[#667085] text-[14px]   ">
            <th className="py-2 pl-6 font-[500]">Title</th>
            <th className="py-2 text-end font-[500]">Created</th>
            <th className="py-2 text-end font-[500]">Expires on</th>
            <th className="py-2 text-end font-[500]">Status</th>
            <th className="py-2 text-end font-[500] pr-6">Actions</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td colSpan="5" className="text-center text-[14px] text-[#656565] py-14 ">
            No notifications yet!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;
