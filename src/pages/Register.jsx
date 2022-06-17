import React from 'react'
import RegisterNew from '../components/Registration/RegisterNew'
import Sidebar from '../components/Sidebar'

const Register = () => {
  return (
    <div className='flex flex-col md:flex-row '>
        <Sidebar/>
        <RegisterNew/>
        </div>
  )
}

export default Register