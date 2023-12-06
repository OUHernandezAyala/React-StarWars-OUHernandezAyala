import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { Context } from "../store/appContext";

const People = () =>{
    const {store, actions}=useContext(Context)
    const location = useLocation()
    const info = location.pathname
    console.log(location)
    console.log(info)
    useEffect(()=>{
        actions.detailsInfo(info)
    },[])
    return(
        <h1>Hola</h1>
    )
}

export default People