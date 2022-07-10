import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dogUknown from "../assets/dogUknown.png"

const Dog = ({ idDog, item }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();


  //If a profile picture is uploaded show it, if not show a default picture
  const imgShow = () => {
    if(item.dogPic && item.dogPic != ""){
      return item.dogPic; 
    }else {
      return dogUknown
    }
  }


  return (
    <div className=" w-full border border-gray-400  rounded-xl mb-2 bg-[#e6d7e7] shadow-md shadow-gray-400 ">
      <div className="w-full flex justify-between md:justify-start md:grid md:grid-cols-5 p-2 h-full items-center ">
        <div className="shrink-0">
          <img
            src={imgShow()}
            alt=""
            className="h-[60px] w-[60px] rounded-full "
          />
        </div>
          <p className=" flex">{item.dogName}</p>
          <p className=" flex flex-wrap ">{item.ownersName}</p>
          <p className="hidden sm:flex">{item.breed}</p>
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex">{item.phone}</div>
          <div className="flex justify-center items-center">
          <button
            className=" bg-[#99599d] flex my-1 pl-2 py-1 pr-1 rounded-xl text-gray-300 hover:scale-105"
            onClick={() =>
              navigate("/newVisit", {
                state: {
                  idDog: idDog,
                  dogName: item.dogName,
                  ownersName: item.ownersName,
                },
              })
            }
            alt="Nueva Visita"
            title="Nueva Visita"
          >
            <BiBookAdd className="text-xl mr-1" /> 
          </button>
          <button
            className=" bg-[#99599d] flex mx-1 pl-2 py-1 pr-1 rounded-xl text-gray-300 hover:scale-105"
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
                  visit: item?.visit,
                },
              })
            }
          >
            <BsFileMedical className="text-xl mr-1" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
