import React from "react";
import { useState,useEffect,useContext } from "react";
import cake from './cake.png';
import birthdaywish from './birthdaywishes.mp4';
import heart from './heart.png';
import milk from './milk.json';
import poison from './Poison.json';
import kesariya from './kesariya.mp4';
import { isMobile } from "react-device-detect";
import emoji from './emoji.png';
import beer from './beer.json';
import Lottie from 'react-lottie';
import Truth from "./Truth.js";
import Dare from "./dare.js";
import anvidance from './anvidance.mp4';
import Bottle from './bottle.jpeg';
import './slide.css';
import { context } from './Context.js';

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

const MobileCards=({setDown})=>{
    const [open,setOpen]=useState(false);
    const[winner,setWinner]=useState("");
    const {time,click,setTimeOver}=useContext(context);
    const[play,setPlay]=useState(false);
    const [start,setStart]=useState(false);
    const [elements,setElements] = useState([]);
   const [turn,setTurn]=useState({
    player : "",
    name:""
   })
   const [playercount,setCount]=useState(0);
   const [optionSelected, setOptionSelected]=useState("");
   const [data,setData]=useState({});
  
    const [options,setOptions]=useState(
     {
        bottle1:"beer",
        bottle2:"milk",
        bottle3:"poison",
     }
    );
        const card={
            height:390,
            width:"95vw",
            backgroundColor:"#E1EFF3",
            borderRadius:"15px",
        };
        const videoFile={
            height:"300px",
            width:"95vw",
        };
        const handleSlide=(text)=>{
            if(text==="mobileSliding")
            {
                document.querySelector("#slide1").classList.add("mobileSliding");
            }
            else
            {
                document.querySelector("#slide1").classList.add("mobileSlide");
            }
            
            document.querySelector("#downarrow").style.display="none";
            document.querySelector("#uparrow").style.display="flex";
            setOpen(true);
            setDown(true);
        };
        const handleSlideBack=()=>{
           
            document.querySelector("#slide1").classList.remove("mobileSlide");
            document.querySelector("#downarrow").style.display="flex";
            document.querySelector("#uparrow").style.display="none";
            setOpen(false);
            setDown(false);
        };
        const button={
            backgroundColor:"whitesmoke",
            boxShadow:"0 0 10px lightgrey",
            fontSize:16,
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            borderRadius:10,
            padding:20,
            cursor:"pointer",
            color:"black",
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

            useEffect(() => {
                    if (time.timeLeftBday === false && click.first === true) {
                       handleSlide("mobileSliding");
                       setTimeout(()=>{
                        document.querySelector("#slide1").style.zIndex=10;
                        document.querySelector("#slide1").classList.remove("mobileSliding");
                        document.querySelector("#slide1").classList.add("mobileSlidingBack");
                        setOpen(false);
                        setDown(false);
                       },800);
                       
                       setTimeout(()=>{
                        setTimeOver({timeOver:true});
                        document.querySelector("#slide1").classList.remove("mobileSlidingBack");
                        handleSlide();
                       },30000);
                       setTimeout(()=>{
                        document.querySelector("#slide1").style.zIndex=2;
                        document.querySelector("#slide1").classList.remove("mobileSlidingBack");
                        handleSlideBack();
                       },30800);
                       

                    }
                  }, [time, click]);

            const checkDate=()=> {
            var video = document.getElementById("myVideo");
            if (time.timeLeftBday) {
                video.pause();
                alert("Please wait till 9th April");
            } else {
                video.controls = true;
             
            }
        }
                  
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{position:"relative",display:"flex",justifyContent:"center"}}>
        <div id="slide1"  style={{...card,marginTop:"40px",backgroundColor:"#0D0D0D",position:"absolute",zIndex:2,height:450}}>
        <div style={{...videoFile,marginTop:10}}>
            <video id="video-bg" style={{...videoFile,position:"relative",top:"45px"}} controls>
            <source src={anvidance} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:60,color:"whitesmoke"}}> <img style={{height:30,width:30}}src={heart} alt="emoji" /></div>
        </div>
        <div id="downarrow" onClick={()=>handleSlide()} style={{color:"white",position:"absolute",width:"100%", bottom:10,display:"flex",alignItems:"center",flexDirection:"column"}}>
            <div ><span class="material-symbols-outlined">
            stat_minus_2
            </span></div>
            </div>
        </div>
        <div id="slide2" style={{...card,position:"absolute",zIndex:3}}>
        <div style={{...videoFile}}>
            <video id="myVideo" onPlay={()=>checkDate()} style={{...videoFile}} controls>
            <source src={birthdaywish} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:18,alignItems:"center",marginTop:7}}> Happy Birthday Anvi &nbsp;  <img style={{height:30,width:35,mixBlendMode:"multiply"}} src={cake} alt="emoji" /></div>
        </div>
        <div id="uparrow"  onClick={()=>handleSlideBack()} style={{color:"black",position:"absolute",width:"100%", bottom:0,display:"none",alignItems:"center",flexDirection:"column"}}>
            <div ><span class="material-symbols-outlined">
                stat_2
                </span>
            </div>
         </div>
        </div>
        </div>
        <div style={{width:"100%",position:"relative",borderRadius:20,top:open?950:650,backgroundColor:"#c171d8",flexDirection:"column",display:"flex",height:410,justifyContent:"flex-start",alignItems:"center"}}>
        <div style={{fontSize:"32px", padding:20,paddingBottom:20,color:"aliceblue"}}>
            Lets Play a Game
        </div>
         <div style={{fontSize:"32px", padding:10,paddingBottom:40,color:"aliceblue"}}>
            Choose a Bottle to Party
        </div>
        {/*
        <div style={{...videoFile,borderRadius:20,backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <video id="video-bg" style={{...videoFile,borderRadius:20}} controls>
            <source style={{borderRadius:20}} src={deepaksong2} type="video/mp4"/>
            </video>
        </div> */}
        <div>
        <img className="bottle" id="bottle1" style={{height:230,width:120,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
          <img className="bottle" id="bottle2" style={{height:230,width:120,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
          <img className="bottle" id="bottle3" style={{height:230,width:120,cursor:"pointer",mixBlendMode:"multiply"}} onClick={(e)=>{handleGame(e.target.id)}}  src={Bottle} alt="roses for beautiful Anvi" />
        </div>
       <div style={{fontSize:30, display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:20,gap:10,paddingBottom:20 }}>
            <div style={{display:"flex"}}>Play &nbsp;<span style={{color:"green"}}>Truth &nbsp;</span>and &nbsp;<span style={{color:"red"}}>Dare </span></div><br />
            <div style={{display:"flex",justifyContent:"center",gap:20}}>
            <div onClick={()=>setCount(2)} style={{...button}}> <div>2</div> Player</div><div onClick={()=>setCount(3)} style={{...button}}><div>3</div> Player</div>
            <div onClick={()=>setCount(4)} style={{...button}}><div>4</div> player</div> <div onClick={()=>setCount(5)} style={{...button}}><div>5</div> player</div>     
            
             </div>
            </div>

        {(playercount > 1) && <div style={{overflow:"auto",position:"fixed",fontSize:26,padding:10,zIndex:99999,backgroundColor:"whitesmoke",boxShadow:"0 0 10px lightgrey",borderRadius:20,transform:"translate(-50%,-50%)",top:"50%",left:"50%",width:"80%",height:"auto",display:"flex",alignItems:"center",flexDirection:"column"}}>
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

        <div style={{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",height:550,marginTop:20, backgroundColor:"#ad98ae"}}>
        <div style={{fontSize:46,padding:20,paddingBottom:0,color:"aliceblue"}}>A Song For You</div>
         <div style={{...videoFile,borderRadius:20}}>
            <video id="video-bg" style={{...videoFile,position:"relative",top:"25px",borderRadius:20}} controls>
            <source src={kesariya} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:60,color:"whitesmoke"}}> </div>
        </div>
       </div>
       </div>
       { play && <div style={{position:"fixed",zIndex:9999,top:"50%",left:"50%",fontSize:"30px",minWidth:300,width:"60%",height:"70%",minHeight:"400px",flexDirection:"column",borderRadius:"20px",boxShadow:"0 0 10px lightgrey",flexWrap:"nowrap",display:"flex",alignItems:"center",padding:20,transform:"translate(-50%,-50%)",backgroundColor:"whitesmoke"}}>
        <div style={{display:"flex",justifyContent:"flex-end",width:"100%", cursor:"pointer",padding:"0px 0px 0 0"}}>
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
        Oops! You got poison.&nbsp;<span><img style={{height:30,width:35,position:"relative",top:5}} src={emoji} alt="emoji" /></span>
       </> }
        </div>
        }

        </div>
    )
}
export default MobileCards;