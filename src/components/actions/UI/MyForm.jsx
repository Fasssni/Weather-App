import React from "react";
import cl from "./MyForm.module.css"


const MyForm=({name})=>{


    return( 
        <form className={cl.MyForm}> 
   
       <h1>{name.name}</h1>
        <p> {name.clouds}</p>  
        <h2>Температура:{Math.round(name.temp-273.15)}°</h2>
        <p>Ощущается как:{Math.round(name.feels_like-273.15)}°</p>
        






             
            
        </form>
    )
}


export default MyForm;