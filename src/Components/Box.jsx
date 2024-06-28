import React from "react";
import dust from "./dust.jpg"
import humidity from "./humidity.jpg"
import temp from "./temp.jpg"
import wind from "./wind1.png"
import data from '../Components/a.json'
import { useState, useEffect } from 'react';

function Box()
{
    const [dataa, setData] = useState([]);
    useEffect(() => {
          
    }, []);

    return(
        <div>
        <p className="pre">Predictive Maintenance for AC's</p>
      <p className="iot">Dashboard</p>

      <div className="tbox">
        <p className="ttemp">Temperature:</p>
        <p>{data[data.length-1].temperature}°C</p>
        <img src={temp} className="ptemp" alt="Temperature" />
      </div>

      <div className="dbox">
        <p className="tdust">Dust Value: </p>
        <p>{data[data.length-1].dustDensity}</p>
        <img src={dust} className="pdust" alt="Dust Value" />
      </div>

      <div className="hbox">
        <p className="thumi">Humidity: </p>
        <p>{data[data.length-1].humidity}%</p>
        <img src={humidity} className="phumi" alt="Humidity" />
      </div>

      <img src={wind} className="pwind1" alt="Wind 1" />
      <img src={wind} className="pwind2" alt="Wind 2" />
      
    </div>
        
    )
}

export default Box;