import { useState } from "react"

export const FuncionState = () => {

    const [ValorContador, setModificador] = useState<number>(0)
    const sumaContador = (numero: number) => {
        setModificador(ValorContador + numero);
    }

  return (
    <div>
        <h3>2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. </h3> 
        <h2>Suma Contador: <small>{ValorContador}</small></h2>
        <button onClick={() => sumaContador(1)} >Incremento 1</button>
    </div>
  )
}


