import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../Utils/constant";
import { setUser } from "../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-green-400 fixed">
      <div>
        <h1 className="text-xl font-signature ml-2 bg-clip-text">
          Movie Booking
        </h1>
      </div>

      {user && (
        <ul className="hidden md:flex">
          <li className="px-4 py-3 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white">
            Home
          </li>
          <input
            type="text"
            placeholder="Search for a movie..."
            className="bg-gray-700 text-white px-4 py-2 rounded-md w-1/2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-orange-400 to-red-400 px-6 py-3 mx-auto flex items-center rounded-md duration-300 ml-3"
            onClick={logoutHandler}
          >
            Logout
          </button>

          <div className="relative inline-block text-left ml-3 px-3 py-2">
            <div>
              <img
                src="https://png.pngtree.com/png-clipart/20220821/ourmid/pngtree-male-profile-picture-icon-and-png-image-png-image_6118773.png"
                alt="Profile"
                className="h-8 w-8 rounded-full border-2 border-rose-500"
                onClick={toggleDropdown}
              />
            </div>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <h1 className="text-lg font-bold text-black px-4 py-2 capitalize">
                    {user.fullName}
                  </h1>

                  <a
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Profile
                  </a>
                  <a
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </a>
                </div>
              </div>
            )}
          </div>
        </ul>
      )}

      <div
        onClick={() => setToggle(!toggle)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {toggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-green-400 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">
            Home
          </li>
          <input
            type="text"
            placeholder="Search movie name..."
            className="p-2 bg-transparent border-2 rounded-full text-white focus:outline-none"
          />
          <button className="bg-gradient-to-r from-orange-400 to-red-400 px-6 py-3 mx-auto flex items-center rounded-md duration-300 mt-4">
            Logout
          </button>
        </ul>
      )}
    </div>
  );
};

export default Header;
