import { Button } from "@chakra-ui/button";
import { format } from "path";
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
    const formatTime = () => {
        const getSeconds = `0${(secondsCount % 60)}`.slice(-2)
        const minutes = Math.floor(secondsCount / 60)
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(secondsCount / 3600)}`.slice(-2)
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    useEffect(()=>{
        if(isRunning) {
            runSecondsCounter()
        }else {
            pauseTimer()
        }   
    },[isRunning])
    return (
        <div>
            {formatTime()}
            <Button colorScheme="blue" onClick={()=>{setIsRunning(!isRunning)}}>{buttonText}</Button>
        </div>
    )        
}
export default Counter;