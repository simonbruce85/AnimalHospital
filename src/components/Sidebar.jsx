import React, { useState } from "react";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { BsFileMedical } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaBars, FaDog, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/AuthContext";
import { Divide as Hamburger } from "hamburger-react";

import Logo from "../assets/dogLogo.png";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" fixed flex w-full md:min-w-fit border-blue-600 md:w-1/12 lg:max-w-[130px] md:min-h-screen h-[50px] z-10 md:h-full bg-gray-700 md:flex-col md:pt-6 md:justify-between md:p-4">
        <div className="hidden md:flex justify-center items-center hover:animate-bounce w-full">
          <img src={Logo} alt="Logo Image" className="w-[70px]" />
        </div>

        <ul className="">
          <li
            className="hidden md:flex  my-4 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200 justify-center lg:justify-start items-center" /*onClick={() => navigate("/home")}*/
          >
            <MdSpaceDashboard />
            <div className="hidden lg:inline-block pl-3">Inicio</div>
          </li>
          <li
            className="hidden md:flex my-4  text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center"
            onClick={() => navigate("/visit")}
          >
            <FaDog />
            <div className="hidden lg:inline-block pl-3">Consulta</div>
          </li>
          <li
            className="hidden md:flex  my-4  text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center"
            onClick={() => navigate("/register")}
          >
            <AiFillFolderAdd />
            <div className="hidden lg:inline-block pl-3">
              <p className="text-left">Registrar</p>
            </div>
          </li>
          {/* <li className="hidden md:flex  my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center">
            <BsFileMedical />
            <div className="hidden lg:inline-block pl-3">Historial</div>
          </li> */}
        </ul>

        <button
          onClick={handleLogout}
          className="hidden md:flex my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center"
        >
          <MdLogout />
          <div className="hidden lg:inline-block pl-3">Salir</div>
        </button>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden  z-20 flex items-center text-gray-300"
        >
          {<Hamburger size={19} toggled={nav} />}
        </div>
        {/*MOBILE MENU*/}
        {nav ? (
          <ul
            className={
              "fixed translate-x-0 ease-in-out duration-300 md:hidden h-full z-10 w-1/2 rounded-r-lg pt-12 bg-gray-700 flex flex-col justify-between text-gray-200 "
            }
          >
            <div>
            <li
            className=" flex my-4 px-1 text-gray-200 items-center pl-8" /*onClick={() => navigate("/home")}*/
          >
            <MdSpaceDashboard />
            <div className="pl-2">Inicio</div>
          </li>
          <li
            className="flex my-4 px-1 text-gray-200 items-center pl-8"
            onClick={() => {navigate("/visit"); handleClick()}}
          >
            <FaDog />
            <div className="pl-3">Consulta</div>
          </li>
          <li
            className=" flex my-4 px-1 text-gray-200 items-center pl-8"
            onClick={() => {navigate("/register"); handleClick()}}
          >
            <AiFillFolderAdd />
            <div className="  pl-3">
              <p className="text-left">Registrar</p>
            </div>
          </li>
            </div>
            <button
          onClick={()=>{handleLogout(); handleClick()}}
          className="flex my-4 px-1 text-gray-200  items-center pl-8"
        >
          <MdLogout />
          <div className="pl-3">Salir</div>
        </button>
          </ul>
        ) : (
          <ul
          className={
            "fixed -translate-x-full ease-in-out duration-300 md:hidden h-full z-10 w-1/2 rounded-r-lg pt-12 bg-gray-700 flex flex-col justify-between text-gray-200 "
          }
        >
          <div>
          <li
          className=" flex my-4 px-1 text-gray-200 items-center pl-8" /*onClick={() => navigate("/home")}*/
        >
          <MdSpaceDashboard />
          <div className="pl-2">Inicio</div>
        </li>
        <li
          className="flex my-4 px-1 text-gray-200 items-center pl-8"
          onClick={() => navigate("/visit")}
        >
          <FaDog />
          <div className="pl-3">Consulta</div>
        </li>
        <li
          className=" flex my-4 px-1 text-gray-200 items-center pl-8"
          onClick={() => navigate("/register")}
        >
          <AiFillFolderAdd />
          <div className="  pl-3">
            <p className="text-left">Registrar</p>
          </div>
        </li>
          </div>
          <button
        onClick={handleLogout}
        className="flex my-4 px-1 text-gray-200  items-center pl-8"
      >
        <MdLogout />
        <div className="pl-3">Salir</div>
      </button>
        </ul>
        )}
      </div>
    </>
  );
};

export default Sidebar;
