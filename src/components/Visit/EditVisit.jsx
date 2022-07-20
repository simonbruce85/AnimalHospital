import React, { useState } from "react";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const EditVisit = ({ item, setEditShow, editShow, idDog }) => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    idVisit: item.idVisit,
    visitReason: item.visitReason,
    symptoms: item.symptoms,
    parvo: item.parvo,
    quintuple: item.quintuple,
    sextuple: item.sextuple,
    kc: item.kc,
    giardia: item.giardia,
    rabia: item.rabia,
    despara: item.despara,
    diagnostic: item.diagnostic,
    clinicTreatment: item.clinicTreatment,
    houseTreatment: item.houseTreatment,
    dateAdded: item.dateAdded,
    exams: item.exams,
    imgFile: {
      imgName: item.imgFile.imgName,
      imgUrl: item.imgFile.imgUrl,
    },
  });

  //state to keep the information before the edition in order to indicate what array to delete from the database, done like this due to firebase limitations
  const [dataToDelete, setDataToDelete] = useState({
    idVisit: item.idVisit,
    visitReason: item.visitReason,
    symptoms: item.symptoms,
    parvo: item.parvo,
    quintuple: item.quintuple,
    sextuple: item.sextuple,
    kc: item.kc,
    giardia: item.giardia,
    rabia: item.rabia,
    despara: item.despara,
    diagnostic: item.diagnostic,
    dateAdded: item.dateAdded,
    clinicTreatment: item.clinicTreatment,
    houseTreatment: item.houseTreatment,
    exams: item.exams,
    imgFile: {
      imgName: item.imgFile.imgName,
      imgUrl: item.imgFile.imgUrl,
    },
  });

//identifier for the doc we are working with
const dogID = doc(db, "users", `${idDog}`);

const removeConfirm = () => {
    prompt("Estas seguro que quieres eliminar esta visita")
    toggleRemoveVisit();
}

const toggleRemoveVisit = async (e) => {
    try {
        await updateDoc(dogID, {
        visit: arrayRemove({
        idVisit: dataToDelete.idVisit,
          visitReason: dataToDelete.visitReason,
          symptoms: dataToDelete.symptoms,
          // dateVisited: serverTimestamp(),
          parvo: dataToDelete.parvo,
          quintuple: dataToDelete.quintuple,
          sextuple: dataToDelete.sextuple,
          kc: dataToDelete.kc,
          dateAdded: dataToDelete.dateAdded,
          giardia: dataToDelete.giardia,
          rabia: dataToDelete.rabia,
          diagnostic: dataToDelete.diagnostic,
          clinicTreatment: dataToDelete.clinicTreatment,
          houseTreatment: dataToDelete.houseTreatment,
          despara: dataToDelete.despara,
          exams: dataToDelete.exams,
          imgFile: {
            imgName: dataToDelete.imgFile.imgName,
            imgUrl: dataToDelete.imgFile.imgUrl,
        },
    }),
});
navigate("/visit")
    } catch (error) {
      console.log(error);
    }

};


