import React from 'react';
import { Button, TextField, InputAdornment, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Add } from '@mui/icons-material';

const ProjectList = () => {
  return (
    <div className="py-6 bg-white rounded-md shadow-md">
      <div className="lg:flex justify-between items-center mb-4 px-6">
        <h2 className="text-lg font-semibold">My Project List</h2>
        <div className="lg:flex items-center lg:space-x-2 space-y-2 lg:space-y-0">
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
          <Button
            variant="contained"
            color="primary"
            className="bg-gradient-to-r from-[#000000] to-[#000000] text-white border-b-2 "
            sx={{
                borderRadius: '20px',
                textTransform: "none",
                py:1
            }}
          
          >
             <Add sx={{ color :'white ', fontSize:'20px', mr:1}} />
             Create notice
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
  <table className="min-w-full text-left ">
    <thead className='bg-[#F9FAFB] border-b-[1px] border-b-[#EAECF0]'>
      <tr className="text-[#667085] text-[14px]">
        <th className="py-2 pl-6 font-[500]">Title</th>
        <th className="py-2 text-end font-[500]">Created</th>
        <th className="py-2 text-end font-[500]">Expires on</th>
        <th className="py-2 text-end font-[500]">Status</th>
        <th className="py-2 text-end font-[500] pr-6">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="5" className="text-center text-[14px] text-[#656565] py-8">
          You don’t have a project yet!
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default ProjectList;
