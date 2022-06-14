import React from 'react'
import RegisterNew from '../components/RegisterNew'
import Sidebar from '../components/Sidebar'

const Register = () => {
  return (
    <div className='md:flex'>
        <Sidebar/>
        <RegisterNew/>
        </div>
  )
}

export default Register