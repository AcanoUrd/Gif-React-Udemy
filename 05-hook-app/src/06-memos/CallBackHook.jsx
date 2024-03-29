import {  useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);
    const incrementFather = useCallback(
        (value=1)=>{
            setCounter((c) => c + value)
        },
        []
    )
    useEffect(()=>{
        //incrementFather();
    },[incrementFather])
    /*const incrementFather = () => {
        setCounter(counter+1)
    }*/
    return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
