import React, { useState } from 'react'

function Roto() {

    // Si uso variables,  RACT en cada renderizado pierde el valor de esa variable
    // let contadorLikes=0
    
    // const darLike = () =>{
    //     contadorLikes +=1
    //     console.log(contadorLikes);
    // }
    

    // Si lo implemento con useState, es una memoria que permanece entre renderizado, dado que es REACT el que lo maneja en función de como implementa el front.
    const [contadorLikes, setContadorLikes] = useState(0)

    const darLikes = () => {
        setContadorLikes(likes => likes +1)
        console.log({contadorLikes});
            
    }

    return (
     <button onClick={darLikes}>Like: {contadorLikes}</button>
  )
}

export default Roto