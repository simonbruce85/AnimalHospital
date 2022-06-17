import React from 'react'

const RegisterOwner = ({formData, setFormData,formErrors}) => {
  return (
    <div
    className=" flex flex-col font-semibold h-full w-full"
  >
            <label>Nombre del dueño</label>
            <input
              onChange={(e) => setFormData({...formData, ownersName: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Nombre del Dueno"
              value={formData.ownersName}
            />
            <p className='text-red-600'>{formErrors.ownersName}</p>
            <label>Direccion</label>
            <input
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Direccion"
              value={formData.address}
            />
            <p className='text-red-600'>{formErrors.address}</p>
            <label>Telefono</label>
            <input
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Telefono"
              value={formData.phone}
            />
            <p className='text-red-600'>{formErrors.phone}</p>
            <label className="">Notas</label>
            <textarea
              onChange={(e) => setFormData({...formData, notesOwner: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Fecha de Nacimiento"
              value={formData.notesOwner}
            />
          </div>
  )
}

export default RegisterOwner