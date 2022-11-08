import logo from './logo.svg';

import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from "react";
import Allcities from "./sources/city.list.min.json"
import MyForm from './components/actions/UI/MyForm';
import "./styles/main.css"
import MyInput from './components/actions/UI/Input/MyInput';
import ModalList from './components/actions/UI/ModalList/ModalList';
import MyMenu from './components/actions/UI/MyMenu/MyMenu';

function App() {

   
  const [searchName,setSearchName]=useState("")

  const myArray=Allcities.filter((p)=>p.name==searchName&&p.country=="RU");

  const autoSearch=Allcities.filter((p)=>{
    return(p.name.toLowerCase().includes(searchName.toLowerCase())&&p.country=="RU")});
   

  const [name, setName]=useState({key:0,name:"Kukmor",temp:25+273.15, feels_like:28+273.15,clouds:"Sunny"})
 

  useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55&lon=54&appid=260a46a4e9781d8be1af802f31cbfef6`)
          .then(res=>res.json())
          .then(res=>console.log(res))
          .catch((error)=>console.error(error.status))
          .finally(console.log("success"))
          },[]
)



  async function fetchPosts(e){
    const lat=myArray[0].coord.lat
    const lon=myArray[0].coord.lon
    

    

    try{
      if(searchName!==""){
    e.stopPropagation()
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=260a46a4e9781d8be1af802f31cbfef6`);
    setName({key:response.data.id,name:response.data.name,clouds:response.data.weather[0].main,temp:response.data.main.temp,feels_like:response.data.main.feels_like, icon:response.data.weather[0].icon})}
    else{
      alert("Введите название города!")
    }
  
    }catch(err){
      alert.error(err)
    }finally{
    setSearchName("")
    console.log(name)}
    
    
    



    



  }  
 



  const setSearch=({setSearchName,fetchPosts,p})=>{
   return(setSearchName(p.name),fetchPosts())
  }
  const searchFit=(e)=>{
    return setSearchName(`${e.name}`)
  }
 
 

  return (
    <div  className="App">
     
      <div>
          <MyInput searchName={searchName} fetchPosts={fetchPosts} setSearchName={setSearchName} ></MyInput>
          <ModalList searchName={searchName} setSearchName={setSearchName} searchFit={searchFit} autoSearch={autoSearch}></ModalList>
       </div>
       <MyForm name={name}></MyForm> 
  
       
        

       
      
    
   
  
    </div>
  ); 
}

export default App;
