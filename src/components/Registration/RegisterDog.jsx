import React, { useEffect, useState } from 'react'
import { storage } from "../../firebase";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const RegisterDog = ({formData, setFormData}) => {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("file uploaded")
        setImageUrls(url);
      });
    });
  };

{/* updating the form data after the updating of the setImageUrls state is completed*/}
useEffect(() => {
  setFormData({ ...formData, dogPic: imageUrls });
}, [imageUrls])

  return (
          <div
            className=" flex flex-col font-semibold "
          >
            <label>Nombre de la Mascota</label>
            <input
              onChange={(e) => setFormData({...formData, dogName: e.target.value})}
              className="p-3 my-2 border border-black rounded "
              placeholder="Nombre de la Mascota"
              value={formData.name}
              required
              autoFocus
            />
            <label>Raza</label>
            <input
              onChange={(e) => setFormData({...formData, breed: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Raza"
              value={formData.breed}
              required
            />
            <label>Color</label>
            <input
              onChange={(e) => setFormData({...formData, color: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Color"
              value={formData.color}
            />
            <label>Peso (Kg)</label>
            <input
              onChange={(e) => setFormData({...formData, weight: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Peso"
              value={formData.weight}
              type="number"
              min="0"
              max="50"
              step="0.1"
            />
            <label className="">Fecha de Nacimiento</label>
            <input
              onChange={(e) => setFormData({...formData, birthday: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              type="date"
              placeholder="dd-mm-yyyy"
              value={formData.birthday}
            />
            <label className="">Notas</label>
            <textarea
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Notas"
              value={formData.notes}
            />
             <label className="mt-2 mb-1">Foto de la mascota</label>
            <div className='flex flex-col'>
            <input
                type="file"
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
                />
              <button className="bg-gradient-to-r from-[#F06CA6] via-[#F58352] to-[#F06CA6] text-white w-fit p-2 my-2 rounded-full font-bold hover:scale-105"  type="button" onClick={uploadFile}> Subir Foto</button>
                </div>
          </div>
          
  )
}

export default RegisterDog