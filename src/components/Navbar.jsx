import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);
  console.log(user);
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

  const userLinks = (
    <div className="flex gap-3 flex-col lg:flex-row pt-3">
      <NavLink
        to="/add-food"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        Add Food
      </NavLink>
      <NavLink
        to="/manage-food"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        Manage Food
      </NavLink>
      <NavLink
        to="/my-food-req"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-black p-2 rounded-lg font-bold text-white"
            : "p-2 rounded-lg font-bold border"
        }
      >
        My Food Requests
      </NavLink>
    </div>
  );


  if(loading){
    return <div></div>
  }
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
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-3/4 min-h-full bg-white text-base-content z-30">
                {/* Sidebar content here */}
                {navItems}
                {user ? userLinks : <button>signIn</button>}
                <div className="text-center my-7">
                  <a className="btn">Sign Out </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* website logo here */}
        <div className="flex justify-between border items-center gap-2 p-2 rounded-md">
          <img
            src="https://i.ibb.co/FYVx2DX/logo.png"
            className="w-14"
            alt=""
          />
          <p className="text-xl font-black lg:text-2xl primary-btn">
            Share Food
          </p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {/* dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  border bg-white ">
              <p className="text-center text-xl primary-btn font-bold">{user.displayName}</p>
              <p className="text-center">{user.email}</p>
              <div className="flex flex-col">
              {
                user ? userLinks: ''
              }
              </div>
              
          </ul>
        </div>
        {/* dropdown ends */}
      </div>
    </div>
  );
};

export default Navbar;
