import React, { useState } from "react";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { BsFileMedical } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaBars, FaDog, FaTimes } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../components/AuthContext";

import Logo from "../assets/dogLogo.png";

const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const {user, logOut}=UserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try{
      await logOut()
      navigate('/')
    }catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <div className=" md:fixed flex w-full md:min-w-fit border-blue-600 md:w-1/12 md:min-h-screen h-[50px] md:h-full bg-gray-700 md:flex-col pt-6 md:justify-between p-4">
        <div className="hidden md:inline-block hover:animate-bounce w-full">
            <img
              src={Logo}
              alt="Logo Image"
              className="w-[100px]"
            />
        </div>

        <ul className="">
          <li className="hidden md:flex  my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200 justify-center lg:justify-start items-center" /*onClick={() => navigate("/home")}*/>
            <MdSpaceDashboard />
            <div className="hidden lg:inline-block pl-3" >Inicio</div>
          </li>
          <li className="hidden md:flex my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center" onClick={() => navigate("/visit")}>
             <FaDog />
            <div className="hidden lg:inline-block pl-3">Consulta</div>
          </li>
          <li className="hidden md:flex  my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center" onClick={() => navigate("/register")}>
            <AiFillFolderAdd />
            <div className="hidden lg:inline-block pl-3"><p className="text-left">Registrar</p></div>
            
          </li>
          <li className="hidden md:flex  my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center">
            <BsFileMedical />
            <div className="hidden lg:inline-block pl-3">Historial</div>
          </li>
        </ul>

        <button onClick={handleLogout} className="hidden md:flex my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center">
          <MdLogout />
          <div className="hidden lg:inline-block pl-3">Salir</div>
        </button>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden fixed z-20 flex items-center text-gray-300">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
          {/*MOBILE MENU*/}
        <ul
          className={
            !nav
              ? "hidden"
              : "fixed md:hidden  z-10 top-0 left-0 w-full h-full bg-gray-700 flex flex-col justify-center items-center text-gray-200"
          }
        >
          <li className="py-6 text-4xl text-gray-200"   >
            Dashboard
          </li>
          <li className="py-6 text-4xl" onClick={() => {navigate("/visit"); handleClick();}}  >
            Consulta
          </li>
          <li className="py-6 text-4xl" onClick={() => {navigate("/register"); handleClick();}}>
            Registrar
          </li>
          <li className="py-6 text-4xl"
              onClick={handleClick}
            >
              Historial
          </li>
            <button className="py-6 text-4xl" onClick={handleLogout}>
              Salir
            </button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
