import { async } from "@firebase/util";
import {
    increment,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "firebase/compat/firestore";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import perritos from "../../assets/perritos.webp"

const AddNewVisit = ({idDog}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    visitReason: "",
    symptoms: "",
    parvo: false,
    quintuple: false,
    sextuple: false,
    kc: false,
    giardia: false,
    rabia: false,
    diagnostic: "",
    clinicTreatment: "",
    houseTreatment: "",
    despara: false,
    exams: "",
  });

  const dogID = doc(db, 'users', `${idDog.idDog}`)

  const toggleAddVisit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(dogID, {
        visit: arrayUnion({
            visitReason: formData.visitReason,
            symptoms: formData.symptoms,
            // dateVisited: serverTimestamp(),
            parvo: formData.parvo,
            quintuple: formData.quintuple,
            sextuple: formData.sextuple,
            kc: formData.kc,
            giardia: formData.giardia,
            rabia: formData.rabia,
            diagnostic: formData.diagnostic,
            clinicTreatment: formData.clinicTreatment,
            houseTreatment: formData.clinicTreatment,
            despara: formData.despara,
            exams: formData.exams,
        })
    });
      alert("Agregado ");
      setFormData({
        visitReason: "",
        symptoms: "",
        dateVisited: serverTimestamp(),
        parvo: false,
        quintuple: false,
        sextuple: false,
        kc: false,
        giardia: false,
        rabia: false,
        diagnostic: "",
        clinicTreatment: "",
        houseTreatment: "",
        despara: false,
        exams: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full h-full min-h-screen flex justify-center items-center bg-cover " style={{ backgroundImage: `url(${perritos})` }}>
      <div className="md:w-1/3 min-w-fit h-fit my-6 md:mt:0 flex justify-between rounded-lg border bg-white border-black font-black p-6">
        <div className="w-full h-full flex flex-col ">
          <form
            onSubmit={toggleAddVisit}
            className="h-full flex flex-col justify-between "
          >
            <div className=" flex flex-col font-semibold ">
              <label>Razon de la visita</label>
              <input
                onChange={(e) =>
                  setFormData({ ...formData, visitReason: e.target.value })
                }
                className="p-3 my-2 border border-black rounded "
                placeholder="Razon de la visita"
                value={formData.visitReason}
                required
                autoFocus
              />
              <label className="">Sintomas</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, symptoms: e.target.value })
                }
                className="p-3 my-2 border border-black rounded"
                placeholder="Sintomas"
                value={formData.symptoms}
              />
               <label className="">Diagnostico</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, diagnostic: e.target.value })
                }
                className="p-3 my-2 border border-black rounded"
                placeholder="Diagnostico"
                value={formData.diagnostic}
              />
              <label className="">Tratamiento en la clinica</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, clinicTreatment: e.target.value })
                }
                className="p-3 my-2 border border-black rounded"
                placeholder="Tratamiento en la clinica"
                value={formData.clinicTreatment}
              />
              <label className="">Tratamiento en el hogar</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, houseTreatment: e.target.value })
                }
                className="p-3 my-2 border border-black rounded"
                placeholder="Tratamiento en el hogar"
                value={formData.houseTreatment}
              />
              <label className="">Examenes Realizados</label>
              <textarea
                onChange={(e) =>
                  setFormData({ ...formData, exams: e.target.value })
                }
                className="p-3 my-2 border border-black rounded"
                placeholder="Tratamiento en el hogar"
                value={formData.exams}
              />
            </div>
            <label>Vacunas</label>
            <div className='p-3 my-2 border border-black rounded grid grid-cols-2 min-h-fit'>
            <div className='flex items-center justify-between w-2/3'>
            Parvovirosis <input onChange={(e) => setFormData({...formData, parvo: !formData.parvo})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            Quintuple <input onChange={(e) => setFormData({...formData, quintuple: !formData.quintuple})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            Sextuple <input onChange={(e) => setFormData({...formData, sextuple: !formData.sextuple})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            KC <input onChange={(e) => setFormData({...formData, kc: !formData.kc})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            Giardia <input onChange={(e) => setFormData({...formData, giardia: !formData.giardia})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            Rabia <input onChange={(e) => setFormData({...formData, rabia: !formData.rabia})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3'>
            Desparacitación <input onChange={(e) => setFormData({...formData, despara: !formData.despara})} type="checkbox"/>
            </div>
            </div>
            <div>

            </div>
            <div className="flex">
              <button
                className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white p-3 rounded-full font-bold ml-auto hover:scale-105"
                type="submit"
              >
                Agregar Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewVisit;
