import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import { BsFileMedical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Dog = ({ idDog, item }) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
console.log(item?.visit)
  return (
    <div className=" w-full border-t border-black">
      <div
        className="w-full grid grid-cols-3 justify-between p-2 h-full "
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        <p>{item.dogName}</p>
        <p>{item.ownersName}</p>
        <p>{item.ownersName}</p>
      </div>
      {showMore && (
        <div className="flex justify-center h-[10vh] items-center">
          <button
            className="h-fit bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 px-2 m-1 flex items-center rounded-full text-gray-300"
            onClick={() => navigate("/newVisit", { state: { idDog: idDog } })}
          >
            <BiBookAdd className="text-xl" /> Agregar Nueva Consulta
          </button>
          <button
            className="h-fit bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 px-2 m-1 flex items-center rounded-full text-gray-300"
            onClick={() =>
              navigate("/History", {
                state: {
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
                  visit: item?.visit
                },
              })
            }
          >
            <BsFileMedical className="text-xl" /> Ver Historial
          </button>
        </div>
      )}
    </div>
  );
};

export default Dog;
