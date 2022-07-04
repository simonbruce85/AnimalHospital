import React, { useState } from 'react'

const VisitShow = ({item, counter}) => {

    const [showMore, setShowMore] = useState(false);
  return (
      <div >
        
        <p onClick={() => {
        setShowMore(!showMore);
      }} className="border border-gray-400 flex justify-center cursor-pointer">Visita Numero {counter}</p>
        {showMore && (
          <div>
      <p className="border-x border-b border-gray-400">Razon de la visita: {item.visitReason}</p>
      <p className="border-x border-b border-gray-400">Sintomas: {item.symptoms}</p>
      <p className="border-x border-b border-gray-400">Diagnostico: {item.diagnostic}</p>
      <p className="border-x border-b border-gray-400">Tratamiento en la clinica: {item.clinicTreatment}</p>
      <p className="border-x border-b border-gray-400">Tratamiento Indicado: {item.houseTreatment}</p>
      <p className="border-x border-b border-gray-400">Examenes Realizados: {item.exams}</p>
      {item.imgUrl.map((imageUrl) => (
        <p className="border-x border-b border-gray-400 ">Examen: <a href={imageUrl} className="text-blue-500 cursor-pointer border-b border-blue-500">Ver Examen</a></p>
      ))}
      <p className="pr-4 border-x border-gray-400">Vacunas:</p>
        <div className="w-full flex border-x border-gray-400">
          <div >
          <p>Parvo: {item.parvo ? "Si" : "No"}</p>
          <p>Quintuple: {item.quintuple ? "Si" : "No"}</p>
          <p>Sextuple: {item.sextuple ? "Si" : "No"}</p>
          </div>
          <div className="px-4">
          <p>KC: {item.kc ? "Si" : "No"}</p>
          <p>Giardia: {item.giardia ? "Si" : "No"}</p>
          <p>Rabia {item.rabia ? "Si" : "No"}</p>
          <p>Desparasitación {item.despara ? "Si" : "No"}</p>
          </div>
        </div>
        
        </div>
        )}
      </div>
  )
}

export default VisitShow