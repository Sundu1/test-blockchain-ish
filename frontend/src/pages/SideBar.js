import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="relative h-screen bg-white w-[200px] border-2">
      <div className="p-[20px] text-blue-500 font-bold font-serif">
        <Link to="/">Random logo</Link>
      </div>
      <div className="p-[20px]">
        <Link to="/">
          <div className="p-2 px-5 hover:bg-gray-200 rounded-full">
            Transactions
          </div>
        </Link>
        <Link to="/assets">
          <div className="p-2 px-5 hover:bg-gray-200 rounded-full">Assets</div>
        </Link>
        <Link to="trade">
          <div className="p-2 px-5 hover:bg-gray-200 rounded-full ">Trade</div>
        </Link>
        <Link to="/mine">
          <div className="p-2 px-5 hover:bg-gray-200 rounded-full ">Mine</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
