import React from 'react';

class Font extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Font Tester ",
      fontSize: '20px',
    };
  }
  handleClick = (e) => {
    this.setState({
      message: e.target.value ? e.target.value.toUpperCase() : this.state.message,
    });
  };
  fontSize = (e) => {
    console.log(e.target.value)
    this.setState({
      fontSize: e.target.value ? e.target.value + 'px' : this.state.fontSize,
    });
  };

  render() {

    return (
      <>
        <div className='input-box'>
          <input
          className='font-input'
            type='text'
            onChange={this.handleClick}
            placeholder='Enter Any Text '
          />
          <div className='range-div'>
          <span className='span'> {this.state.fontSize}</span>
          <input  className='range' type='range'  onChange={this.fontSize} />
          </div>
        </div>
        <div className='font-box'>
          {[
            'Roboto',
            'Poppins',
            'Aboreto',
            'Open Sans',
            'Nato Sans',
            'Lato',
            'Montseret',
            'Oswald',
            'Mukta',
            'Inter',
            'Releway',
            'Robot Slab',
            'Nunito',
            'Barlow',
            'Kanit',
            'Karla',
            'DM Sans',
            'Oxygen',
            'Anton',
            'Prompt'
          ].map((font,index) => {
            return (
              <div className='flex-30' key={index}>
                <h2 className='font-size'> {font} </h2>
                <p
                  style={{
                    fontSize: ` ${this.state.fontSize}`,
                    margin: '15px',
                    fontWeight:`${index*50}`,
                    lineHeight : "1.3"
                  }}
                >
                  {' '}
                  {this.state.message}{' '}
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Font;
