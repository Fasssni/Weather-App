import React from "react";
import cl from "./ModalList.module.css";

const ModalList=({autoSearch,searchName,setSearchName})=>{ 
    var i=0;
 
    var list=autoSearch.slice(0,7);

    const addList=(list,setSearchName)=>{
       console.log(list)
       while(searchName.length>=1){
       const listOptions=list.map((e)=>
             <option className={cl.list}onClick={()=> setSearchName(e.name)} value={e.name} key={i++} >{e.name}</option>)
             return(listOptions)}
    }


 

    return(
        
        <div className={cl.main}>
             
            {addList(list,setSearchName )}
      
         
      
        </div>
    )
}


export default ModalList;