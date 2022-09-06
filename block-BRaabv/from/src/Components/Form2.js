import React from 'react';
import image2 from '../image/image2.jpg';

class FromTwo extends React.Component {
  constructor() {
    super();

   
  }

  emailValidation = (email) => {
    const valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return valid.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    console.log(name, value);
    switch (name) {
      case 'email':
        this.state.errors = this.emailValidation(value)
          ? ''
          : ' email is not valid ';
        break;
      default:
        break;
    }

    this.setState((prestate) => {
      return {
        errors: prestate.errors,
      };
    });
  };

  render() {
    return (
      <>
        <div className='form-box'>
          <div className='flex-30'>
            <figure className='figure'>
              <img src={image2} alt='' />
            </figure>
          </div>
          <div className='flex-30'>
            <div className='sign-div'>
              <div className='div-1  '>☑️</div>
              <span>Sign Up</span>
              <div className='div-1 div '>2 </div>
              <span>Message</span>
              <div className='div-1'>3</div>
              <span>CheckBox</span>
            </div>
            <hr />
            <div className='step-heading'>
              <p> step 2</p>
              <h2> Message</h2>
            </div>
            <form className='form'>
              <div className='form2-div'>
                <label htmlFor='' className='label-form2'>
                  {' '}
                  Message
                </label>
                <textarea
                  name=''
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Enter Message '
                ></textarea>
              </div>
            </form>
            <div>
              <form className='radio-form'>

            <div className='flex-45'>
               <div className='form-div-right'>✔️  </div>
               <span>hello world   </span>
               </div>
               <div className='flex-45'>
                  <input type="radio"></input>
                  <span>hello world input  </span>
                  </div>

              </form>

            </div>
          </div>
       
        </div>
      </>
    );
  }
}

export default FromTwo;

