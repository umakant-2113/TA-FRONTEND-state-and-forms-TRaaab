import React from 'react';

import Details from './Details';

class AllMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '',
    };
  }

  handle = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    return (
      <>
        {this.props.data.map((movie, index) => {
          return (
            <>
                <div key={movie.Title} className='flex-45 nnnn'>
                  <figure>
                    <img src={movie.Poster} alt='' />
                  </figure>

                   <h2 className='title'>MovieName : {movie.Title} </h2>
                <p className='released-date'>ReleasedDate : {movie.Released}</p>

                <div className='btn-div'>
                <button className='btn'  onClick={() => this.handle(index)}>
                  More Info
                </button> 
                </div>
                </div>

                {this.state.activeIndex === index ? ( <div className='details' > <Details data={movie} /> </div>) : ''}
       
            </>
          );
        })}
      </>
    );
  }
}

export default AllMovie;
