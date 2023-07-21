import  { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = ()=>{

        console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Ingrese su nombre'
        className='form-control'/>

        <button className='btn btn-warning mt-2' onClick={onClick} >
            Set focus
        </button>


        <hr />
    </>
  )
}
