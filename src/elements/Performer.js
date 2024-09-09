import { Button, Link } from '@mui/material'
import React from 'react'

const Performer = () => {
  return (
    <div className=" ">
          <img
            src="/user23.png"
            className="w-full h-[240px] rounded-t-[20px] object-cover"
          />
          <div className="text-[18px] font-bold my-2">Seirra Rae</div>
          <div className="text-[14px]">
            Actor, speaker, Comedian, Voice-over Artist
          </div>
          <div className="text-[14px]">Age Range : 15-30</div>
          <div className="text-[14px]">Az, United States</div>

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
              startIcon={<img src="/message.png" className="w-[15px] " />}
            >
              Send a message
            </Button>
          </div>

          <div className="flex justify-center">
            <Button
              className="bg-gradient-to-r border-b-2 "
              sx={{
                borderRadius: "20px",
                textTransform: "none",
                py: 1,
                px: 3,
                color: "blue",
              }}
              startIcon={<Link />}
            >
              View Profile
            </Button>
          </div>
        </div>
  )
}

export default Performer