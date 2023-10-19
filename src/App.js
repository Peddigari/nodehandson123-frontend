import React,{useEffect} from 'react'
import axios from 'axios'
 const App=()=>{
   useEffect(()=>{
    axios.get("http://localhost:3001/fetchJson")
    // .then((res)=>res.json())
    .then(data=>console.log(data))
   },[])
   return(
     <div>
       application is succesfull
     </div>
   )


  }

export default App  