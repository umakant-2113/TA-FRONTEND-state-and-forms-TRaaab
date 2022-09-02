import React, { Component } from 'react';
import image1 from '../image/image1.jpg';
import  bear from "../image/bear.jpg"

export default class FormThree extends Component {
  constructor() {
    super();
    this.state = {
      active: '1',
      options: []
    };
  }
  handClick = (event) => {
    if(event.target.id==1){

    }

  };


  handleOptions = (e, option)=>{
    let opt =this.state.options;

    if(opt[0]==option){
      console.log(opt)
    opt.splice(opt.indexOf(option),1)
 
    }else{
      opt.push(option);
    }

    this.setState({options: opt})
  };

  render() {
    return (
      <>
        <div className='form-box'>
          <div className='flex-30'>
            <figure className='figure'>
              <img src={image1} alt='' />
            </figure>
          </div>
          <div className='flex-30'>
            <div className='sign-div'>
              <span>Sign Up</span>
              <div className='div-1 '>
                {' '}
                <div>☑️</div>
              </div>
              <span>Message</span>
              <div className='div-1 div  '>3</div>
              <span>CheckBox</span>
            </div>
            <hr />
            <div className='step-heading'>
              <p> step 3</p>
              <h2> CheckBox </h2>
            </div>
            <div className='box-div' onClick={(event) => this.handClick(event)}>
              <div className={this.state.options.includes("opt-1") ? 'opt  flex-46' : "flex-46" }  onClick={(e)=>this.handleOptions(e, "opt-1")}>
              <img className='bear-img' src={bear} alt=""/>
                 </div>
              <div className={this.state.options.includes("opt-2") ? 'opt  flex-46' : "flex-46" } onClick={(e)=>this.handleOptions(e, "opt-2")}>
              <img className='bear-img' src={bear} alt=""/>

              </div>
            </div>

            <div>
              <form className='radio-form'>
                <div className='flex-45'>
                  <div className='form-div-right'>✔️ </div>
                  <span>hello world </span>
                </div>
                <div className='flex-45'>
                  <input type='radio'></input>
                  <span>hello world input </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

//  export default FormThree
