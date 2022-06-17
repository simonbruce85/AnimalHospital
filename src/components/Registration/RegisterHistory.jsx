import React from 'react'

const RegisterHistory = ({formData, setFormData}) => {
  return (
    <div
            className=" flex flex-col font-semibold "
          >
            <label>Condiciones Medicas</label>
            <input
              onChange={(e) => setFormData({...formData, healthConditions: e.target.value})}
              className="p-3 my-2 border border-black rounded "
              placeholder="Nombre de la Mascota"
              value={formData.healthConditions}
              required
              autoFocus
            />
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