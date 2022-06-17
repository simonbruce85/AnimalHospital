import React from 'react'
import DogList from '../components/DogList'
import Sidebar from '../components/Sidebar'

const NewVisit = () => {
  return (
    <div className="md:flex ">
    <Sidebar/>
    <DogList/>
    </div>
  )
}

export default NewVisit