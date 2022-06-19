import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddNewVisit from "../components/Visit/AddNewVisit";

const AddVisitPage = () => {
  const { state } = useLocation();
  const idDog = state;
  return (
    <div className="md:flex ">
    <Sidebar/>
    <AddNewVisit idDog={idDog}/>
    </div>
  );
};

export default AddVisitPage;
