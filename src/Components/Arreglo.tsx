import { count } from 'console';
import { useState} from 'react';

export const Arreglo = () => {
    const numeros: number[]=[5,10,15,20,25,30,35,40,45,50]
    const cadena = numeros.map((valorActual: number, index:number, array:number[]) => {

    const valorDiv = valorActual / 5
    return valorDiv 
    })
    

  return (
    <div>
        <h3>3.Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.</h3>
        console.log('Valor divisible', valorMulti) 
    </div>
  )
}


