export const formatTime = (secondsCount:number) => {
    const getSeconds = `0${(secondsCount % 60)}`.slice(-2)
    const minutes = Math.floor(secondsCount / 60)
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(secondsCount / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
}