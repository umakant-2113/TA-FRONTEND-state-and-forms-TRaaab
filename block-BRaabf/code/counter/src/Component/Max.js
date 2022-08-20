import React from "react"

class MaxCount extends React.Component {
  constructor() {
    super();
  this.state={
    counter: 0,
    step:1,
    max:1
  }
  }
increament=()=>{
        this.setState({
            counter: this.state.max> this.state.counter ?  this.state.counter + this.state.step :this.state.max
        })
}

decreament=()=>{
    this.setState({

        counter: this.state.max> this.state.counter ?  this.state.counter - this.state.step :this.state.max

    })
}
reset=()=>{
    this.setState({
        counter:0
    })
}
step=(e)=>{
    let val = e.target.innerText
    this.setState({
        counter: this.state.counter+ +val ,
        step : +val
    })
}

max=(e)=>{
    let value= e.target.innerText;

    this.setState({
     max: +value 
    })
}

  render(){
    return (
        <>
<h1 className="h1">{this.state.counter} </h1>
        <div className="box2" onClick={this.step}>
            <h2>Step</h2>
        {[5,10,15].map(elm=>{
              return   <button key={elm}>{elm}</button>
            })}
        </div>
        <div className="max" onClick={this.max}>
            <h2> Max</h2>
            {[100,200,500].map(max=>{
                return <button key={max}>{max}</button>
            })}
        </div>
        
        <div className="btn box-2">
            <button onClick={this.increament }  > Increment</button>
            <button onClick={this.decreament} > Decrement</button>
            <button onClick={this.reset}>Reset </button>
        </div>
        </>
    )
  }
}

export default MaxCount