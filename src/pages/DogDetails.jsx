import React from "react";
import { useLocation } from "react-router-dom";
import VisitShow from "../components/Visit/VisitShow";
import { FaCheck, FaTimes, FaUserEdit } from "react-icons/fa";
import dogUknown from "../assets/dogUknown.png"
const DogDetails = () => {
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
    dogPic,
    visit,
  } = state;

  let counter = 0;
  const items = [];

  //building the array of images or files to match and show them with their names
  if (imgFile) {
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
    }
  }

  return (
    <div className="w-full p-4 min-h-screen h-full flex justify-center items-center bg-[#f8e5f9]">
      <div className=" md:ml-[160px] xl:ml-0 lg:w-9/12 lg:flex h-full pt-8">
        <div className="lg:w-1/3 flex flex-col md:pt-16 items-center">
          <div className="w-fit relative flex justify-center items-center mb-4">
            <img src={dogPic? dogPic : dogUknown} className=" w-[200px] rounded-full " />
            <button className="absolute bottom-10 right-0  bg-[#99599d] flex p-2 rounded-full text-gray-300 hover:scale-105"><FaUserEdit/></button>
          </div>
          <div className="hidden lg:flex justify-center items-center flex-col">
            <h1 className="text-3xl">{dogName}</h1>
            <p>{breed}</p>
            <p>{ownersName}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </div>
        </div>
        <div className="flex flex-col min-h-screen h-full">
          <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:h-1/2">
            <div className="">
              <div className=" p-1 flex text-lg">Informacion de la Mascota</div>
              <div className="mb-4 border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] min-h-[90%] p-4">
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8">Nombre:</p>
                  <p>{dogName}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Raza:</p>
                  <p>{breed}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Color:</p>
                  <p>{color}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Peso:</p>
                  <p>{weight}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Fecha de Nacimiento</p>
                  <p>{birthday}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center ">
                  <p className="border-gray-400 mx-8 ">Vacunas:</p>
                  <div className="w-full flex">
                    <div>
                      <p className="flex justify-between items-center">
                        Parvo {parvo ? <FaCheck /> : <FaTimes />}
                      </p>
                      <p className="flex justify-between items-center">
                        Quintuple {quintuple ? <FaCheck /> : <FaTimes />}
                      </p>
                      <p className="flex justify-between items-center">
                        Sextuple {sextuple ? <FaCheck /> : <FaTimes />}
                      </p>
                    </div>
                    <div className="px-4">
                      <p className="flex justify-between items-center">
                        KC {kc ? <FaCheck /> : <FaTimes />}
                      </p>
                      <p className="flex justify-between items-center">
                        Giardia {giardia ? <FaCheck /> : <FaTimes />}
                      </p>
                      <p className="flex justify-between items-center">
                        Rabia {rabia ? <FaCheck /> : <FaTimes />}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">notas</p>
                  <p>{notes}</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="p-1 text-lg">Informacion del Dueño</div>
              <div className="border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] min-h-[90%] p-4">
                <div className="grid grid-cols-2 m-1">
                  <p className="border-gray-400 mx-8 ">Nombre</p>
                  <p>{ownersName}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Dirección</p>
                  <p>{address}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Telefono</p>
                  <p>{phone}</p>
                </div>
                <div className="grid grid-cols-2 m-1 items-center">
                  <p className="border-gray-400 mx-8 ">Notas</p>
                  <p>{notesOwner}</p>d
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="p-1 flex items-center rounded-t-lg text-lg">
              Historial medico de la mascota
            </div>
            <div className="mb-4 border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] p-2">
              <p className="  border-gray-400">
                Condiciones Medicas: {healthConditions}
              </p>
              <p className="   border-gray-400">Notas: {notesHistory}</p>
              <div className="  border-gray-400 flex items-center">
                <p>Archivos</p>
                <div className="flex w-full white">{items}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-1 flex items-center rounded-t-lg text-lg">
              Visitas
            </div>
            <div className="">
              {visit?.map(
                (item) => (
                  counter++,
                  (<VisitShow idDog={idDog} item={item} counter={counter} />)
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
