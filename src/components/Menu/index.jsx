import { FaTimes } from "react-icons/fa";
import React from "react";

function Menu() {
  return (
    <div>
      <div className="bg-[#00CCCC] h-[100vh] ">
        <div className="flex justify-center pt-[80px]">
          <div className="w-[70px] h-[70px] bg-white flex justify-center items-center rounded-full">
            <FaTimes size={"30px"} color="#00CCCC" />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white text-[40px]">Xtra Blog</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
