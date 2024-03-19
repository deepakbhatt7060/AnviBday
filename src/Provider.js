import React, { useState } from "react";
import { context } from "./Context.js";

const Provider=({children})=>{
    const [time, setTime]=useState({
        timeLeftBday:true,
    })
    const [click, setClick]=useState({
        first:false
    })
    const [timeOver, setTimeOver]=useState({
        timeOver:false
    })
    const [crown, setCrown]=useState({
        crownGone:false
    })
    return(
        <context.Provider value={{time,setTime,click,setClick,timeOver,setTimeOver,crown,setCrown}}>
            {children}
        </context.Provider>
    )
};
export default Provider;