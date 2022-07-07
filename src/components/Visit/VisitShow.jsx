import React, { useState } from "react";
import EditVisit from "./EditVisit";

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
    <div>
      <p
        onClick={() => {
          setShowMore(!showMore);
        }}
        className="border border-gray-400 flex justify-center cursor-pointer"
      >
        Visita Numero {counter}
      </p>
      {editShow ? (
        <div>
          {showMore && (
            <div>
              <p className="border-x border-b border-gray-400">
                Razon de la visita: {item.visitReason}
              </p>
              <p className="border-x border-b border-gray-400">
                Sintomas: {item.symptoms}
              </p>
              <p className="border-x border-b border-gray-400">
                Diagnostico: {item.diagnostic}
              </p>
              <p className="border-x border-b border-gray-400">
                Tratamiento en la clinica: {item.clinicTreatment}
              </p>
              <p className="border-x border-b border-gray-400">
                Tratamiento Indicado: {item.houseTreatment}
              </p>
              <p className="border-x border-b border-gray-400">
                Examenes Realizados: {item.exams}
              </p>
              {/*If there is any file, show the files section*/}
              {item.imgFile.imgName.length > 0 && (
                <div className="border-x border-b border-gray-400 flex items-center">
                  <p>Archivos</p>
                  <div className="flex w-full">{items}</div>
                </div>
              )}
              <p className="pr-4 border-x border-gray-400">Vacunas:</p>
              <div className="w-full flex border-x border-gray-400">
                <div>
                  <p>Parvo: {item.parvo ? "Si" : "No"}</p>
                  <p>Quintuple: {item.quintuple ? "Si" : "No"}</p>
                  <p>Sextuple: {item.sextuple ? "Si" : "No"}</p>
                </div>
                <div className="px-4">
                  <p>KC: {item.kc ? "Si" : "No"}</p>
                  <p>Giardia: {item.giardia ? "Si" : "No"}</p>
                  <p>Rabia {item.rabia ? "Si" : "No"}</p>
                  <p>Desparasitación {item.despara ? "Si" : "No"}</p>
                </div>
              </div>
              <div className="border-x border-gray-400 flex items-center justify-center pb-4">
                <button
                  onClick={() => {
                    setEditShow(!editShow);
                  }}
                  className="h-fit bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
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
