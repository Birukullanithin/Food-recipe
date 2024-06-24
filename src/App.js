import React, { useState } from "react";
import Product from "./products";
import './App.css'
function App(){
    const [value,setvalue]=useState("")
    const [data,setdata]=useState([])
    
    const key="7a8c3c0fcd090da2afb6267d82cf55bb	";
    const id="99827a4c"

    function handelchange(event){
        const newvalue=event.target.value;
        setvalue(newvalue)
    } 
    function changes(event){
        event.preventDefault()
        fetch (`https://api.edamam.com/search?q=${value}&app_id=${id}&app_key=${key}&from=0&to=20&calories=591-722&health=alcohol-free`).then(
            response => response.json()
          ).then(
            data => setdata(data.hits)
          );
          setvalue("")
          
    }   
    return(
        <div className="container">
            <h1> Food Reciepe</h1>
            <form >
            <input type="text" onChange={handelchange} value={value} />
            <br />
            <button type="submit" onClick={changes}>Submit</button>
            </form>
               
             <div className="display">
                 {data.length >= 1 ? data.map((item, index) => {
                      return <Product key={index} data={item} />
                  }) : null}
            </div>
                
            
        </div>
    )
}

export default App;