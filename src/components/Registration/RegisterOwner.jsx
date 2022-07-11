import React from 'react'

const RegisterOwner = ({formData, setFormData,formErrors}) => {
  return (
    <div
    className=" flex flex-col "
  >
            <label>Nombre del dueño</label>
            <input
              onChange={(e) => setFormData({...formData, ownersName: e.target.value})}
              className="p-3 my-2 border border-black rounded"
              placeholder="Nombre del Dueño"
              value={formData.ownersName}
              autoFocus
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
              placeholder="Notas"
              value={formData.notesOwner}
            />
          </div>
  )
}

export default RegisterOwner