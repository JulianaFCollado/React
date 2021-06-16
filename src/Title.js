//es un componente

function Title (props){
    console.log(props.text)
    let text = "Una variable con texto"
    return (
       //cualquier bloque html
       <div>
           <h1>Hola react!</h1> 
           <h1>{props.text}</h1>
           <p>Un parrafo estatico </p>
           <p>{text}</p>
           

       </div>
    )
}
export default Title

//lo uso en app.js