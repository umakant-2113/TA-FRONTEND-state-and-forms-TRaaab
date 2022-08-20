import React from "react"

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            counter: 0,
            step:1
        }
    }

    increment=()=>{
        this.setState({
            counter: this.state.counter+ this.state.step
        })
    }
    deccreament=()=>{
        this.setState({
          counter: this.state.counter - this.state.step
        })
    }

    handleReset=()=>{
        this.setState({
            counter:0,  
        })
    }
  
    handleStep=(e)=>{
    let val = e.target.innerText
    this.setState({
        counter:  +val,
        step: +val
    })
    }

render(){
    return (
<div className="box">
    <div>
    <h1 className="h1">{this.state.counter}</h1>
    </div>
    <div className="btn">
        {[5,10,15].map((step,index)=>{
          return   <button id={this.state.step ===step ? "active--step" : ""}  key={index} onClick={this.handleStep }  >{step}  </button>
        })}
    </div>
   
    <div className="btn">
    <button onClick={this.increment } > Increment</button>
    <button onClick={this.deccreament  }> Decrement</button>
    <button onClick={this.handleReset} > Reset </button>
</div>
</div>
    )
}
}

export default Counter;