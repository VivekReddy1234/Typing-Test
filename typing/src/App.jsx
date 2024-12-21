import { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [selecttime,setSelecttime]=useState(0);
  const[text,setText]=useState("")
const[index,setIndex]=useState(0);
const [speed,setSpeed]=useState(0);
const [time,setTime]=useState(10)
const[start,setStart] = useState(false);
const[button,setButton]=useState("Start Now")
const[accuracy,setAccuracy]=useState(0);
 const paragraph= 'The remarkable scientist discovered innovative solutions that significantly enhanced technological progress. Meanwhile, environmental challenges emerged, prompting researchers to investigate sustainable methods. Collaborative efforts among diverse teams fostered breakthroughs, ultimately contributing to global advancements. As they navigated complex systems, individuals demonstrated resilience and adaptability, ensuring the continuation of critical projects. Exciting developments awaited, inspiring future generations to pursue knowledge and creativity..'
 const words= paragraph.split(' ')
 
 useEffect(()=>{            // user gives the input time 
  setTime(selecttime);
  setButton("Start Now");
  setIndex(0);
  setStart(false);
  setSpeed(0);
 {
  words.map((word,id)=>(
    document.getElementById(id).style.color='black'
  ))
 }
 },[selecttime])


 useEffect(()=>{
                             // start means whether the user starts or not  if only if time is greater than 0 then it will work and time will decrease
  if(time>0 && start && index<words.length){  
   const timer=setTimeout(() => {
    setTime((prev)=>prev-1);
  }, 1000)
  return ()=>clearTimeout(timer) }
 },[time,start])



 useEffect(() => {
  if (index < words.length) {
    // Scroll to the current word when the index is updated
    const currentWord = document.getElementById(`${index}`);
    currentWord.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
}, [index]);


 const check=(e)=>{
    // main function is here it will check the input by the user if there is no space it will continue 
  if(index>=words.length) return;

  if(time==0){setIndex(index); return;}
  else if(time>0 && start){
  let a= e.target.value;
  if(a.endsWith(" ")){
    a=a.trim();
    setText(""); 
  if(words[index]==a){
    
      document.getElementById(`${index}`).style.color='green'
    setText("");
         }
         else {
          document.getElementById(`${index}`).style.color='red'; 
         }
          setIndex(index+1);          }
  else setText(a);
  let s= Math.floor(60*(index+1)  /  (selecttime-time-1));
  setSpeed(s); }
 }


 const change=()=>{
  if(time>0){
  setStart((prev)=>!prev)
  if(!start){setButton("Stop Now")}
  else setButton("Continue") }
 }

  return (
   <> <div className=' font-thin h-screen w-screen flex   flex-col bg-blue-200 items-center '>
   <h1 className=' text-4xl text-center mb-5 font-extrabold '>Typing Test</h1>
   <div className=' text-lg font-bold font-serif'>Select Your Time in seconds:</div>
   <input type='number' min={30}  value={selecttime} onChange={(e)=> setSelecttime(e.target.value)} max={120}></input>
   <div className=' border p-5 overflow-auto flex flex-wrap  mt-5 text-xl gap-2 border-gray-600 h-[100px] w-[900px] bg-white'>
   {
    words.map((word,i)=>(
      <span key={i} id={i}  className={i==index? 'font-bold  bg-gray-200': 'font-thin  bg-white'}> {word}</span>
    ))
   }

   </div>
   <div className='flex p-9 gap-3'>
   <input type='text' value={text} onChange={(e)=>check(e)} className='border-4 border-gray-500  h-[50px] rounded-xl w-[800px]'></input>
   
    <div className='text-lg border flex justify-center items-center bg-gray-700 h-[50px] w-[50px] rounded-lg text-center text-white'>{time} </div>
    </div>
    <button  className=' bg-green-700 font-extrabold rounded-lg h-[50px] w-[100px]'   onClick={()=>{change()}}>{button} </button>
    <div className=' text-lg p-7'> WPM : {speed} </div>
  </div>
   </>
  )
}

export default App
