//stateless
//function Counter(){
  //  let count = 0
    //function increment (){
      //  count ++
        //console.log('Incrementar', count)
    //}
    //function decrement (){
      //  console.log('Incrementar')
    //}
    //function reset (){
      //  console.log('Incrementar')
    //}
    //return (
      //  <div>
        //    <p>{ count }</p>
          //  <button onClick={increment}>Incrementar</button>
            //<button onClick={decrement}>Decrementar</button>
           // <button onClick={reset}>Resetear</button>
        //</div>
   // )

//}
//hooks
//el estado no esta dentro de la funcion, sino por fuera - externo 
import {useState} from 'react'
function Counter(){
    //le paso el valor al useState
    //let count = 0
    let [count, setCount] = useState(0)
    //devuelve getter (dato) setter (fx)
    function increment (){
        setCount(count+1)
    }
    function decrement (){
        setCount(count-1)
    }
    function reset (){
        setCount(0)
    }
    return (
        <div>
            <p>{ count }</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Resetear</button>
        </div>
    )

}
export default Counter