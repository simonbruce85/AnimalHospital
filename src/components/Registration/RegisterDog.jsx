import React from 'react'

const RegisterDog = ({formData, setFormData}) => {
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
              type="date"
              placeholder="Notas"
              value={formData.notes}
            />
          </div>
  )
}

export default RegisterDog