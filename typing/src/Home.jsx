import { useEffect, useState } from "react"
import { typeContext } from "./Context/context";

export default function Home(){
    const example= "The sun rose over the tranquil village, casting golden light on dew-covered fields. Birds chirped melodiously, while farmers began their daily routines. Children played by the riverbank, their laughter echoing through the air. Life moved at a serene pace, filled with warmth and simplicity, embracing the beauty of each fleeting moment.  The sun rose over the tranquil village, casting golden light on dew-covered fields. Birds chirped melodiously, while farmers began their daily routines. Children played by the riverbank, their laughter echoing through the air. Life moved at a serene pace, filled with warmth and simplicity, embracing the beauty of each fleeting moment." ;
   
    const {time,difficulty} = typeContext();

    
    const [tempTime,settempTime]= useState(time);
    const [para,setPara]= useState(example);
    const [arr,setArr]= useState(para.split(" "));
    const [index,setIndex] = useState(0);
    const [active,setActive] = useState(false);
    const [word,setWord]=useState("");
    const [wpm,setWpm] = useState(0);
    const [character,setCharacter]= useState(0);


    useEffect(() => {
        if (tempTime > 0 && active ) {
          const timer = setInterval(() => {
            settempTime((prevTime) => prevTime - 1);
          }, 1000);
    
          return () => clearInterval(timer); 
        }
      }, [tempTime,active]);


    useEffect(()=>{
        if(index>=arr.length) return;
        const str= document.getElementById(index);
        str.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

    },[index])

      
     const handleStart=()=>{
        setActive(true);
         
     }

     const handleStop = ()=>{
        setActive(false);
     }

     const handleRestart=()=>{
        setActive(false);
        settempTime(time);
       
         arr.forEach((word,i)=>(
        document.getElementById(i).style.color="black"
       ));

        setWpm(0);
        setCharacter(0);
        setIndex(0);
     }


    const check=(a)=>{

       if(index>=arr.length || tempTime<=0 || !active){setWord(""); return; }

      if(a.endsWith(" ")){
      const str= a.trim(); 

       if(str==arr[index]){
        document.getElementById(index).style.color="green";
       }
       else {
          document.getElementById(index).style.color="red";
       }
       setIndex(index+1);
       setWord("");
      }
     else { setWord(a);
         }
         setCharacter((prev)=>prev+1);

    }

    useEffect(()=>{
        if(tempTime>0){
     let words = character/5;
     let ans= Math.floor((words*60)/(time-tempTime));
     setWpm(ans);}
     if(tempTime==0){
        setWpm(Math.floor((index*60)/time));
     }
},[character,tempTime]);
  
  
  
  
  return (<>
          <div className="h-screen bg-green-200 flex flex-col items-center ">

                <div >
                    <h2 className=" font-extrabold text-3xl mt-[15px]">  Typing Speed Test</h2>
                </div>

                <div className=" h-[200px] w-[900px] overflow-hidden mt-[30px] bg-white border rounded-2xl border-black border-solid p-5 ">
                {
                    arr.map((word,i)=>(
                        <span id={i} key={i} className={` ${i==index? "bg-gray-400 " :""} font-semibold text-2xl rounded-lg px-1 border-black py-0` }>{word} </span>
                    ))
                 }
                   
                </div>


                <div>
                    <input type="text" className=" h-[40px] w-[900px] mt-[30px] rounded-2xl bg-white border-2 border-black 
                    p-5 font-bold "  value={word} onChange={(e)=>check(e.target.value)}></input>
                </div>


                <div className="flex text-black mt-[40px] text-lg w-[900px] justify-around">
                    <div className="w-[200px]">Time Left : {tempTime}</div>
                    <div>WPM :- {wpm}</div>
                    <div>Accuracy :</div>
                </div>

                <div className="flex mt-[50px]">
                   <div className="mx-[80px]">
                     {
                        active ? <button onClick={()=> handleStop()} className="h-[30px] w-[100px]  bg-green-800 border-2 border-black font-extrabold">Stop Now</button> : <button onClick={()=> handleStart()} className="h-[30px] w-[100px]  bg-green-800 border-2 border-black font-extrabold">Start Now</button>
                     }
                   </div>
                    <button className="h-[30px] w-[100px] bg-green-800 border-2 border-black font-extrabold" onClick={()=> handleRestart()}> Restart</button>
                </div>

          </div>

   </>)
}