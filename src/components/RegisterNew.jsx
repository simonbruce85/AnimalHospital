import { async } from "@firebase/util";
import { arrayUnion, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../components/AuthContext";
import "firebase/compat/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";


const RegisterNew = () => {

  const [name, setName] = useState("")
  const [ownersName, setOwnersName] = useState("")
  const [breed, setBreed] = useState("")
  const [birthday, setBirthday] = useState("")
  const [weight, setWeight] = useState("")
  const [notes, setNotes] = useState("")
  const navigate = useNavigate()
 
  
  const addDog = async (e) => {
    e.preventDefault();
    try{
     await addDoc(collection(db, "users"), {
        name: name,
        ownersName: ownersName,
        breed: breed,
    });
    setName("");
    setOwnersName("");
    setBreed("");
    setWeight("");
    setBirthday("");
    setNotes("");
  }catch(error){
      console.log(error)
    }
  };

  
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col w-1/2 rounded-lg border border-black font-black">
              <form onSubmit={addDog} className=" flex flex-col m-4  font-semibold ">
                <label>Nombre de la Mascota</label>
                <input onChange={(e) => setName(e.target.value)}
                  className="p-3 my-2 border border-black rounded "
                  placeholder="Nombre de la Mascota"
                  value={name}
                  required
                  autoFocus
                />
                <label >Nombre del dueño</label>
                <input onChange={(e) => setOwnersName(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Nombre del Dueno"
                  value={ownersName}
                  required
                />
                <label >Raza</label>
                <input onChange={(e) => setBreed(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Raza"
                  value={breed}
                  required
                />
                <label >Peso (Kg)</label>
                <input onChange={(e) => setWeight(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Peso"
                  value={weight}
                  type="number"
                  min="0"
                  max="50"
                  step="0.1"
                />
                <label className="">Fecha de Nacimiento</label>
                <input onChange={(e) => setBirthday(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  type="date"
                  placeholder="dd-mm-yyyy"
                  value={birthday}
                />
                <label className="">Notas</label>
                <textarea onChange={(e) => setNotes(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                  value={notes}
                />
                <button type="submit" className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white py-3 my-6 rounded-full font-bold">
                  Añadir
                </button>
                
              </form>
            </div>
            </div>
    </>
  );
};

export default RegisterNew;
