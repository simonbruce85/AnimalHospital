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

const DogList = () => {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = UserAuth();
  const matrix = [];
  useEffect(() => {
    dogsCalla();
  }, [user?.email]);

  const q = query(collection(db, "users"), orderBy("dogName", "asc"));
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
    <div className=" h-full sm:ml-4 px-2 pt-2 mr-4 md:ml-[170px]">
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
      <div className="w-full grid grid-cols-4 text-gray-300 bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] rounded-t-lg  justify-between p-2 h-full mt-4 ">
      <p></p>
      <p>Nombre del paciente</p>
        <p>Nombre del dueño</p>
        <p>Raza</p>
      </div>
      <div className="border-x border-b border-black rounded-b-xl" >
        <div>
          {filteredDogs?.map((item) => (
            <Dog item={item.data} idDog={item.id} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogList;