//function to edit a visit, here the function removes the old visit and adds a new one, we have two states created, one to get the information of the props and be the reference for the visit it will remove and other to be modified with the changes made through the inputs
  const toggleEditVisit = async (e) => {

    toggleRemoveVisit();

    try {
        await updateDoc(dogID, {
        visit: arrayUnion({
            idVisit: formData.idVisit,
                  visitReason: formData.visitReason,
                  symptoms: formData.symptoms,
                  // dateVisited: serverTimestamp(),
                  parvo: formData.parvo,
                  quintuple: formData.quintuple,
                  sextuple: formData.sextuple,
                  kc: formData.kc,
                  dateAdded: formData.dateAdded,
                  giardia: formData.giardia,
                  rabia: formData.rabia,
                  diagnostic: formData.diagnostic,
                  clinicTreatment: formData.clinicTreatment,
                  houseTreatment: formData.houseTreatment,
                  despara: formData.despara,
                  exams: formData.exams,
                  imgFile: {
                    imgName: formData.imgFile.imgName,
                    imgUrl: formData.imgFile.imgUrl,
                  },
                }),
      });
      navigate("/visit")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className=" w-full">
        Razon de la visita:{" "}
        <input
          onChange={(e) =>
            setFormData({ ...formData, visitReason: e.target.value })
          }
          className="border rounded-lg w-1/2 border-black pl-2"
          value={formData.visitReason}
        ></input>
      </p>
      <p className="">
        Sintomas:{" "}
        <input
          className="border rounded-lg border-black pl-2 w-1/2"
          onChange={(e) =>
            setFormData({ ...formData, symptoms: e.target.value })
          }
          value={formData.symptoms}
        ></input>
      </p>
      <p className="">
        Diagnostico:{" "}
        <input
          className="border rounded-lg border-black pl-2 w-1/2"
          onChange={(e) =>
            setFormData({ ...formData, diagnostic: e.target.value })
          }
          value={formData.diagnostic}
        ></input>
      </p>
      <p className="flex items-center ">
        Tratamiento en la clinica:{" "}
        <textarea
          className="border rounded-lg border-black ml-2 w-1/2"
          onChange={(e) =>
            setFormData({ ...formData, clinicTreatment: e.target.value })
          }
          value={formData.clinicTreatment}
          rows="3"
        ></textarea>
      </p>
      <p className=" flex items-center">
        Tratamiento Indicado:{" "}
        <textarea
          className="border rounded-lg border-black ml-2 w-1/2"
          onChange={(e) =>
            setFormData({ ...formData, houseTreatment: e.target.value })
          }
          value={formData.houseTreatment}
          rows="3"
        ></textarea>
      </p>
      <p className=" flex items-center">
        Examenes Realizados:{" "}
        <textarea
          className="border rounded-lg border-black ml-2 w-1/2"
          onChange={(e) => setFormData({ ...formData, exams: e.target.value })}
          value={formData.exams}
          rows='3'
        ></textarea>
      </p>
      {/*If there is any file, show the files section*/}
      {item.imgFile.imgName.length > 0 && (
        <div className=" flex items-center">
          <p>Archivos</p>
        </div>
      )}
      <p className="pr-4 ">Vacunas:</p>
      <div className="w-full flex ">
        <div>
          <p>
            Parvo:{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, parvo: !formData.parvo })
              }
              type="checkbox"
              defaultChecked={formData.parvo}
              className="accent-[#99599d]"
            />
          </p>
          <p>
            Quintuple:{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, quintuple: !formData.quintuple })
              }
              type="checkbox"
              defaultChecked={formData.quintuple}
              className="accent-[#99599d]"
            />
          </p>
          <p>
            Sextuple:{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, sextuple: !formData.sextuple })
              }
              type="checkbox"
              defaultChecked={formData.sextuple}
              className="accent-[#99599d]"
            />
          </p>
        </div>
        <div className="px-4">
          <p>
            KC:{" "}
            <input
              onChange={(e) => setFormData({ ...formData, kc: !formData.kc })}
              type="checkbox"
              defaultChecked={formData.kc}
              className="accent-[#99599d]"
            />
          </p>
          <p>
            Giardia:{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, giardia: !formData.giardia })
              }
              type="checkbox"
              defaultChecked={formData.giardia}
              className="accent-[#99599d]"
            />
          </p>
          <p>
            Rabia{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, rabia: !formData.rabia })
              }
              type="checkbox"
              defaultChecked={formData.rabia}
              className="accent-[#99599d]"
            />
          </p>
          <p>
            Desparasitación{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, despara: !formData.despara })
              }
              type="checkbox"
              defaultChecked={formData.despara}
              className="accent-[#99599d]"
            />
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center pb-4">
        <button
          onClick={() => {
            toggleEditVisit();
          }}
          className="h-fit bg-[#99599d] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
          type="button"
        >
          Confirmar
        </button>
        <button
          onClick={() => {
            removeConfirm();
          }}
          className="h-fit bg-[#99599d] p-1 px-2 m-1 flex items-center rounded-full text-gray-300 hover:scale-105"
          type="button"
        >
          Eliminar Visita
        </button>
      </div>
    </div>
  );
};

export default EditVisit;
