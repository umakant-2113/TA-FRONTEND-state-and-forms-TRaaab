import React from 'react';
import image from '../image/t.jpg';

class Cart  extends  React.Component{
constructor(){
  super()
  this.state={
    remove:""
  }
}

 RemoveItem=(index)=>{
  
this.setState({
  remove:index
})

if(index== this.state.remove){
  this.props.data= this.props.data.splice(this.state.remove,1)
}

  }
 
  render(){
      let sum = 0;

    return (
      <>
        <div className='card-div'>
          <div className='flex-50'>
            <select onChange={(event) =>this.props.handleChange(event)}>
              <option value='None'> None</option>
              <option value='Low TO High'> Low To High</option>
              <option value='High To Low'> High To Low</option>
            </select>
          </div>
          <div className='flex-50'>
            <img
              className='img-cart'
              onClick={() => {
                let div = document.querySelector('.card');
                div.style.display = 'block';
              }}
              src={image}
              alt=''
            />
          </div>
        </div>
  
        <div className='card'>
          <div>
            <span
              onClick={() => {
                let div = document.querySelector('.card');
                div.style.display = 'none';
              }}
              className='span-btn'
            >
              {' '}
              ❌
            </span>
          </div>
  
          {this.props.data.map((elm, index) => {

            sum += elm.price * elm.quantity;
  
            return (
              <>
                <div className='item' key={index}>
                  <img className='cart-img' src={`/image/${elm.sku}`} alt='' />
                  <h2>{elm.title} </h2>
                  <p>Price : {elm.price} </p>
                  <p> Quantity : {elm.quantity} </p>
                  <button onClick={()=>this.RemoveItem(index)}> Remove </button>
                </div>
              </>
            );
          })}
          <div className='total'>Total Price `${sum}` </div>
        </div>
      </>
    );
  }
  
};

export default Cart;
