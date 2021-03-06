//import React from "react";
import "./css/style.css";
import React, { useEffect, useState } from "react";

const Tempapp = () => {

  const [city,setCity] = useState(null);
  const [search,setSearch] =useState("mumbai");

  useEffect( ()=>{
   const fetchApi=async() =>{
         const APP_KEY = process.env.REACT_APP_WEATHER_KEY;
       const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APP_KEY}`;
       const response = await fetch(url)
       //console.log(response)
       const resJson =await response.json();
       setCity(resJson.main);
    };


    fetchApi();
      },[search]
  )

  return (
      <>
    <div className="box">
      <div className="inputData">
        <input type="search" 
        value={search}
        className="inputField" 
        onChange={(event) => {  setSearch(event.target.value)}} />
      </div>
     
     { !city ?      (<p className="errorMsg"  > No Data Found </p>):(
<div>
<div className="info">
<h2 className="location">
  <i className="fas fa-street-view"> </i>{search} 
</h2>
<h1 className="temp">
{city.temp} °C
</h1>
<h2 className="tempmin_max"> min:{city.temp_min} °C | max :{city.temp_max} °C </h2>
</div>

<div className="wave -one"></div>
<div className="wave -two"></div>
<div className="wave -three"></div>
</div>
     )

     }
    
    </div>
    </>
  );
};

export default Tempapp;
