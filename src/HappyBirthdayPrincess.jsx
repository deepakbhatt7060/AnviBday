import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header.jsx";
import MobileCards from "./MobileCards.jsx";
import Picturecards from "./Picturecards.jsx";
import { isMobile } from "react-device-detect";
import envelope from './envelope.png';
import animationData from './gift.json';
import beer from './beer.json';
import animation from './Animation.json';
import Lottie from 'react-lottie';
import Bottle from './bottle.jpeg';
import CountdownTimer from "./CountdownTimer.jsx";
import emoji from './emoji.png';
import milk from './milk.json';
import poison from './Poison.json';
import Truth from "./Truth.js";
import Dare from "./dare.js";
import './slide.css';
import kesariya from './kesariya.mp4';
import Note from "./Note.jsx";
const shuffleObject = (obj) => {
    const values = Object.values(obj);
    const shuffledValues = shuffleArray(values);
    const shuffledObj = {};
    Object.keys(obj).forEach((key, index) => {
        shuffledObj[key] = shuffledValues[index];
    });
    return shuffledObj;
};

const shuffleArray = (arr) => {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
    }
    return shuffledArr;
};

const HappyBirthdayPrincess=()=>{
   const [open, setOpen]=useState(false);
   const [down, setDown]=useState(false);
   const[winner,setWinner]=useState("");
   const [elements,setElements] = useState([]);
   const [turn,setTurn]=useState({
    player : "",
    name:""
   })
   const [start,setStart]=useState(false);
   const [playercount,setCount]=useState(0);
   const [optionSelected, setOptionSelected]=useState("");
   const[play,setPlay]=useState(false);
   const [data,setData]=useState({});
   const [options,setOptions]=useState(
    {
       bottle1:"beer",
       bottle2:"milk",
       bottle3:"poison",
    }
   );
    const check={
        mixBlendMode:"multiply",
        height:"100px",
        width:"180px",
        position:"absolute",
        left:"10px",
    }
    const handleChange=()=>{
      document.querySelector("#move").classList.remove("shakeit");
    }
    const handleCallback=(data)=>{
    setOpen(data);
    }
    const videoFile={
        height:"320px",
        width:"600px",
        };

    const handleCallbackMobile=(data)=>{
            setDown(data);
            }

    const handleGame=(id)=>{
        const shuffledOptions = shuffleObject(options);
        setOptions(shuffledOptions);
        setPlay(true);
        setWinner(shuffledOptions[id]);
        if(shuffledOptions[id]==="beer"){
            console.log("won");
        }
        else{ console.log("lose"); }
            }

            const defaultOptions = {
                loop: true,
                autoplay: true,
                animationData: animationData,
              };
              const option = {
                loop: true,
                autoplay: true,
                animationData: animation,
              };
              const option1 = {
                loop: true,
                autoplay: true,
                animationData: beer,
              };
              const option2 = {
                loop: true,
                autoplay: true,
                animationData: milk,
              };
              const option3 = {
                loop: true,
                autoplay: true,
                animationData: poison,
              };
              const button={
                backgroundColor:"whitesmoke",
                boxShadow:"0 0 10px lightgrey",
                borderRadius:10,
                padding:20,
                cursor:"pointer",
                color:"black",
              }
              useEffect(() => {
                const newElements = [];
                for (let i = 1; i <= playercount; i++) {
                    newElements.push(
                        <div style={{ display: "flex", flexDirection: "column" }} key={i}>
                            Player{i}
                            <div>
                                <input id={i} value={data[i] || ""} onChange={(e) => setData({ ...data, [i]: e.target.value })} style={{ height: 20 }} type="text" placeholder="Enter Player Name" />
                            </div>
                        </div>
                    );
                
                }
                setElements(newElements); 
              
            }, [playercount,data]);

            const handleChance = () => {
                const keys = Object.keys(data); // Get all keys from data object
                const randomIndex = Math.floor(Math.random() * (keys.length));
                const randomKey = keys[randomIndex];
                setTurn({
                   player: keys[randomIndex],
                   name:   data[randomKey]
                });
            };
    return(
        
        <div style={{display:"flex",flexDirection:"column",gap:20}}>
        <Header/>
        {isMobile? <div style={{display:"flex",justifyContent:"center",marginLeft:10}}>
        <CountdownTimer/>
        </div>:<></>}
        
        <div style={{width:"100%",display:"flex",justifyContent:"center",}}>
            { !isMobile?<div className="shakeit" id="move" style={{...check}} onClick={()=>handleChange()}>
            <img style={{height:100,width:180,cursor:"pointer"}} onClick={()=>{setOpen(true)}}  src={envelope} alt="roses for beautiful Anvi" />
            <div style={{position:"absolute",bottom:"15px",left:60,cursor:"pointer"}} onClick={()=>setOpen(true)} >Click Me</div>
            </div>:<></>}
            
       {isMobile?<MobileCards setDown={handleCallbackMobile}/>:<Picturecards/>}
       { isMobile?<div className="shakeit" id="move" style={{...check,position:"absolute",zIndex:100,flexDirection:"column",top:down?1130:820,display:"flex",alignItems:"center",width:"100%"}} onClick={()=>handleChange()}>
            <img style={{height:100,width:180,cursor:"pointer"}} onClick={()=>{setOpen(true)}}  src={envelope} alt="roses for beautiful Anvi" />
            <div style={{display:"flex",width:"100%",justifyContent:"center",position:"absolute",bottom:"15px",cursor:"pointer"}} onClick={()=>setOpen(true)} >Click Me</div>
            </div>:<></>}
        
           {!isMobile && <div style={{position:"absolute",right:20}}> <CountdownTimer/>   </div>}
        </div>
        {!isMobile?<div style={{width:"100%",backgroundColor:"#c171d8",flexDirection:"column",display:"flex",height:500,justifyContent:"flex-start",alignItems:"center"}}>
        <div style={{fontSize:"32px", padding:20,paddingBottom:50,color:"aliceblue"}}>
            Lets Play a Game
        </div>
         <div style={{fontSize:"32px", padding:10,paddingBottom:50,color:"aliceblue"}}>
            Choose a Bottle to Party
        </div>
        {/*
        <div style={{...videoFile,borderRadius:20,backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <video id="video-bg" style={{...videoFile,borderRadius:20}} controls>
            <source style={{borderRadius:20}} src={deepaksong2} type="video/mp4"/>
            </video>
        </div> */}
        <div>
            <img className="bottle" id="bottle1" style={{height:270,width:160,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
          <img className="bottle" id="bottle2" style={{height:270,width:160,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
          <img className="bottle" id="bottle3" style={{height:270,width:160,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
        </div>
          
        </div>:<></>}
        { play && <div style={{position:"fixed",zIndex:9999,top:"50%",left:"50%",fontSize:"30px",minWidth:300,width:"60%",height:"70%",minHeight:"400px",flexDirection:"column",borderRadius:"20px",boxShadow:"0 0 10px lightgrey",flexWrap:"nowrap",display:"flex",alignItems:"center",transform:"translate(-50%,-50%)",backgroundColor:"whitesmoke"}}>
        <div style={{display:"flex",justifyContent:"flex-end",width:"100%", cursor:"pointer",padding:"10px 20px 0 0"}}>
            <div onClick={()=>setPlay(false)} className="material-symbols-outlined">
                close
            </div>
            </div>
        { winner==="beer" && <><Lottie options={option1}  width={isMobile?300:400} /><br />
      
        Congratulations! You Got Beer to Celebrate. Enjoy Hard</>
       }
        { winner==="milk" && <><Lottie options={option2} style={{borderRadius:20}}  width={isMobile?300:400} /><br />
        Oops! You got milk to drink. Good for your Health.&nbsp;<span><img style={{height:30,width:35,position:"relative",top:5}}src={emoji} alt="emoji" /></span>
        </> }
        { winner==="poison" && <><Lottie options={option3} style={{borderRadius:20}}  width={isMobile?300:400} /><br />
        Oops! You got poison.&nbsp;<span><img style={{height:30,width:35,position:"relative",top:5}}src={emoji} alt="emoji" /></span>
       </> }
        </div>
        }
        { !isMobile &&  <div style={{fontSize:30, display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:20,gap:10 }}>
            <div style={{display:"flex"}}>Play &nbsp;<span style={{color:"green"}}>Truth &nbsp;</span>and &nbsp;<span style={{color:"red"}}>Dare </span></div><br />
            <div style={{display:"flex",justifyContent:"center",gap:30}}>
            <div onClick={()=>setCount(2)} style={{...button}}>2 Player</div><div onClick={()=>setCount(3)} style={{...button}}>3 Player</div>
            <div onClick={()=>setCount(4)} style={{...button}}>4 player</div> <div onClick={()=>setCount(5)} style={{...button}}>5 player</div>     
            
             </div>
            </div>

        }
        {((playercount > 1) && !isMobile ) && <div style={{overflow:"auto",position:"fixed",fontSize:26,padding:10,zIndex:99999,backgroundColor:"whitesmoke",boxShadow:"0 0 10px lightgrey",borderRadius:20,transform:"translate(-50%,-50%)",top:"50%",left:"50%",width:"80%",height:"80%",display:"flex",alignItems:"center",flexDirection:"column"}}>
        <div style={{cursor:"pointer",width:"100%",justifyContent:"flex-end"}} onClick={()=>{setCount(0);setData({});setStart(false)}} class="material-symbols-outlined">
                close
            </div>
        { !start?<><div style={{fontWeight:600}}>Enter Player Details</div> <br />
        {elements.map((element, index) => (<>
    <div key={index}>{element}</div><br /></>
  ))}
    <div onClick={()=>{setStart(true);handleChance()}} style={{...button,backgroundColor:"blue",color:"white",height:"15px",display:"flex",alignItems:"center"}}>Lets Start</div>
        </>:<>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"90%",fontSize:"38px",padding:20}}>
            <div style={{padding:20}}>Player {turn.player}</div>
            <div style={{paddingBottom:20,fontWeight:600,color:"brown"}}>{turn.name}</div>
            {optionSelected==="truth" && <Truth/>}
            {optionSelected==="dare" && <Dare/>}
            {optionSelected==="" && <div style={{display:"flex",gap:30}}>
            <div onClick={()=>setOptionSelected("truth")} style={{...button,backgroundColor:"blue",color:"white",height:"15px",display:"flex",alignItems:"center"}}>Truth</div> 
            <div onClick={()=>setOptionSelected("dare")} style={{...button,backgroundColor:"blue",color:"white",height:"15px",display:"flex",alignItems:"center"}}>Dare</div>
            </div>}
            { optionSelected !== "" && 
           <div onClick={()=>{handleChance();setOptionSelected("")}} style={{...button,backgroundColor:"blue",color:"white",height:"15px",display:"flex",alignItems:"center"}}>Next</div>
            }
        </div>
        
        </>}
    </div>
       }
       {/* {((playercount > 1) && !isMobile ) && <div style={{overflow:"auto",position:"fixed",fontSize:26,padding:10,zIndex:99999,backgroundColor:"whitesmoke",boxShadow:"0 0 10px lightgrey",borderRadius:20,transform:"translate(-50%,-50%)",top:"50%",left:"50%",width:"80%",height:"80%",display:"flex",alignItems:"center",flexDirection:"column"}}>
        <div style={{cursor:"pointer",width:"100%",justifyContent:"flex-end"}} onClick={()=>setCount(0)} class="material-symbols-outlined">
                close
            </div>
        <div style={{fontWeight:600}}>Enter Player Details</div> <br />
        {elements.map((element, index) => (<>
    <div key={index}>{element}</div><br /></>
  ))}
    <div style={{...button,backgroundColor:"blue",color:"white",height:"15px",display:"flex",alignItems:"center"}}>Lets Start</div>
       
       </div>
       } */}
       {!isMobile && 
       <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",height:550, backgroundColor:"#ad98ae"}}>
        <div style={{fontSize:46,padding:20,paddingBottom:0,color:"aliceblue"}}>A Song For You</div>
         <div style={{...videoFile,marginTop:10,borderRadius:20}}>
            <video id="video-bg" style={{...videoFile,position:"relative",top:"45px",borderRadius:20}} controls>
            <source src={kesariya} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:60,color:"whitesmoke"}}> </div>
        </div>
       </div>

       }
        {/* <div style={{display:"flex",position:"relative"}}>
      <Lottie options={defaultOptions} height={400} width={400} />
        </div> */}
       {(open)?<Note setOpen={handleCallback}/>:<></>}
      
        </div>

        
        
    )
}
export default HappyBirthdayPrincess;