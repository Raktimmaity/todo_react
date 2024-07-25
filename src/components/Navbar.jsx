import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden flex-wrap justify-around items-center shadow-lg shadow-black/40 fixed p-2 left-0 top-0 right-0 md:flex">
        <h1 className="font-bold text-2xl p-2 text-[#ffffffe6] relative">Todo</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 font-bold text-white">
            <NavLink className={(e)=>{return e.isActive?"p-2 hover:transition-all hover:ease-in-out hover:delay-200 bg-white text-[#3949ab] rounded-xl" : ""}} to="/">Home</NavLink>
            <span>|</span>
            <NavLink className={(e)=>{return e.isActive?"p-2 hover:transition-all hover:ease-in-out hover:delay-200 bg-white text-[#3949ab] rounded-xl" : ""}} to="/rules">Rules</NavLink>
        </div>
      </nav>
      <div className="md:hidden fixed bottom-0 w-full flex justify-around border border-black  z-50 text-white shadow-lg shadow-black-/40 text-xl">
          <NavLink className={(e)=>{return e.isActive? "bg-white text-[#3949ab] p-2 rounded-lg":""}} to="/"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-solid fa-house text-xl"></i>Home</div></NavLink>
          <NavLink className={(e)=>{return e.isActive? "bg-white text-[#3949ab] p-2 rounded-lg":""}} to="/rules"><div className="flex flex-col justify-center items-center text-sm"><i class="fa-brands fa-product-hunt text-xl"></i>Rules</div></NavLink>
        </div>
    </>
  );
};

export default Navbar;
