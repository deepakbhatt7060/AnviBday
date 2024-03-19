import React,{useContext,useEffect} from "react";
import roses from './roses.jpg';
import crown from './Crown.png';
import CountdownTimer from "./CountdownTimer.jsx";
import { context } from "./Context.js";
import './slide.css';
import { isMobile } from "react-device-detect";
const Header=()=>{
   const {time,timeOver,click,setCrown}= useContext(context);
    const navbar={
        width:"100%",
        height:"23vh",
        minHeight:"120px",
        backgroundColor: "rgba(235, 46, 171, 0.7)",
        color:"smokewhite",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"clamp(22px, calc(1.8vh + 1.8vw), 42px)",
        flexDirection:"column"
    }
    const rosesImage={
            height:60,
            width:60,
            mixBlendMode:"multiply"
    }
    useEffect(() => {
        let timeoutId;
        if (click.first && !time.timeLeftBday) {
            timeoutId = setTimeout(() => {
                // Your logic here
                document.querySelector(".crown").classList.add(isMobile?"shiftMobile":"shift");
                let x = document.querySelectorAll(".crown");
                for (let i = 0; i < x.length; i++) {
                    x[i].style.zIndex = 999999;
                }
            }, 2000); // Adjusted to run after 2 seconds
        }
    
        return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on component unmount or re-render
    }, [click.first, time.timeLeftBday]);
    useEffect(()=>{
        if(timeOver.timeOver)
        {
           document.querySelector(".crown").classList.remove("shift");
           document.querySelector(".crown").classList.add("shiftBack");
           setCrown({crownGone:true});
        }
      
    },[timeOver])
    return(
        <div style={{...navbar}}>
            <div style={{position:"absolute",left:20}}>
            </div>
            <div className="crown" style={{marginBottom:"clamp(-40px, -5vh , -5vh),zIndex:99999"}}>
            <img className="crown" style={{...rosesImage,width:120,height:70,background:"transparent",zIndex:99999}} src={crown} alt="crown for beautiful Anvi" />
            </div>
            <div>
            <img style={{...rosesImage}} src={roses} alt="roses for beautiful Anvi" />
             Happy Birthday Princess
            <img style={{...rosesImage}} src={roses} alt="roses for beautiful Anvi" />
            </div>
        </div>
    )
}
export default Header;