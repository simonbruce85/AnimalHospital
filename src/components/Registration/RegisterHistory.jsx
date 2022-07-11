import React, { useEffect, useState } from 'react'
import { storage } from "../../firebase";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const RegisterHistory = ({formData, setFormData}) => {

  const [imageUrls, setImageUrls] = useState([]);
  const [imageName, setImageName] = useState([]);
{/* Uploading the file to firebase and adding the link to the array of documents for this dog*/}
  const uploadFile = (imageUpload) => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("file uploaded")
        setImageUrls(current => [...current,url]);
        setImageName((prev) => [...prev, imageUpload.name]);
      });
    });
  };

{/* updating the form data after the updating of the setImageUrls state is completed*/}
  useEffect(() => {
    setFormData({ ...formData, imgFile:{ imgUrl: imageUrls, imgName: imageName} });
  }, [imageUrls])
  

  return (
    <div
            className=" flex flex-col font-semibold "
          >
            <label>Condiciones Medicas</label>
            <input
              onChange={(e) => setFormData({...formData, healthConditions: e.target.value})}
              className="p-3 my-2 border border-black rounded grid grid-cols-2 "
              placeholder="Condiciones Previas"
              value={formData.healthConditions}
              required
              autoFocus
            />
            <label>Vacunas</label>
            <div className='p-3 my-2 border border-black rounded grid grid-cols-2 min-h-fit'>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            Parvovirosis <input onChange={(e) => setFormData({...formData, parvo: !formData.parvo})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            Quintuple <input onChange={(e) => setFormData({...formData, quintuple: !formData.quintuple})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            Sextuple <input onChange={(e) => setFormData({...formData, sextuple: !formData.sextuple})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            KC <input onChange={(e) => setFormData({...formData, kc: !formData.kc})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            Giardia <input onChange={(e) => setFormData({...formData, giardia: !formData.giardia})} type="checkbox"/>
            </div>
            <div className='flex items-center justify-between w-2/3 accent-[#99599d]'>
            Rabia <input onChange={(e) => setFormData({...formData, rabia: !formData.rabia})} type="checkbox"/>
            </div>
            </div>
            <div className='flex flex-col'>
            <input
                type="file"
                onChange={(e) => {
                  uploadFile(e.target.files[0]);
                }}
                />
                </div>
            <label className="">Notas</label>
            <textarea
              onChange={(e) => setFormData({...formData, notesHistory: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Notas"
              value={formData.notesHistory}
            />

          </div>
  )
}

export default RegisterHistory