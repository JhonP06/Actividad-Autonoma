import React, { useState } from 'react'

export const Increment = () => {

    const [valorCuent, setModi] = useState<number>(0)
    const sumaContador = (numero: number) => {
    setModi(valorCuent + numero);
    }

  return (
    <div>
        <h3>Contador de aumento y disminución</h3>
        <h2>Suma Contador: <small>{valorCuent}</small></h2>
        <button onClick={() => sumaContador(1)} >Incremento 1</button><br /> <br />
        <button onClick={() => sumaContador(-1)}>Disminuir 1</button>
    </div>
  )
}


