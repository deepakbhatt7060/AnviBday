import React from "react";
import star from './star.png';
import emoji from './emoji.png';
import ganesha from './ganesha.png';
import  bdaygif from './bdaygif.gif';
import crown from './crowngirl.jpg';
import cake from './cake.png';
const Note=({setOpen})=>{
    return(
        <div style={{
            position:"fixed",
            left:"50%",
            top:"50%",
            transform:"translate(-50%,-50%)",
            height:"80vh",
            width:"80vw",
            backgroundColor:"white",
            boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",
            borderRadius:"20px",
            zIndex:999999,
            whitespace:"pre",
            padding:"30px",
            textAlign:"justify",
            lineHeight:"22px",
            overflow:"auto"
           }}>
            <div style={{display:"flex",justifyContent:"flex-end",width:"100%", cursor:"pointer"}}>
            <div onClick={()=>setOpen(false)} class="material-symbols-outlined">
                close
            </div>
            </div>
            
            Dear Anvi,<br/><br/>
            Wishing you a very very Happy Birthday
            &nbsp;<img style={{width:25,height:23,position:"relative",top:"5px"}} src={cake}/>&nbsp;. I always remember the day I saw a princess &nbsp;
            <img style={{width:20,height:23,position:"relative",top:"5px"}} src={crown}/>&nbsp;with smiling face
            pretty eyes, hiding small cute nose behind the black mask, and so polite to talk. 
            <br/><br/>
            Even though I never wanted to see tears on those pretty eyes, but once a thought came in my mind that princess should cry once in front of me because I wanted to see 
            those pretty eyes getting watered and even I can get a chance to pamper and love more. &nbsp;<img style={{height:20,width:25,position:"relative",top:5}}src={emoji} alt="emoji" />&nbsp; I know it's stupid, but I am stupid only. <br /><br />
            My favorite star&nbsp;<img style={{width:25,height:23,position:"relative",top:"5px"}} src={star}/>&nbsp; is you but was not knowing your's, so i got your wishes from Kareena, hope you would have 
            liked it. There are few features, which will automatically get unlocked on the day of your Birthday as they are time dependent.
            <br /><br />
            Spare me if I have done any grammatical mistake. &nbsp;<img style={{height:20,width:25,position:"relative",top:5}}src={emoji} alt="emoji" />&nbsp; And yes, I am very very very happy for you,
            on getting job. Wish you all the best, and will always pray for you to have brighter future ahead.<br />
            Hope, everyone is good in your family Adi, Amma and Shri Ganesha. &nbsp;<img style={{height:30,width:30,position:"relative",top:5}}src={ganesha} alt="emoji" />&nbsp; Even i am thankful to Shri Ganesha and Amma to bring a beautiful girl in this world on such a wonderful day. <br /><br />
            At last not the least Happy Bday my cute Krishna.
            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <img style={{height:100,width:150}} src={bdaygif} alt="emoji" />
            </div>
           </div>
    )
}
export default Note;