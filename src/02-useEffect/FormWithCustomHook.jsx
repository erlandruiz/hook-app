import { useEffect, useState } from "react"
import { useForm2 } from "../hooks/useForm2";



export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm2( {
        username: '',
        email: '',
        password: ''
    }
)

// const {username, email, password} = formState

   
 

    useEffect(()=>{
        // console.log('useEffect called'); 
    }, []);
    
    useEffect(()=>{
        // console.log('formState changed'); 
    }, [formState])

    useEffect(()=>{
        // console.log('email changed')
    },[email])
    


  return (
    <>
    <h1>Formulario con Custom Hook</h1>
  

    <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
    />
    <input
        type="email"
        className="form-control mt-2"
        placeholder="erland@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
    />
    <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
    />

    <button  onClick={onResetForm}className="btn btn-danger mt-2">Reset </button>

   




    <hr />
      </>
  )
}
