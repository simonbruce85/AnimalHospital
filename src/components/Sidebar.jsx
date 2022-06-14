import React, { useState } from "react";
import { MdSpaceDashboard, MdLogout } from "react-icons/md";
import { BsFileMedical } from "react-icons/bs";
import { AiFillFolderAdd } from "react-icons/ai";
import { FaBars, FaDog, FaTimes } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../components/AuthContext";

import Logo from "../assets/logo.png";

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
      <div className=" flex w-full md:min-w-fit md:w-1/12 md:min-h-screen h-[50px] md:h-full bg-[#0b0b0b] md:flex-col pt-6 md:justify-between p-4">
        <div className="hidden md:inline-block">
            <img
              src={Logo}
              alt="Logo Image"
              style={{ width: "50px" }}
            />
        </div>

        <ul className="">
          <li className="hidden md:flex  my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200 justify-center lg:justify-start items-center" onClick={() => navigate("/home")}>
            <MdSpaceDashboard />
            <div className="hidden lg:inline-block pl-3" >Inicio</div>
          </li>
          <li className="hidden md:flex my-4 px-1 text-gray-400 hover:text-gray-200 cursor-pointer hover:border-r-2  border-gray-200  justify-center lg:justify-start items-center">
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
        <div onClick={handleClick} className="md:hidden z-10 text-gray-300">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
          {/*MOBILE MENU*/}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0b0b0b] flex flex-col justify-center items-center text-gray-200"
          }
        >
          <li className="py-6 text-4xl text-gray-200">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Dashboard
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Consulta
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Registrar
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Historial
            </Link>
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
