import React from 'react';

class MaxCount extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      step: 1,
      max: 1,
    };
  }
  increament = () => {
    if(this.state.step==1 && this.state.max==1){
    this.setState({
        counter: this.state.counter+this.state.step
    });
}else{
    this.setState({
        counter: this.state.max>=this.state.counter+ this.state.step ? this.state.counter+ this.state.step  :this.state.max
    })
}
  };

  decreament = () => {
    this.setState({
        counter: this.state.counter-this.state.step
    });
  };

  reset=()=>{
    this.setState({
        counter:0
    })
  }

  render() {
    return (
      <>
      <h1 className='h1'>{this.state.counter} </h1>
     <div className='div'>
        <h2>  Step </h2>
            {[5,10,15].map(step=>{
                return  <button id={this.state.step===step ? "active--step" : " " }  onClick={()=>{
                    this.setState({
                        step:step
                    })
                }}  >{step} </button> 
            })}
      </div>

      
        <div className='div'>
        <h2>  Max  </h2>
            {[15,100,200].map(max=>{
                return  <button id={this.state.max==max? "active--step" : ""} onClick={()=>{
                    this.setState({
                        max:max
                    })
                }} >{max} </button> 
            })}
      </div>
        <div className='btn box-2'>
          <button onClick={this.increament}> Increment</button>
          <button onClick={this.decreament}> Decrement</button>
          <button onClick={this.reset}>Reset </button>
        </div>
    
      </>
    );
  }
}

export default MaxCount;
