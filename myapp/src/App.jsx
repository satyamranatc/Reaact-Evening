import React,{useState} from 'react'
import Home from './Home'
export default function App() {
  let [Display,setDisplay] = useState(true);
  return (
    <div>
      <center>
        <h1>APP</h1>
        <button onClick={()=>setDisplay(!Display)}>Change</button>
        <hr />

      {
        Display? <Home /> : null
      }

      </center>
    </div>
  )
}
