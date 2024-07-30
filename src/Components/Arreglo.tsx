import { useState } from "react"

export const Arreglo = () => {
    const numeros: number[]=[5,10,15,20,25,30,35,40,45,50]
    const cadena = numeros.map((num) => num /5);

  return (
    <div>
        <h3>3.Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.</h3>
        
    </div>
  )
}


