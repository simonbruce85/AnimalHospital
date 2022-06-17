import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";
import DogList from "../components/DogList";
import Sidebar from "../components/Sidebar";

const Home = () => {
 
  return (
    <div className="md:flex ">
    <Sidebar/>
    <DogList/>
    </div>
  );
};

export default Home;
