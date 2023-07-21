import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";




export const MultipleCustomHooks = () => {

    const{counter, increment} = useCounter(1);


    const{data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {name, created, status, species, gender} = !!data && data;

    // const {name} = origin;
    // console.log(name);
    





   /**Probando ok */
    

    // const urlPrueba = `https://rickandmortyapi.com/api/character/${counter}` ;
    // const{data, isLoading, hasError} = useFetch(urlPrueba);

     /** */
    
    /*Si la data tiene un valor entonces toma la data de el objeto */
    // const {name, created} = !!data && data;
    // console.log(name, created);


    // console.log(urlPrueba);
    /** */



    /**Probando ok */

   
    
    

   

    

  

  return (
    <>
    <h1>BreakingBad Quotes</h1>

    {
        isLoading
          ?(<LoadingQuote/>)
          :(<Quote created={created} name = {name} status={status} species={species} gender ={gender} />)
        //     ?(<div className="alert alert-info text-center">Loading...</div>)
        //     :(<blockquote className="blockquote text-right">
        //     <p className="mb-1">{created}</p>
        //     <footer className="blockquote-footer">{name}</footer>
        // </blockquote>)
         



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
