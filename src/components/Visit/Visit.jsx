import { async } from "@firebase/util";
import {
  doc,
  onSnapshot,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { RiTimer2Line } from "react-icons/ri";
import { UserAuth } from "../AuthContext";
import { db } from "../../firebase";
import Dog from "../Dog";

const Visit = () => {
  const [time, setTime] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = UserAuth();
  const [showMore, setShowMore] = useState(false)
  const matrix = [];

  // useEffect(() => {
  //   setInterval(() => setTime(new Date()), 1000);
  // }, []);

  // const date = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
  // const times = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

  useEffect(() => {
    dataCalla();
  }, [user?.email]);

  const dataCalla = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        matrix.push(doc.data());
      });
      setDogs(matrix);

      console.log(matrix);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredDogs = dogs?.filter((dog) =>
    dog.dogName.toLowerCase().includes(search.toLowerCase())
  );

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
              onChange={handleChangeSearch}
            ></input>
          </form>
          <div className=" hidden md:flex items-center justify-between px-4">
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
      <div className="w-full grid grid-cols-3 text-gray-300 bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] rounded-t-lg  justify-between p-2 h-full mt-4 ">
        <p>Nombre del paciente</p>
        <p>Nombre del dueno</p>
        <p>Raza</p>
      </div>
      <div className="border-x border-b border-black rounded-b-xl" >
        <div>
          {filteredDogs?.map((item) => (
            <Dog item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Visit;
