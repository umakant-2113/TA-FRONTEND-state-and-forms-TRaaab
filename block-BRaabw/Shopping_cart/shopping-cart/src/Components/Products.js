import React from 'react';

export default class Products extends React.Component {
constructor(){
    super()
   
}
   

  render() {
    console.log(this.props)
    
    return (
      <>
        <div className='flex-75'>
          
          { this.props.filterData.map((data, index) => {
            return (
              <div className='cart-data' key={index}>
                <img
                  className='img'
                  src={`./image/${this.props.imageNames[index]}`}
                  alt={index}
                />
                <h2 className='title'> {data.title}</h2>
                <p className='price'>Price: ${data.price}</p>
                <button className='btn-all' onClick={()=>this.props.handClick(index)} >Add Cart</button> 
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
