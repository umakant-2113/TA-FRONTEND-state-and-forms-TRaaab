import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      shipping: {  },
      billing: {

      },
      errors: '',
    };
  }



  handleCheck = (event) => {
    if (event.target.checked) {
      this.setState((preState) => ({
        billing: {
          ...preState.shipping,
        },
      }));
    }
  };
  handleInput = ({ target }) => {

    let { name, value } = target;

    console.log(name,value,this.state)
    switch (name) {
      case 'address':
        this.state.errors = value.length < 8 ? '' : 'character at Least 8 char';
        break;

      default:
        break;
    }

   this.setState((preState)=>{
  return {
    ...preState,
    shipping:{
      [name]: value
    }
  }
   })
  };

  render() {
    return (
      <>
        <h1 className='controll-h1'> Controlled Component </h1>
        <section className='section'>
          <div className='flex-45'>
            <form>

              <legend className='legend'>Shipping Address </legend>
              <div className='form-div'>
                <label htmlFor=''> Address </label>
                <input
                  type='text'
                  name='address'
                  value={this.state.shipping.address}
                  onChange={this.handleInput}
                  placeholder='Dharam shala Himanchal Pradesh'
                />

                <span className='span'>{this.state.errors} </span>
                <label htmlFor=''>ZIP/Postal Code </label>
                <input
                  type='text'
                  name='zip'
                  value={this.state.shipping.zip}
                  onChange={this.handleInput}
                  placeholder='P C 210430'
                />

                <label htmlFor=''> City </label>
                <input
                  type='text'
                  name='city'
                  value={this.state.shipping.city}
                  onChange={this.handleInput}
                  placeholder='Rath'
                />

                <label htmlFor=''>Country </label>
                <input
                  type='text'
                  name='country'
                  value={this.state.shipping.country}
                  onChange={this.handleInput}
                  placeholder='India'
                />
                
              </div>
            </form>
          </div>

          <div className='flex-45'>
            <form>
              <legend className='legend'>Billing Address </legend>
              <input type='checkbox' onChange={this.handleCheck} />
              <span> Same as the Shipping Address?</span>
              <div className='form-div'>
                <label htmlFor=''> Address </label>
                <input
                  type='text'
                  value={this.state.billing.address}
                  placeholder='Dharam shala Himanchal Pradesh'
                />

                <label htmlFor=''>ZIP/Postal Code </label>
                <input
                  type='text'
                  value={this.state.billing.zip}
                  placeholder='P C 210430'
                />
                <label htmlFor=''> City </label>
                <input
                  type='text'
                  value={this.state.billing.city}
                  placeholder='Rath'
                />
                <label htmlFor=''>Country </label>
                <input
                  type='text'
                  value={this.state.billing.country}
                  placeholder='India'
                />
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default Form;
