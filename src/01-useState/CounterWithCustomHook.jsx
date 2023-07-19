import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const {counter, setCounter, increment, decrement, reset} = useCounter();
  return (
   <>
   <h1>Counter with hook: {counter}</h1>
   {/* <hr /> */}
   {/* <button className="btn btn-primary" onClick={()=>{
    setCounter(counter+1);
   }}>+1</button> */}
   <button className="btn btn-primary" onClick={()=>{
    increment(2)
   }}>+1</button>
   {/* <button className="btn btn-danger" onClick={()=>{
    setCounter(0)
   }}>Reset</button> */}
   <button className="btn btn-danger" onClick={reset}>Reset</button>
   {/* <button className="btn btn-primary" onClick={()=>{
    setCounter(counter-1)
   }}>-1</button> */}
   <button className="btn btn-primary" onClick={()=>{
    decrement(2)
   }}>-1</button>
   <hr />
   </>
  )
}
