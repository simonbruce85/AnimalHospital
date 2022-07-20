import { async } from "@firebase/util";
import {
  doc,
  onSnapshot,
  where,
  query,
  collection,
  getDocs,
  orderBy,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";
import { UserAuth } from "./AuthContext";
import { db } from "../firebase";
import Dog from "./Dog";
import Sidebar from "./Sidebar";

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = UserAuth();
  const matrix = [];
  useEffect(() => {
    dogsCalla();
  }, [user?.email]);

  const q = query(collection(db, "users"), orderBy("dogNamelow", "asc"));
const dogsCalla = () => { onSnapshot(q, (querySnapshot) => {
  setDogs(
    querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
})));
})};

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredDogs = dogs?.filter((dog) =>
    dog?.data.dogName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div >
      <Sidebar />
    
    <div className="pt-16 h-full  px-2 md:pt-4 md:ml-[100px]  lg:ml-[140px]">
      <div className="h-full border border-gray-900 text-white rounded-lg ">
        <div className="flex items-center">
          <div className="m-4 text-gray-900">
            <FiSearch />
          </div>
          <form className="mr-4 h-full w-full ">
            <input
              type="text"
              placeholder="Search for... "
              className="placeholder:text-gray-500 rounded-lg  w-full text-gray-900"
              onChange={handleChangeSearch}
            ></input>
          </form>
          <div className=" hidden md:flex items-center justify-between px-4 ">
            <div className="text-gray-900 flex items-center px-2">
              <FiCalendar className="mr-1" />
              {/* {date} */}
            </div>
            <div className="text-gray-900 flex items-center px-2">
              <RiTimer2Line className="mr-1" />
              {/* {times} */}
            </div>
          </div>
        </div>
      </div>
      {/*Container*/}
      <div className="w-full grid grid-cols-4 sm:grid-cols-5 lg:justify-start p-2 h-full mt-4 text-lg">
      <p></p>
      <p className="pr-4 md:pr-0">Mascota</p>
        <p className="">Dueño</p>
        <p className=" hidden sm:flex">Raza</p>
        <p className="hidden lg:flex">Telefono</p>
        <p></p>
        <p></p>
      </div>
      <div className="mb-4" >
        <div>
          {filteredDogs?.map((item) => (
            <Dog item={item.data} idDog={item.id} key={item.id} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default DogList;
