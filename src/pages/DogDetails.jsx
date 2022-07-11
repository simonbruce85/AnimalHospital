import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VisitShow from "../components/Visit/VisitShow";
import { FaCheck, FaTimes, FaUserEdit } from "react-icons/fa";
import dogUknown from "../assets/dogUknown.png";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";
import Sidebar from "../components/Sidebar";
const DogDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
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
  //If a profile picture is uploaded show it, if not show a default picture
  const imgShow = () => {
    if(dogPic && dogPic != ""){
      return dogPic; 
    }else {
      return dogUknown
    }
  }

  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = (imageUpload) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        alert("subido Correctamente")
      });
    });
    
  };


  const dogID = doc(db, "users", `${idDog}`);

  const toggleUpdatePicture = async (e) => {
    try {
      await updateDoc(dogID, {
        dogPic: imageUrls,
      });
      navigate("/visit");
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <Sidebar />
    <div className="w-full px-4 sm:px-16 md:px-0 min-h-screen h-full flex justify-center items-center  bg-[#f8e5f9]">
      <div className=" md:ml-[180px] w-full lg:ml-[140px] xl:ml-0 lg:w-9/12 lg:flex min-h-[90vh] h-full pt-16 ">
        <div className="md:max-w-[80%] lg:w-1/3 flex flex-col md:pt-8 lg:pt-16 items-center lg:pr-2 xl:pr-0">
          
          <div className="min-w-fit relative flex justify-center items-center mb-4 ">
          {showMore?(<>
            <img
              src={imgShow()}
              className=" w-[200px] h-[200px] md:h-fit  rounded-full "
            />
            <div className="h-full w-full absolute bg-black rounded-full opacity-70"></div>
            <div className="flex flex-col justify-center items-center absolute ">
              
              <input
                className="bg-[#99599d] flex p-1  rounded-lg text-gray-300 hover:scale-105 w-[107px] "
                type="file"
                onChange={(e) => {
                  uploadFile(e.target.files[0]);
                }}
              />
              <button className="bg-[#99599d] flex p-1 rounded-lg m-2 text-gray-300 hover:scale-105"
              onClick={toggleUpdatePicture}>
                Actualizar Foto
              </button>
            </div>
            </>)
        :<img
        src={imgShow()}
        className=" w-[200px] h-[200px] md:h-fit  rounded-full "
      />}
            <button
              className="absolute bottom-10 right-0  bg-[#99599d] flex p-2 rounded-full text-gray-300 hover:scale-105"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <FaUserEdit />
            </button>
          </div>
          <div className="hidden lg:flex justify-center items-center flex-col">
            <h1 className="text-3xl">{dogName}</h1>
            <p>{breed}</p>
            <p>{ownersName}</p>
            <p>{phone}</p>
            <p>{address}</p>
          </div>
          
        </div>
        <div className="flex flex-col h-full md:max-w-[80%]">
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
                  <div className="w-full flex flex-col xl:flex-row">
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
                    <div className="xl:px-4">
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
                <div className="grid grid-cols-2 m-1 items-center text-justify">
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
                <div className="grid grid-cols-2 m-1 items-center text-justify">
                  <p className="border-gray-400 mx-8 ">Notas</p>
                  <p>{notesOwner}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="p-1 flex items-center rounded-t-lg text-lg">
              Historial medico de la mascota
            </div>
            <div className="mb-4 border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] p-2 text-justify">
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
            <div >
              {visit? visit?.map(
                (item) => (
                  counter++,
                  (<VisitShow idDog={idDog} item={item} counter={counter} />)
                )
              ): <div className="mb-4 border-2 border-gray-400 rounded-lg shadow-lg bg-[#e6d7e7] p-2 items-center flex justify-center"> No Hay Visitas Registradas</div> }
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DogDetails;
