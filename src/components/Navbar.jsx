import React from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    navigate("/");
    logout();
  };

  const btnRole = user?.role || "USER";

  return (
    <div>
      <div className="navbar bg-orange-300 gap-6">
        <div className="flex-1">
          <img className="w-[4rem] h-[4rem]" src={logo} />
        </div>

        {btnRole === "ADMIN" ? (
          <NavLink className="navlink" to="/admin">
            <div className="flex justify-end mt-3 mx-5">
              <button className="btn">Create</button>
            </div>
          </NavLink>
        ) : (
          <></>
        )}

        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        <button className="btn">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
        </button>
        <button className="btn">
          <NavLink className="navlink" to="/aboutus">
            About Us
          </NavLink>
        </button>
        <button className="btn">
          <NavLink className="navlink" to="/recipe">
            Recipe
          </NavLink>
        </button>
        <div className="flex-none gap-2">
          <div className="flex flex-row gap-3">
            {!user ? (
              <button className="btn">
                <NavLink className="navlink" to="/Login">
                  Login
                </NavLink>
              </button>
            ) : (
              <div className="btn" onClick={hdlLogout}>
                Logout
              </div>
            )}
            <button className="btn">
              <NavLink className="navlink" to="/Register">
                Register
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
