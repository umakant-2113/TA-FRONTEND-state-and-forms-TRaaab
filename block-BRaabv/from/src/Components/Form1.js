import React from 'react';
import image1 from "../image/image1.jpg"

class FormOne extends React.Component {
  constructor(){
      super()
      
      this.state={
        email : "",
        errors: ""
      }
  }

  emailValidation=(email)=>{
    const valid=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return valid.test(email)
  }

  handleInput=({target})=>{
let {name,value}= target
console.log(name,value)
switch (name) {
    case "email":
     this.state.errors =   this.emailValidation(value) ? "" : " email is not valid "
        break;
    default:
        break;
}

this.setState((prestate)=>{
return {
    errors: prestate.errors
}
})
  }


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
              <div className='div-1 div'>1</div>
              <span>Sign Up</span>
              <div className='div-1'>2 </div>
              <span>Message</span>
              <div className='div-1'>3</div>
              <span>CheckBox</span>
            </div>
            <hr />
            <div className='step-heading'>
            <p> step 1/3</p>
            <h2> Sign Up</h2>
            </div>
            <form>
              <div className='form-div'>
                <div className='div-2'>
                <label>Fist Name</label>
                <input type='text' placeholder='hello' />
                <label>date of Birth</label>
                <input type='date' placeholder='hello' />
                </div>
                <div  className='div-2'>
                <label> last Name</label>
                <input type='text' placeholder='hello' />
                <label>Email</label>
                <input type='email' onChange={this.handleInput} name="email" value={this.state.value}   placeholder='hello' />
                <span className='span-email'>{this.state.errors} </span>
                </div>
                </div>
                <div className='address'>
                <label>Address </label>
                 <input type="text"  placeholder='hello address'/>
                </div>
            </form>
            <hr/>
           
          </div>
        </div>
      </>
    );
  }
}

export default FormOne;
