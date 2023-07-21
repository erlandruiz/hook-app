import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";


export const Memorize = () => {

    const{counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)

    // console.log(counter);
  return (
    <>
    <h1>Counter: <Small value = {counter}/> </h1>

    <button className="btn btn-secondary mt-3" 
    onClick={()=>{increment(1)}}>+1</button>

    <button className="btn btn-dark mt-3" onClick={()=>setShow(!show)}
    >SHOW /HIDE {JSON.stringify(show)}</button>
    <hr />
    </>
  )
}
