import React, {useContext, useEffect} from "react";
import anvi from './anvii.mp4';
import birthdaywish from './birthdaywishes.mp4';
import './slide.css';
import heart from './heart.png';
import cake from './cake.png';
import emojicute from './cute.png';
import anvidance from './anvidance.mp4';
import { context } from "./Context.js";
const Picturecards=()=>{
    const {time,click,setTimeOver,crown}=useContext(context);

    const card={
            height:"60vh",
            minHeight:"450px",
            width:"40%",
            minWidth:"400px",
            backgroundColor:"#E1EFF3",
            borderRadius:"15px",
    };
    const videoFile={
        height:"400px",
        width:"400px",
        
};
useEffect(()=>{
 
    if(time.timeLeftBday === false && click.first===true)
    {
       document.querySelector("#slide3").classList.add("move");
       document.querySelector("#slide1").classList.add("ttt");
       let x = document.querySelectorAll(".changeme");
       for (let i = 0; i < x.length; i++) {
        x[i].style.width = "500px"; // Accessing the style property of each element
    }
       document.querySelector("#slide2").classList.add("moveRight");
     
       setTimeout(() => {
        
        document.querySelector("#slide2").classList.remove('moveRight');
        document.querySelector("#slide2").style.zIndex=9;
        // Then add the moveagain class to start the second transition
        document.querySelector("#slide2").classList.add('moveagain');
      }, 800);
    
      setTimeout(() => {
        setTimeOver({timeOver:true});
        document.querySelector("#slide2").classList.remove('moveagain');
        
        // Then add the moveagain class to start the second transition
        document.querySelector("#slide2").classList.add('moveback');
       
      }, 27000);
      setTimeout(() => {
        document.querySelector("#slide2").style.zIndex=2;
        document.querySelector("#slide2").classList.add('moveoriginal');
        document.querySelector("#slide3").classList.remove("move");
        document.querySelector("#slide1").classList.remove("ttt");
        document.querySelector("#slide1").classList.add("ttty");
       

      }, 29000);
      setTimeout(() => {
        let x = document.querySelectorAll(".changeme");
       for (let i = 0; i < x.length; i++) {
        x[i].style.width = "400px"; 
    }
      }, 30000);
    
    }

},[time.timeLeftBday,click,crown]);

    const handleSlide=()=>{
        document.querySelector("#slide2").classList.add("slide");
        document.querySelector("#slide3").classList.add("slide1");
    }
    const handleSlideBack=()=>{
        document.querySelector("#slide2").classList.add("slide2");
        document.querySelector("#slide3").classList.add("slide3");
    }
    const handleSlideChange=()=>{
        document.querySelector("#slide1").classList.add("slide");
        document.querySelector("#trial").classList.add("slide1");
    }
    const handleSlideBackChange=()=>{
        document.querySelector("#slide1").classList.add("slide2");
        document.querySelector("#trial").classList.add("slide3");
    }
    const checkDate=()=> {
        var video = document.getElementById("myVideo");
        if (time.timeLeftBday) {
            video.pause();
            alert("Please wait till 9th April");
        } else {
            video.controls = true;
         
        }
    }
    return(
        <div id="main" style={{position:"relative",display:"flex",justifyContent:"center",left:-50}}>
        <div id="slide1" onMouseOver={()=>handleSlideChange()} onMouseOut={()=>handleSlideBackChange()} style={{...card,backgroundColor:"#0D0D0D",zIndex:0,width:"45%",minWidth:500}}>
        <div  style={{...videoFile}}>
            <video id="video-bg" style={{...videoFile}} controls>
            <source src={anvi} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:7,color:"white"}}> So Cute &nbsp; <img style={{height:30,width:25}}src={emojicute} alt="emoji" /></div>
        </div>
        </div>
        <div id="trial" style={{position:"absolute",left:0}}>
        <div id="slide2" onMouseOver={()=>handleSlide()} onMouseOut={()=>handleSlideBack()} style={{...card,backgroundColor:"#356986",position:"absolute",left:100,zIndex:2,width:"45%",minWidth:500}}>
        <div className="changeme" style={{...videoFile}}>
            <video className="changeme" id="video-bg" style={{...videoFile}} controls>
            <source src={anvidance} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:7,color:"whitesmoke"}}> <img style={{height:30,width:30}}src={heart} alt="emoji" /></div>
        </div>
        </div>
        <div id="slide3" style={{...card,position:"absolute",marginLeft:"200px",zIndex:3}}>
        <div style={{...videoFile}}>
            <video id="myVideo" onPlay={()=>checkDate()} style={{...videoFile}} controls>
            <source src={birthdaywish} type="video/mp4"/>
            </video>
            <div style={{display:"flex",justifyContent:"center",fontSize:24,alignItems:"center",marginTop:7}}> Happy Birthday Anvi &nbsp;  <img style={{height:30,width:35,mixBlendMode:"multiply"}} src={cake} alt="emoji" /></div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Picturecards;