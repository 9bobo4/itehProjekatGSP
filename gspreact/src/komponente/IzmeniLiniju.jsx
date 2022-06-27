import React from 'react'; 
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const IzmeniLiniju = ({destinacije}) => {

    const [linijaData,setLinijaData]=useState({
        id:0,
        brojLinije:0,
        vreme:0,
        pocetnaDestinacija:1,
        zavrsnaDestinacija:1, 
        tipLinije:1,
        zona:1
    });
 
    let navigate = useNavigate();
    function handleAdd(e){
     
      
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/linije", linijaData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
                .then((res)=>{  
                    console.log(res.data);
                     alert("USPESNO")
                     navigate("/linije");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                
                  });
    }

    function handleInput(e){  
        let newProductData = linijaData;  
        
        newProductData[e.target.name]=e.target.value;
        if(linijaData.id!==0 && linijaData.id!=""){
            axios.get("http://127.0.0.1:8000/api/linije/"+linijaData.id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} }).then((res)=>{
                console.log(res.data.data);
                setLinijaData(res.data.data);
            
                })  .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

                });
        }
        
        console.log(linijaData)
    }

    function obrisi(e){

        e.preventDefault();   
    
        axios.delete("http://127.0.0.1:8000/api/linije/" +  linijaData.id, 
        {headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} }
        )
        alert("USPESNO")
        navigate("/admin");

    }
    function azuriraj(e){
        e.preventDefault();   
        axios
            .put("http://127.0.0.1:8000/api/linije", linijaData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
            .then((res)=>{  
                console.log(res.data);
                 alert("USPESNO")
                 navigate("/admin");
            })
            .catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            
              });
    }
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                Izmeni ili obrisi liniju
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleAdd}  >
                    <div className="wrap-input100 m-b-18"  >
                        <span className="label-input100">ID</span>
                        <input className="input100" type="text" name="id" id="id" placeholder="Enter id"   onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Name is required">
                        <span className="label-input100">Tip linije </span>
                    
                                 <select  className="input100" name="tipLinijeID" id="1" onInput={handleInput}>
                                     
                                    <option  className="input--style-3" value="1" id={1} >autobuska</option>
                                    <option className="input--style-3" value="2" id={2} >tramvajska</option> 
                                    <option className="input--style-3" value="3" id={3} >voz</option> 

                                 </select>
                                 
                    </div>
                    <br /><br /> 
                 
                 
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Broj linije is required">
                        <span className="label-input100">Broj linije</span>
                        <input className="input100" type="text"  placeholder="Broj linije" name="brojLinije"  onInput={handleInput} defaultValue={linijaData.brojLinije} required/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />

                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Price is required">
                        <span className="label-input100">Pocetna Destinacija</span>
                        <select  className="input--style-3" name="pocetnaDestinacija" id="1" onInput={handleInput}  >
                                     {destinacije.map(d=><option  className="input--style-3" value={d.id} id={d.id} key={d.id} >{d.naziv}</option>)}
                                    
                                  

                                 </select>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Price is required">
                        <span className="label-input100">Zavrsna Destinacija</span>
                        <select  className="input--style-3" name="pocetnaDestinacija" id="1" onInput={handleInput}  >
                                     {destinacije.map(d=><option  className="input--style-3" value={d.id} id={d.id}  key={d.id}>{d.naziv}</option>)}
                                    
                                  

                                 </select>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "zona is required">
                        <span className="label-input100">Zona</span>
                        <input className="input100" type="text" name="zona" id="zona" placeholder="Zona" onInput={handleInput} defaultValue={linijaData.zona}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />

                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Vreme voznje</span>
                        <input className="input100" type="text" placeholder="Vreme voznje" name="vreme"  onInput={handleInput} defaultValue={linijaData.vreme} />
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
 
                    <div className="wrap-input100 validate-input m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Interval</span>
                        <input className="input100" type="text" placeholder="Interval" name="interval"  onInput={handleInput} defaultValue={linijaData.interval} />
                        <span className="focus-input100"></span>
                    </div>
                    <br /><br /><br />
                   
                <div className="container-login100-form-btn">
                 
                    <button className="login100-form-btn" id="dodaj" name="dodaj" onClick={azuriraj}> 	Azuriraj 	</button>
                    <button className="login100-form-btn" id="obrisi" name="obrisi" onClick={obrisi}> 	Obrisi 	</button>
                </div>
            </form>
        </div>
    </div>

    </div>

 
                            
          
                          
                         
  
  )
}

export default IzmeniLiniju