import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";

const History = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  const date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
  const times = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  return (
    <div className=" h-full w-full sm:ml-4  mt-4 mr-4">
      <div className="h-full border border-gray-900 text-white rounded-lg w-full ">
        <div className="flex w-full items-center">
          <div className="m-4 text-gray-900">
            <FiSearch />
          </div>
          <form className="mr-4 h-full w-full ">
            <input
              type="text"
              placeholder="Search for... "
              className="placeholder:text-gray-500 rounded-lg  w-full text-gray-900"
            ></input>
          </form>
          <div className=" hidden md:flex items-center justify-between px-4">
            <div className="text-gray-900 flex items-center px-2">
              <FiCalendar className="mr-1"/>
              {date}
            </div>
            <div className="text-gray-900 flex items-center px-2">
              <RiTimer2Line className="mr-1"/>
              {times}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
