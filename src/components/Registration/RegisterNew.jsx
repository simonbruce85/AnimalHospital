import { async } from "@firebase/util";
import {
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";
import "firebase/compat/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

import RegisterOwner from "./RegisterOwner";
import RegisterDog from "./RegisterDog";
import RegisterHistory from "./RegisterHistory";

const RegisterNew = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    color: "",
    weight: "",
    birthday: "",
    ownersName: "",
    address: "",
    phone: "",
    notes: "",
    notesOwner:"",
    healthConditions:"",
    notesHistory:"",
  });

  const addDog = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        dogName: formData.dogName,
        breed: formData.breed,
        color: formData.color,
        weight: formData.weight,
        birthday: formData.birthday,
        ownersName: formData.ownersName,
        address: formData.address,
        phone: formData.phone,
        notes: formData.notes,
        notesOwner: formData.notesOwner,
        healthConditions: formData.healthConditions,
        notesHistory: formData.notesHistory,
      });
      alert("Agregado ")
      setPage((currPage) => currPage - 2);
      setFormData({
        dogName: "",
        breed: "",
        color: "",
        weight: "",
        birthday: "",
        ownersName: "",
        address: "",
        phone: "",
        notes: "",
        notesOwner:"",
        healthConditions:"",
        notesHistory:"",
      })
    } catch (error) {
      console.log(error);
    }
  };


  const validate = (formData) => {
    const errors = {};
    if (!formData.ownersName) {
      errors.ownersName = "Nombre del Dueño requerido";
    }
    if (!formData.address) {
      errors.address = "Dirección requerida";
    }
    if (!formData.phone) {
      errors.phone = "Telefono requerido";
    return errors;
    }
  };


  const FormTitles = [
    "Informacion de la Mascota",
    "Informacion del dueño",
    "Historia Clinica",
  ];



  const PageDisplay = () => {
    if (page === 0) {
      return <RegisterDog formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <RegisterOwner formData={formData} setFormData={setFormData} formErrors={formErrors} />;
    } else {
      return <RegisterHistory formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className=" w-full h-full min-h-screen flex justify-center items-center ">
      <div className="md:w-1/3 md:h-[80vh] min-h-fit rounded-lg border border-black font-black p-6">
        <div className="w-full h-full flex flex-col ">
          <div className="flex justify-center items-center text-xl mb-4">
            <h1 className="border-b-4 border-[#F58352]">{FormTitles[page]}</h1>
          </div>
          <form onSubmit={addDog}  className="h-full flex flex-col justify-between ">
            <div  className="">{PageDisplay()}</div>
            <div className="flex">
              <button
                disabled={page == 0}
                hidden={page == 0}
                className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white p-3 rounded-full font-bold"
                type="button"
                onClick={() => {
                  console.log(formData)
                  setPage((currPage) => currPage - 1);
                }}
              >
                Anterior
              </button>
              <button
                className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white p-3 rounded-full font-bold ml-auto"
                disabled={page ==  FormTitles.length - 1}
                hidden={page ==  FormTitles.length - 1}
                type="button"
                onClick={() => {
                  // if(page === 1){
                  //   setFormErrors(validate(formData));
                  //   if (Object.keys(validate(formData)).length === 0) {
                  //     setPage((currPage) => currPage + 1);
                  //   }else{
                  //     setFormErrors(validate(formData));
                  //   }
                  // }else{
                    setPage((currPage) => currPage + 1);
                  // }
                }}
              >Siguiente
              </button>
              <button
                className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white p-3 rounded-full font-bold ml-auto"
                type="submit"
                disabled={page !==  FormTitles.length - 1}
                hidden={page !==  FormTitles.length - 1}
              >Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterNew;
