import { Button } from "@chakra-ui/button";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
const Counter = (props:any) => {
    let [secondsCount, setSecondsCount] = useState(0);
    let [isRunning, setIsRunning] = useState(false);
    const incrementSeconds = () => {setSecondsCount(secondsCount+=1)}
    const runSecondsCounter =()=>{countRef.current = window.setInterval(incrementSeconds, 1000)} 
    const pauseTimer=()=>{window.clearInterval(countRef.current)}
    const buttonText = isRunning ? 'Stop' : 'Start'
    const countRef = useRef(0)
    useEffect(()=>{
        if(isRunning) {
            runSecondsCounter()
        }else {
            pauseTimer()
        }   
    },[isRunning])
    return (
        <div>
            {secondsCount}
            {isRunning}
            <Button colorScheme="blue" onClick={()=>{setIsRunning(!isRunning)}}>{buttonText}</Button>
        </div>
    )        
}
export default Counter;