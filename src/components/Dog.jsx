import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Dog = ({ idDog, item }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" w-full border border-gray-400  rounded-xl mb-2 bg-[#e6d7e7] shadow-md shadow-gray-400 ">
      <div
        className="w-full grid grid-cols-4 justify-between p-2 h-full items-center "
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        <img src={item.dogPic} alt="" className="h-[60px] w-[60px] rounded-full"/>
        <p>{item.dogName}</p>
        <p>{item.ownersName}</p>
        <p>{item.breed}</p>
      </div>
      {showMore && (
        <div className="flex justify-center h-[10vh] items-center ">
          <button
            className=" bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
            onClick={() => navigate("/newVisit", { state: { idDog: idDog, dogName: item.dogName, ownersName: item.ownersName }, })}
          >
            <BiBookAdd className="text-xl mr-1" /> Nueva Consulta
          </button>
          <button
            className="h-fit bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
            onClick={() =>
              navigate("/History", {
                state: {
                  idDog: idDog,
                  dogName: item.dogName,
                  breed: item.breed,
                  color: item.color,
                  weight: item.weight,
                  birthday: item.birthday,
                  ownersName: item.ownersName,
                  address: item.address,
                  phone: item.phone,
                  notes: item.notes,
                  notesOwner: item.notesOwner,
                  healthConditions: item.healthConditions,
                  notesHistory: item.notesHistory,
                  dateAdded: item.dateAdded,
                  parvo: item.parvo,
                  quintuple: item.quintuple,
                  sextuple: item.sextuple,
                  kc: item.kc,
                  giardia: item.giardia,
                  rabia: item.rabia,
                  dogPic: item.dogPic,
                  imgFile: item.imgFile,
                  visit: item?.visit
                },
              })
            }
          >
            <BsFileMedical className="text-xl mr-1" /> Ver Historial
          </button>
        </div>
      )}
    </div>
  );
};

export default Dog;
