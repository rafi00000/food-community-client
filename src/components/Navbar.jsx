import { NavLink } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {


  const navItems = (
    <div className="flex gap-3 flex-col lg:flex-row ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/available-foods"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        Available Foods
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        Login / Signup
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:hidden">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-3/4 min-h-full bg-white text-base-content">
                {/* Sidebar content here */}
                {navItems}
                <div className="text-center my-7">
                  <a className="btn">Sign Out </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* website logo here */}
        <div className="flex justify-between border items-center gap-2 p-2 rounded-md">
          <img src="https://i.ibb.co/FYVx2DX/logo.png" className='w-14' alt="" />
        <p className="text-xl font-black lg:text-2xl primary-btn">
          Share Food
        </p>

        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
