import { useState } from "react"

/*Solucion de Erland*/
// export const CounterApp = () => {

//     const [counter, setCounter] = useState({
//         counter1: 10,
//         counter2:20,
//         counter3:30
//     });
//     // console.log(setCounter);
//     const changeCounter = ()=>{
//         setCounter({...counter, counter1: counter.counter1 +1 })
//     }
//   return (
//     <>
//     <h1>Counter:{counter.counter1}</h1>

//     <hr />

//     {/* <button className="btn" onClick={()=>setCounter((counter1)+1)}>+1</button> */}
//     <button className="btn" onClick={()=>changeCounter()}>+1</button>
    

//     </>
//   )


// }

/*Solucion de Fernando*/

export const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2:20,
        counter3:30
    });

    const {counter1,counter2,counter3} = state
    // console.log(setCounter);
   
  return (
    <>
    <h1>Counter:{counter1}</h1>
    <h1>Counter:{counter2}</h1>
    <h1>Counter:{counter3}</h1>

    {/* <hr /> */}

    {/* <button className="btn" onClick={()=>setCounter((counter1)+1)}>+1</button> */}
    <button className="btn" onClick={()=>setCounter(
        {
            ...state, 
            counter1 : counter1 +1
        }
    )}>+1</button>
    <hr />
    

    </>
  )


}
