import { Button } from "@chakra-ui/button";
import React, { useEffect } from "react";
import { useState } from "react";
const Counter = (props:any) => {
    let [secondsCount, setSecondsCount] = useState(0);
    let [isRunning, setIsRunning] = useState(false);
    let interval=null;
    const incrementSeconds = () => {setSecondsCount(secondsCount+=1)}
    //const secondsInterval = setInterval(incrementSeconds, 1000);
    const runSecondsCounter =()=>{setInterval(incrementSeconds, 1000);} 
    //const cancelFunc = () => {clearInterval(secondsInterval);}
    const buttonText = isRunning ? 'Stop' : 'Start'

    useEffect(()=>{
        console.log(isRunning)
        if(isRunning) {
            runSecondsCounter();
        }else {

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