import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-example";


export const Layout = () => {

    const{counter, increment} = useCounter(1);


    const{data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {name, created, status , species ,gender} = !!data && data;

  

  return (
    <>
    <h1>BreakingBad Quotes</h1>

    {
        isLoading
          ?(<LoadingQuote/>)
          :(<Quote created={created} name = {name} status={status} species={species} gender ={gender} />)
 
    }

    <button 
        className="btn btn-info" 
        onClick={()=>{increment(1)}}
        disabled = {isLoading}
        
        > Next Autor</button>
    
    
    <hr />
    </>
  )
}
