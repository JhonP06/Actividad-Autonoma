
interface Alumnos {
    alumno1: alumno1;
    alumno2: alumno2,
    alumno3: alumno3;
}
interface alumno1{
    name: string,
    edad: number,
    calificacion: number;
}
interface alumno2{
    name: string,
    edad: number,
    calificacion: number;
}
interface alumno3{
    name: string,
    edad: number,
    calificacion: number;
}

export default function Objetos() {
    const mulitiplicar = (num1: number , num2: number): number => {
        return num1 * num2 };
    const alumnos: Alumnos = 
            {
            alumno1:{
                name: 'Viviana',
                edad: 19,
                calificacion: 10, 
            },
            
            alumno2: {
                name: 'Wendy',
                edad: 20,
                calificacion: 8,},
            
            alumno3: { 
                name: 'Gerson',
                edad: 18,
                calificacion: 9,
            }};

        
  return (
    <div>
        <h3>4.Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones. </h3>
        <code>
            <pre>
                {JSON.stringify(alumnos, null, 2)}
                <h3>Alumno 1</h3>
                {JSON.stringify(alumnos.alumno1.name)}
                {JSON.stringify(alumnos.alumno1.calificacion*10)}
                <h3>Alumno 2</h3>
                {JSON.stringify(alumnos.alumno2.name)}
                {JSON.stringify(alumnos.alumno2.calificacion*10)}
                <h3>Alumno 3</h3>
                {JSON.stringify(alumnos.alumno3.name)}
                {JSON.stringify(alumnos.alumno3.calificacion*10)}
            </pre>
        </code>
    </div>
  )
}
