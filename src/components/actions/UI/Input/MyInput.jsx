import React from "react";
import cl from "./MyInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlassLocation} from '@fortawesome/free-solid-svg-icons';


const MyInput=({searchName,setSearchName,fetchPosts})=>{
    return(
    <div className={cl.main}>

     <FontAwesomeIcon className={cl.icon} icon={faMagnifyingGlassLocation} />
     <input className={cl.input} value={searchName} placeholder="Название города(ENG)" onChange={e=>{setSearchName(e.target.value)}}></input>
    
    <button className={cl.MyBTN} onClick={fetchPosts}>Найти</button>
        
    </div>

    )
}

export default MyInput;