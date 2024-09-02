import React, { useState } from 'react';
import {
  ArrowDropDownOutlined,
  PersonOutlineOutlined,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { Drawer, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <div className="shadow-sm shadow-[#999494] pb-3 h-14 lg:h-full">
        <div className="lg:mx-[60px] mx-3 relative text-[14px] my-2 ">
          <div className="flex justify-center items-center  ">
            {/* Mobile Menu Button */}
            <div className='md:hidden absolute top-0 left-0'>
            <IconButton
              className=" "
              onClick={toggleSidebar}
            >
              <MenuIcon className="text-black "   />
            </IconButton>
            </div>

            {/* Logo */}
            <div className="absolute top-0 left-0 md:block hidden">
              <img
                className="w-[100px] h-[40px]"
                src="https://s3-alpha-sig.figma.com/img/2474/12cf/834bbe56dae4c3f9b0d5bdf2999c79db?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJgBQpkmlkRi4mAwUmqjYfvVcTcxcPPx~kUjhfdwncE19lpMBRYEnDfJ0OCKnsFmSDgQj5AqEsm0pL4Tanh2alMDMLbikQAuNYuVoZRcyNkruLibqc3wqXOUhk7bFtpNQ2s9mQht3J3-OHKNqEucx4~tEabkqYqD320JacOrd5MfYcM4xmTHupRAgCqzakcfBbObC2klyxva1uoPPiQYl6wxd5ccUtqu4G2bQ5brL7egA~QmEb~kN-mdbS0b9tx95dE9z04Mi7xPyDUu51Mom-quVroU2bKjpH0zHVER9Bfg6w9KWcLYSi5zWTQUDWkXdtjyXktSo1W0t89qMon~ww__"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="lg:flex justify-center items-end space-x-8 font-[700] pt-3 hidden md:flex">
              <NavLink text="Dashboard" active />
              <NavLink text="Performers" />
              <NavLink text="Notices" />
              <NavLink text="Message" />
            </div>

            {/* Right Side - Logout and Profile */}
            <div className="absolute top-[-5px] right-0 flex justify-center pt-3 items-center">
              <div className="text-[#D92D20] font-[700] mr-4">Logout</div>
              <div>
                <PersonOutlineOutlined className="text-black" />
              </div>
              <div>
                <ArrowDropDownOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Drawer
        open={sidebarOpen}
        onClose={toggleSidebar}
        anchor="left"
        PaperProps={{
          className: 'w-[250px]',
          style: { backgroundColor: theme.palette.background.default },
        }}
      >
        <div className="flex justify-between items-center p-4">
          <img
            className="w-[80px] h-[30px]"
            src="https://s3-alpha-sig.figma.com/img/2474/12cf/834bbe56dae4c3f9b0d5bdf2999c79db?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJgBQpkmlkRi4mAwUmqjYfvVcTcxcPPx~kUjhfdwncE19lpMBRYEnDfJ0OCKnsFmSDgQj5AqEsm0pL4Tanh2alMDMLbikQAuNYuVoZRcyNkruLibqc3wqXOUhk7bFtpNQ2s9mQht3J3-OHKNqEucx4~tEabkqYqD320JacOrd5MfYcM4xmTHupRAgCqzakcfBbObC2klyxva1uoPPiQYl6wxd5ccUtqu4G2bQ5brL7egA~QmEb~kN-mdbS0b9tx95dE9z04Mi7xPyDUu51Mom-quVroU2bKjpH0zHVER9Bfg6w9KWcLYSi5zWTQUDWkXdtjyXktSo1W0t89qMon~ww__"
            alt="Logo"
          />
          <IconButton onClick={toggleSidebar}>
            <CloseIcon className="text-black" />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={toggleSidebar}>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={toggleSidebar}>
            <ListItemText primary="Performers" />
          </ListItem>
          <ListItem button onClick={toggleSidebar}>
            <ListItemText primary="Notices" />
          </ListItem>
          <ListItem button onClick={toggleSidebar}>
            <ListItemText primary="Message" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

const NavLink = ({ text, active }) => (
  <div
    style={{
      color: active ? "#00A3D3" : "black",
      textDecoration: "none",
      position: "relative",
      display: "inline-block",
      cursor: 'pointer',
      paddingBottom: "0px",
    }}
  >
    {text}
    <span
      style={{
        position: "absolute",
        top: 40,
        left: 0,
        right: 0,
        bottom: 0,
        height: "2px",
        backgroundColor: active ? "currentColor" : "transparent",
      }}
    />
  </div>
);

export default Header;
