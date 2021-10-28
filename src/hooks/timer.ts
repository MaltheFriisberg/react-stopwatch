import { useRef, useState } from "react";

const useTimer = (startState:number=0) => {
    let [secondsCount, setSecondsCount] = useState(startState);
    let [isRunning, setIsRunning] = useState(false);
    const incrementSeconds = () => {setSecondsCount(secondsCount+=1)}
    const runSecondsCounter =()=>{countRef.current = window.setInterval(incrementSeconds, 1000)} 
    const pauseTimer=()=>{window.clearInterval(countRef.current)}
    const countRef = useRef(startState)

    return {secondsCount, isRunning, runSecondsCounter, setIsRunning, pauseTimer}
}

export default useTimer