import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const History = () => {
  const { state } = useLocation();
  const {
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
  } = state;
  return (
    <div className="md:flex ">
      <Sidebar />
      <div className=" h-full w-full sm:ml-4  mt-4 mr-4 ">
        <div className="h-full w-full  p-4">
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center rounded-t-lg text-gray-300">
              Informacion de la Mascota
            </div>
            <div >
            <p className="border-x border-b border-gray-400">Nombre: {dogName}</p>
            <p className="border-x border-b border-gray-400">Raza: {breed}</p>
            <p className="border-x border-b border-gray-400">Color: {color}</p>
            <p className="border-x border-b border-gray-400">Peso: {weight} (Kg)</p>
            <p className="border-x border-b border-gray-400">Fecha de Nacimiento: {birthday}</p>
            <p className="border-x border-gray-400">notas: {notes}</p>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center text-gray-300">
              Informacion del dueño
            </div>
            <p className="border-x border-b border-gray-400">Nombre: {ownersName}</p>
            <p className="border-x border-b border-gray-400">Dirección: {address}</p>
            <p className="border-x border-b border-gray-400">Telefono: {phone}</p>
            <p className="border-x border-gray-400">Notas: {notesOwner}</p>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center  text-gray-300">
              Informacion del dueño
            </div>
            <p className="border-x border-b border-gray-400">Condiciones Medicas: {healthConditions}</p>
            <p className="border-x border-gray-400">Notas: {notesHistory}</p>
          </div>
          <div className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] p-1 flex items-center  text-gray-300">
              Visitas
            </div>
        </div>
      </div>
    </div>
  );
};

export default History;
