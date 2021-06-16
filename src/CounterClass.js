import {Component} from 'react'
class Counter extends Component{
    constructor(){
        super()
        //si lo pongo asi react no lo lee
        //this.count = 0
        //lo pongo asi
        this.state = {
            counter : 0
        }
    }  
    increment =() =>{
        //this.setState({
            //counter : this.state.counter++
            //esto trae un problema, modifica el estado original
            //MALA PRACTICA
            //esto tb puede fallar
            //counter : this.state.counter+1
        //})
        //this.count ++
        //console.log('Incrementar', count)
        this.state((state)=>{
            return {
                counter : state.counter+1
            }
        })
    }
    decrement =() =>{
        this.state((state)=>{
            return {
                counter : state.counter-1
            }
        })

    }
    reset =() =>{
        this.setState({counter : 0})

      
    }

    render() {
    return (
        <div>
            <p>{ this.state.counter }</p>
            <button onClick={this.increment}>Incrementar</button>
            <button onClick={this.decrement}>Decrementar</button>
            <button onClick={this.reset}>Resetear</button>
        </div>
    )
}
}



export default CounterClass