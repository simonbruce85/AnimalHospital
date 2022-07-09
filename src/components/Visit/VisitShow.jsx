import React, { useState } from "react";
import EditVisit from "./EditVisit";
import { FaCheck, FaTimes } from "react-icons/fa";

const VisitShow = ({ idDog, item, counter }) => {
  const [showMore, setShowMore] = useState(false);
  const [editShow, setEditShow] = useState(true);
  const items = [];
  // function to show the files grabbing the information from firebase (link and name of the file)
  //the idea was using a for loop to iterate trought two different arrays at the same time
  for (const [index] of item.imgFile.imgUrl?.entries()) {
    items.push(
      <p className=" px-4">
        <a
          href={item.imgFile.imgUrl[index]}
          target="_blank"
          className="text-blue-500 cursor-pointer border-b border-blue-500"
        >
          {item.imgFile.imgName[index]}
        </a>
      </p>
    );
  }
  return (
    <div className="mb-4 border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] p-4">
      <p
        onClick={() => {
          setShowMore(!showMore);
        }}
        className=" border-gray-400 flex justify-center cursor-pointer text-lg"
      >
        Visita Numero {counter}
      </p>
      {editShow ? (
        <div className="flex justify-center items-center">
          {showMore && (
            <div className="pt-2 flex flex-col md:justify-center md:items-center">
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Razon de la visita:</p>
                <p>{item.visitReason}</p>
              </div>
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Sintomas:</p>
                <p>{item.symptoms}</p>
              </div>
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Diagnostico:</p>
                <p>{item.diagnostic}</p>
              </div>
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">
                  Tratamiento en la clinica:
                </p>
                <p>{item.clinicTreatment}</p>
              </div>
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Tratamiento Indicado:</p>
                <p>{item.houseTreatment}</p>
              </div>
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Tratamiento Realizados:</p>
                <p>{item.exams}</p>
              </div>
              {/*If there is any file, show the files section*/}
              {item.imgFile.imgName.length > 0 && (
                <div className="grid grid-cols-2 m-1 items-center ">
                <p className="border-gray-400 mx-8 ">Archivos</p>
                <p className="">{items}</p>
              </div>
              )}
              <div className="grid grid-cols-2 m-1 items-center">
                <p className="border-gray-400 mx-8 ">Vacunas:</p>
                <div className="w-full flex flex-col border-gray-400">
                  <div className="flex">
                  <div className="">
                    <p className="flex justify-between items-center">
                      Parvo {item.parvo ? <FaCheck /> : <FaTimes />}
                    </p>
                    <p className="flex justify-between items-center">
                      Quintuple {item.quintuple ? <FaCheck /> : <FaTimes />}
                    </p>
                    <p className="flex justify-between items-center">
                      Sextuple {item.sextuple ? <FaCheck /> : <FaTimes />}
                    </p>
                  </div>
                  <div className="px-4">
                    <p className="flex justify-between items-center">
                      KC {item.kc ? <FaCheck /> : <FaTimes />}
                    </p>
                    <p className="flex justify-between items-center">
                      Giardia {item.giardia ? <FaCheck /> : <FaTimes />}
                    </p>
                    <p className="flex justify-between items-center ">
                      Rabia {item.rabia ? <FaCheck /> : <FaTimes />}
                    </p>
                  </div>
                  </div>
                  <p className="flex items-center">
                      Desparasitación {item.despara ? <FaCheck /> : <FaTimes />}
                    </p>
                </div>
                
              </div>
              <div className=" border-gray-400 flex items-center justify-center pb-4">
                <button
                  onClick={() => {
                    setEditShow(!editShow);
                  }}
                  className="h-fit bg-[#99599d] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
                >
                  Editar Visita
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <EditVisit
          idDog={idDog}
          item={item}
          counter={counter}
          editShow={editShow}
          setEditShow={setEditShow}
        />
      )}
    </div>
  );
};

export default VisitShow;
