import { arrayUnion, doc, increment, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "firebase/compat/firestore";
import { db } from "../../firebase";
import perritos from "../../assets/perritos.webp";
//file upload imports
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import Sidebar from "../Sidebar";
{
  /*File upload imports */
}
const timeNow = new Date();

const date = `${timeNow.getDate()}/${
  timeNow.getMonth() + 1
}/${timeNow.getFullYear()}`;

const AddNewVisit = () => {
  //file upload
  const [imageUrls, setImageUrls] = useState([]);
  const [imageName, setImageName] = useState([]);

  const { state } = useLocation();
  const { idDog, dogName, ownersName } = state;

  const uploadFile = (imageUpload) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("file uploaded");
        setImageUrls((prev) => [...prev, url]);
        setImageName((prev) => [...prev, imageUpload.name]);
      });
    });
  };

  {
    /* updating the form data after the updating of the setImageUrls state is completed*/
  }
  useEffect(() => {
    setFormData({
      ...formData,
      imgFile: { imgUrl: imageUrls, imgName: imageName },
    });
  }, [imageUrls]);
  //file upload

  

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    visitReason: "",
    symptoms: "",
    doctor: "",
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
    imgFile: {
      imgName: "",
      imgUrl: "",
    },
  });

  const dogID = doc(db, "users", `${idDog}`);

  const toggleAddVisit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(dogID, {
        visit: arrayUnion({
          visitReason: formData.visitReason,
          symptoms: formData.symptoms,
          idVisit: v4(),
          dateAdded: date,
          doctor: formData.doctor,
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
          imgFile: {
            imgName: formData.imgFile.imgName,
            imgUrl: formData.imgFile.imgUrl,
          },
        }),
      });
      alert("Agregado ");
      setFormData({
        visitReason: "",
        symptoms: "",
        doctor: "",
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
        imgFile: {
          imgName: "",
          imgUrl: "",
        },
      });
      setImageUrls([]);
      setImageName([]);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Sidebar />
      <div
        className=" w-full h-full min-h-screen flex  justify-center items-center bg-cover pt-16 md:pt-0"
        style={{ backgroundImage: `url(${perritos})` }}
      >
        <div className="md:w-1/3 m-2 min-w-fit h-fit my-6 flex justify-between rounded-lg border bg-white border-black font-black p-6">
          <div className="w-full h-full flex flex-col ">
            <div className=" w-full mb-2 flex justify-center items-center">
              <p className="border-b-2 border-[#99599d]">
                Hola, {dogName} mascota de {ownersName}
              </p>
            </div>
            <form
              onSubmit={toggleAddVisit}
              className="h-full flex flex-col justify-between "
            >
              <div className=" flex flex-col font-semibold mb-2 ">
              <label className="mb-1">Atendido por</label>
                <div className="flex justify-between xl:w-9/12  "onChange={(e) =>
                    setFormData({ ...formData, doctor: e.target.value })
                  }>
                  <div className="flex items-center">
                    <input type="radio" name="doctor" value="Rosa" className="mr-2 accent-[#99599d]" />
                    <label className=" ">Rosa</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="doctor" value="Maria" className="mr-2 accent-[#99599d]" />
                    <label className="">Maria</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="doctor" value="Nakari" className="mr-2 accent-[#99599d]" />
                    <label className="">Nakari</label>
                  </div>
                </div>
                </div>
                <label>Razón de la visita</label>
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
                <label className="">Síntomas</label>
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
                    setFormData({
                      ...formData,
                      clinicTreatment: e.target.value,
                    })
                  }
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Tratamiento en la clinica"
                  value={formData.clinicTreatment}
                />
                <label className="">Tratamiento Indicado</label>
                <textarea
                  onChange={(e) =>
                    setFormData({ ...formData, houseTreatment: e.target.value })
                  }
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Tratamiento Indicado"
                  value={formData.houseTreatment}
                />
                <label className="">Examenes Realizados</label>
                <textarea
                  onChange={(e) =>
                    setFormData({ ...formData, exams: e.target.value })
                  }
                  className="p-3 my-2 border border-black rounded"
                  placeholder="Examenes Realizados"
                  value={formData.exams}
                />
                
                <label className="py-2">Subir Archivo</label>
                <input
                  className="form-control w-full px-3 py-1.5 border border-solid border-black rounded transition ease-in-out m-0"
                  type="file"
                  onChange={(e) => {
                    uploadFile(e.target.files[0]);
                  }}
                />
              
              <label className="pt-2">Vacunas</label>
              <div className=" p-3 my-2 border border-black rounded grid grid-cols-2 min-h-fit">
                <div className="flex items-center justify-between xl:w-2/3 w-[90%] accent-[#99599d]">
                  Parvovirosis{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, parvo: !formData.parvo })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between w-2/3 accent-[#99599d] ">
                  Quintuple{" "}
                  <input
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        quintuple: !formData.quintuple,
                      })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between xl:w-2/3 w-[90%] accent-[#99599d] ">
                  Sextuple{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, sextuple: !formData.sextuple })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between w-2/3 accent-[#99599d] ">
                  KC{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, kc: !formData.kc })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between xl:w-2/3 w-[90%] accent-[#99599d] ">
                  Giardia{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, giardia: !formData.giardia })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between w-2/3 accent-[#99599d] ">
                  Rabia{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, rabia: !formData.rabia })
                    }
                    type="checkbox"
                  />
                </div>
                <div className="flex items-center justify-between xl:w-2/3 w-[90%] accent-[#99599d] ">
                  Desparasitación{" "}
                  <input
                    onChange={(e) =>
                      setFormData({ ...formData, despara: !formData.despara })
                    }
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-[#99599d]  text-white p-3 rounded-full font-bold ml-auto hover:scale-105"
                  type="submit"
                >
                  Agregar Visita
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewVisit;
