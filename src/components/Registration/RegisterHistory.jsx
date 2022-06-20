import React from 'react'

const RegisterHistory = ({formData, setFormData}) => {
  return (
    <div
            className=" flex flex-col font-semibold w "
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