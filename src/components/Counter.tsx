import { Button } from "@chakra-ui/button";
import React, { useEffect } from "react";
import useTimer from "../hooks/timer";
import { formatTime } from "../util";
const Counter = (props:any) => {    
    const { secondsCount, isRunning, runSecondsCounter, setIsRunning, pauseTimer }=useTimer(0)
    const buttonText = isRunning ? 'Stop' : 'Start'
    useEffect(()=>{
        if(isRunning) {
            runSecondsCounter()
        }else {
            pauseTimer()
        }   
    },[isRunning])
    return (
        <div>
            {formatTime(secondsCount)}
            <Button colorScheme="blue" onClick={()=>{setIsRunning(!isRunning)}}>{buttonText}</Button>
        </div>
    )        
}
export default Counter;