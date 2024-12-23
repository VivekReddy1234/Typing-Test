import { createContext, useContext } from "react";

const context = createContext({
    time: 0,
    changeTime: ()=>{},
    difficulty :"Easy",
    changeDifficulty :()=>{}
})

export const typeContext= ()=>{
    return useContext(context);
}

export const Provider= context.Provider;