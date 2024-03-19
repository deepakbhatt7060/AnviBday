import React, { useState, useEffect, useContext } from "react";
import { isMobile } from "react-device-detect";
import Song from "./happybday.mp3"; 
import animation from './Animation.json';
import Lottie from "react-lottie";
import {context} from "./Context.js";

const CountdownTimer = () => {
  const {setTime,setClick}= useContext(context);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [playSong, setPlaySong] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [firstClick, setFirstClick] = useState(false);

  function calculateTimeLeft() {
    const targetDate = new Date("2024-04-09T00:00:00+05:30").getTime(); // Target date and time
    const now = new Date().getTime();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

  


  

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);

      // Check if all time values are 0
      if (remainingTime.days <= 0 && remainingTime.hours <= 0 &&
          remainingTime.minutes <= 0 && remainingTime.seconds <= 0) {
        setTime({timeLeftBday:false});
        setShowTimer(false); 
        clearInterval(timer); 
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (showTimer === false && firstClick === true) {
      const audio = new Audio(Song);
      audio.play();
      document.querySelector("#confetti").style.display = "block";
      setClick({first:true});
      // Hide confetti after 15 seconds
      setTimeout(() => {
        document.querySelector("#confetti").style.display = "none";
      }, 30000);
    }
  }, [showTimer, firstClick]);
 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    <>
    <div>
      {showTimer ? (
        <div style={{ fontSize: isMobile ? 16 : 24, color: "darkmagenta", paddingRight: 20, borderRadius: 20, display: "flex", alignItems: "center", flexDirection: "column" }}>
          <div style={{ display: "flex", width: isMobile ? "100%" : "", justifyContent: "center" }}>{timeLeft.days} days,{isMobile ? "" : <br />} {timeLeft.hours} hours,{isMobile ? "" : <br />} {timeLeft.minutes} minutes,{isMobile ? "" : <br />} {timeLeft.seconds} seconds</div> <br /> <div style={{ fontSize: isMobile ? 20 : 26 }}> Remaining</div>
        </div>
      ) : (
        <div style={{ fontSize: isMobile ? 20 : 26 }}>Happy Birthday Anvi!</div>
      )}
    </div>
    {!firstClick && <div style={{fontSize:isMobile?22:32,gap:"30px",flexDirection:"column",width:"90vw",height:"90vh",alignItems:"center",display:"flex",justifyContent:"center",backgroundColor:"whitesmoke",zIndex:99999,boxShadow:"0 0 10px lightgrey",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
     Welcome Anvi 
    <div style={{backgroundColor:"blue",display:"flex",justifyContent:"center",cursor:"pointer",width:isMobile?"100px":"150px",padding:10,color:"whitesmoke",boxShadow:"0 0 10px royalblue"}} onClick={()=>setFirstClick(true)}>Continue</div> 
    </div>}
   <div id="confetti" style={{width:"100vw",display:"none",height:"100vh",alignItems:"center",justifyContent:"center",backgroundColor:"transparent",zIndex:999,position:"fixed",top:"20%",left:"50%",transform:"translate(-50%,-50%)"}}>
    <Lottie options={defaultOptions} style={{height:"100vh",width:"100vw"}}  />
    </div>
    </>
  );
};

export default CountdownTimer;
