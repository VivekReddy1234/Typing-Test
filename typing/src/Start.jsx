 import { useState } from 'react'
import {Link} from 'react-router-dom'
import { typeContext } from './Context/context'
export default function Start(){
  const {time,changeTime,difficulty,changeDifficulty} = typeContext();
   

    return (<>
    <div className=' bg-green-400 h-screen min-w-full flex flex-col justify-center items-center'>
      
        <div className=' bg-white h-[240px] w-[500px] flex flex-col rounded-3xl items-center justify-around'>
             
             <div className=' text-3xl font-extrabold   '>
              <h2>Typing Test </h2>
             </div>
             
            <div>
              <select value={difficulty} onChange={(e)=>{changeDifficulty(e)}}>

                <option>Easy</option>
                <option>Medium</option>
                <option>Difficult</option>
              </select>
            </div>

            <div>
            <label for='time'>Select No. of Seconds :-</label>
              <input id='time' value={time} type='number' onChange={(e)=>{changeTime(e)}} placeholder='0' className=' h-[30px] w-[50px] border border-black text-center'></input>
            </div>


            <div className=''>
              <Link to="/start">
              <div className='h-[30px] text-center border bg-green-300 w-[200px] rounded-2xl'>
                Start the Test
                </div>
              </Link>
            </div>

        </div>

    </div>
     
    </>)
}


