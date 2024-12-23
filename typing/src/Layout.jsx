import {Outlet} from "react-router-dom";
import { Provider } from "./Context/context";
import { typeContext } from "./Context/context";
import { useState } from "react";

export default function Layout(){
  const [time,setTime] = useState(0);
  const [difficulty,setDifficulty]= useState("Easy");

  const changeTime=(e)=>{
    setTime(e.target.value);
  }

  const changeDifficulty= (e)=>{
    setDifficulty(e.target.value);
  }

    return( <>
    <Provider value={{time,changeTime,difficulty,changeDifficulty}} >
       <Outlet/>
       </Provider>
    </>)
}