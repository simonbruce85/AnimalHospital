import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../components/AuthContext";

const RegisterNew = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {user,signUp} =UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error){
      console.log(error)
    }

  }
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center ">
        <div className="flex flex-col w-1/2 rounded-lg border border-black font-black">
              <form onSubmit={handleSubmit} className=" flex flex-col m-4  font-semibold ">
                <label for="name">Nombre</label>
                <p>klasdjhfas</p>
                <input onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 border border-black rounded "
                  type="name"
                  id="name"
                  required
                  autoFocus
                />
                <label for="dueno">Nombre del dueno</label>
                <input onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  type="dueno"
                  placeholder="Nombre del Dueno"
                  required
                />
                <label for="raza">Raza</label>
                <input onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  type="raza"
                  required
                />
                <label className="" for="name">Nombre</label>
                <input onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 border border-black rounded"
                  type="date"
                  placeholder="Fecha de Nacimiento"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p> Need Help?</p>
                </div>
                
              </form>
            </div>
            </div>
    </>
  );
};

export default RegisterNew;
