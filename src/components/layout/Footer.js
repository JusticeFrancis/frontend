import React from "react";

const Footer = () => {
  return (
    <div className="py-4 bg-[#000000] ">
      <div className="flex justify-center ">
        <img src="/footer.png" className="lg:w-[1024px] w-[95%] lg:h-[122px] h-[50px] object-cover " />
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 text-white lg:px-[200px] px-[10px] mt-6 lg:text-[16px] text-[14px]">
        <div className="col-span-1">
          <div className="font-bold">COMPANY</div>
          <div className="mt-3 space-y-2 font-[400]">
            <div className="cursor-pointer hover:underline">Advisors and Allies</div>
            <div className="cursor-pointer hover:underline">About Us</div>
            <div className="cursor-pointer hover:underline">Contact Us</div>
            <div className="cursor-pointer hover:underline">Terms of use</div>
            <div className="cursor-pointer hover:underline">Privacy Policy</div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="font-bold">SUPPORT</div>
          <div className="mt-3 space-y-2 font-[400]">
            <div className="cursor-pointer hover:underline">Articles</div>
            <div className="cursor-pointer hover:underline">Help Center</div>
            <div className="cursor-pointer hover:underline">Become a Performer</div>
            <div className="cursor-pointer hover:underline">Hire a Performer</div>
          </div>
        </div>


        <div className="col-span-1">
          <div className="font-bold">FOUNDING SPONSORS</div>
          <div className="mt-3 space-y-2 font-[400]">
            <div className="cursor-pointer hover:underline">ABILITYMagazine</div>
            <div className="cursor-pointer hover:underline">abilityJOBS</div>
          </div>
        </div>


        <div className="col-span-1">
          <div className="font-bold">SOCIALS</div>
          <div className="mt-3 space-y-2 font-[400]">
            <div className="cursor-pointer hover:underline">Twitter</div>
            <div className="cursor-pointer hover:underline">  Instagram</div>
            <div className="cursor-pointer hover:underline">Tiktok</div>
          </div>
        </div>
      </div>



      <div className="text-center mt-4 mb-3 text-[13px] text-white">
      © 2024 abilityE - ABILITY Corps 501(c)3 Nonprofit
      </div>
    </div>
  );
};

export default Footer;
