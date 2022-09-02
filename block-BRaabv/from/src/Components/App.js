import React from "react";

import FormOne from "./Form1";
import FormTwo from "./Form2";
import FormThree from "./Form3";

const formConfig = {
    1: FormOne,
    2: FormTwo,
    3: FormThree
 };

class App extends React.Component{
    constructor(){
   super()
      this.state={
     formStep : 1,
      }
    }



  handlePrevious = ()=>{
     this.setState((prevState)=> {
        return{
            ...prevState,
            formStep :  prevState.formStep > 1 ? prevState.formStep-1 : 1,
        }
     } )
 };

  handleNext = ()=>{
    this.setState((prevState)=> {
        return{
            ...prevState,
            formStep :  prevState.formStep < 3 ? prevState.formStep+1 : 3,
        }
     } )
};



   render(){

        let ChildForm = formConfig[`${this.state.formStep}`]
    return (
        <>
<ChildForm/>
<div className="aaaaa">
    <p disabled={this.state.formStep=== 1 ? true : false }  onClick={()=>this.handlePrevious()}>Previous</p>
    <p disabled={this.state.formStep===3 ? true : false }  onClick={()=>this.handleNext()}>Next</p>
</div>
</>
    )
   }
  

}

export default App;