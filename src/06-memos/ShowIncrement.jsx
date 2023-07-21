import React from "react"


export const ShowIncrement = React.memo(({increment}) => {

    // console.log('me volvi a generar :(')
  return (
    <button className="btn btn-danger mt-3" onClick={()=>increment(100)}>
        Incrementar
    </button>
  )
})
