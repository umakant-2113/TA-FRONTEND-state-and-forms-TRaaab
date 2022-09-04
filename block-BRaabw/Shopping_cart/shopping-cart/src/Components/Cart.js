import image from '../image/t.jpg';

const Cart = (props) => {



  return (
    <div className='card-div'>
      <div className='flex-50'>
        <select onChange={(event=> props.handleChange(event))} >
          <option value='None'> None</option>
          <option value='Low TO High'> Low To High</option>
          <option value='High To Low'> High To Low</option>
        </select>
      </div>
      <div className='flex-50'>
        <img className='img-cart' src={image} alt='' />
      </div>
    </div>
  );
};

export default Cart;
