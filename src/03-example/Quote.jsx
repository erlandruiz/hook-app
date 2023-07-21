import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({created, name, status, species, gender}) => {

    const pRef = useRef();
    
    const [boxSize, setBoxSize] = useState({
        width:0,
        height: 0
    });

    useLayoutEffect(() => {
      
        // console.log(pRef.current.getBoundingClientRect());

        const{ width, height} = pRef.current.getBoundingClientRect();

        setBoxSize({
            width:width,
            height: height
        })
     
    }, [created]);


  return (
    <>
    <blockquote className="blockquote text-right" style={{display: 'flex'}}>
    <p ref={pRef} className="mb-1">{created}{status}{species}{gender}</p>
    <footer className="blockquote-footer">{name}</footer>
</blockquote>

 <code>{JSON.stringify(boxSize)}</code>
    
    
    </>
    
  )
}
