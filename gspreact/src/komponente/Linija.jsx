import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {FaBus} from "react-icons/fa"
 
 
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
function Linija({linija}) {  
 
    console.log(linija)

      let redovi=[]
      for (let i=4;i<24;i++){
        if(linija.interval<10 && (i==6 || i==7 || i==8 || i==13 || i==14 || i ==17 || i==16)){ 
            redovi.push(<tr><th>{i}</th><td>{7+linija.interval}</td><td>{17+linija.interval}</td><td>{27+linija.interval}</td><td>{37+linija.interval}</td>{47+linija.interval}</tr>)
        }else if(linija.interval<20){
            redovi.push(<tr><th>{i}</th><td>{3+linija.interval}</td><td>{17+linija.interval}</td><td>{39+linija.interval}</td> </tr>)
        }else if(i==22 || i==23){
            redovi.push(<tr><th>{i}</th><td>{linija.interval}</td><td>{10+linija.interval}</td> </tr>)
        }else{
            redovi.push(<tr><th>{i}</th><td>{linija.interval}</td><td>{10+linija.interval}</td><td>{15+linija.interval}</td> </tr>)
        }
      }
  return (
    <div >
        
        <h1> <FaBus></FaBus>       {linija.brojLinije}</h1>
        <h2> {linija.pocetnaDestinacija.naziv}</h2>
        <h2> {linija.zavrsnaDestinacija.naziv}</h2>
        <h3> {linija.vreme} min.</h3>
        <h4> Red voznje: </h4>
        <table>
                <tbody>
                    {redovi.map((r)=>r)}

                </tbody>


        </table>

    </div>
  );
}

export default Linija;