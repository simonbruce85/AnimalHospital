import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";
import History from "../components/History";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
  const times = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  return (
    <div className="md:flex ">
    <Sidebar/>
    <History/>
    </div>
  );
};

export default Home;
