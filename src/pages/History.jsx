import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import VisitShow from "../components/Visit/VisitShow";

const History = () => {
 
  const { state } = useLocation();
  const {
    idDog,
    dogName,
    breed,
    color,
    weight,
    birthday,
    notes,
    ownersName,
    address,
    phone,
    notesOwner,
    healthConditions,
    notesHistory,
    dateAdded,
    parvo,
    quintuple,
    sextuple,
    kc,
    giardia,
    rabia,
    imgFile,
    visit,
  } = state

  let counter = 0;
  const items = [];
  // function to show the files grabbing the information from firebase (link and name of the file)
  //the idea was using a for loop to iterate trought two different arrays at the same time
  if (imgFile){
  for (const [index] of imgFile.imgUrl.entries()) {
    items.push(
      <p className=" px-4">
        <a
          href={imgFile.imgUrl[index]}
          target="_blank"
          className="text-blue-500 cursor-pointer border-b border-blue-500"
        >
          {imgFile.imgName[index]}
        </a>
      </p>
    );
  }}
  return (
    <div >
      <div className=" min-h-screen h-full  md:ml-[170px]  ">
        <div className="h-full p-4 ">
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center rounded-t-lg text-gray-300">
              Informacion de la Mascota
            </div>
            <div>
              <p className="border-x border-b border-gray-400">
                Nombre: {dogName}
              </p>
              <p className="border-x border-b border-gray-400">Raza: {breed}</p>
              <p className="border-x border-b border-gray-400">
                Color: {color}
              </p>
              <p className="border-x border-b border-gray-400">
                Peso: {weight} (Kg)
              </p>
              <p className="border-x border-b border-gray-400">
                Fecha de Nacimiento: {birthday}
              </p>
              {/* <p className="border-x border-b border-gray-400">
                Fecha de Ingreso al sistema: {dateAdded}
              </p> */}
              <p className="border-x border-b border-gray-400">
                notas: {notes}
              </p>
              <div className="border-x border-gray-400 flex items-center justify-center">
                <p className="w-fit pr-4">Vacunas:</p>
                <div className="w-full flex">
                  <div>
                    <p>Parvo: {parvo ? "Si" : "No"}</p>
                    <p>Quintuple: {quintuple ? "Si" : "No"}</p>
                    <p>Sextuple: {sextuple ? "Si" : "No"}</p>
                  </div>
                  <div className="px-4">
                    <p>KC: {kc ? "Si" : "No"}</p>
                    <p>Giardia: {giardia ? "Si" : "No"}</p>
                    <p>Rabia {rabia ? "Si" : "No"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center text-gray-300">
              Informacion del dueño
            </div>
            <p className="border-x border-b border-gray-400">
              Nombre: {ownersName}
            </p>
            <p className="border-x border-b border-gray-400">
              Dirección: {address}
            </p>
            <p className="border-x border-b border-gray-400">
              Telefono: {phone}
            </p>
            <p className="border-x border-gray-400">Notas: {notesOwner}</p>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center  text-gray-300">
              Historial medico de la mascota
            </div>
            <p className="border-x border-b border-gray-400">
              Condiciones Medicas: {healthConditions}
            </p>
            <p className="border-x border-b border-gray-400">Notas: {notesHistory}</p>
            <div className="border-x border-b border-gray-400 flex items-center">
            <p>Archivos</p>
            <div className="flex w-full">{items}</div>
          </div>
          </div>
          <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center  text-gray-300">
            Visitas
          </div>
          <div className="">
            {visit?.map((item) => (
              counter++,
              <VisitShow idDog={idDog} item={item} counter={counter}/>
              
              ))}
            <div className=" text-white border-b rounded-b-xl border-x border-gray-400 flex justify-center">
              {"Simon Bruce"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
