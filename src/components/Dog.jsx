import React from 'react'

const Dog = ({id, item}) => {
    
  return (
      <div className="w-full border-t border-black grid grid-cols-3 justify-between p-2 h-full">
        <p>{item.name}</p>
        <p>{item.ownersName}</p>
        <p>{item.breed}</p>
       
    </div>
  )
}

export default Dog