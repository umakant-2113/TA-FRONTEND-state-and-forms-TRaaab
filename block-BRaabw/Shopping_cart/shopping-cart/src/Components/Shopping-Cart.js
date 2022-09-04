import React from 'react';
import data from '../data.json';
import Tags from './Tags';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';

const imageNames = [
  '103.jpg',
  '105.jpg',
  '107.jpg',
  '109.jpg',
  '111.jpg',
  '113.jpg',
  '115.jpg',
  '117.jpg',
  'large-1.jpg',
  'large3.jpg',
  'large4.jpg',
  'larger5.jpg',
  'large6.jpg',
  '100_1.jpg',
  '109.jpg',
  'lerger2.jpg',
];

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTags: [],
      sort: 'None',
      activeIndex: 0,
    };
  }

  // active tags
  handleActiveTags = (tag) => {
    let state = [...this.state.activeTags];

    this.setState((prevState) => {
      if (prevState.activeTags.includes(tag)) {
        let ind = state.findIndex((t) => t === tag);
        state.splice(ind, 1);
      } else {
        state.push(tag);
      }
      return { activeTags: state };
    });
  };

  //   low to high active

  handleChange = (event) => {
    console.log(event);
    this.setState({
      sort: event.target.value,
    });
  };

  handClick = (index) => {
    console.log(index);
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    // filter
    let dataFinal = [];
    let data2 = [];

    if (this.state.activeTags.length === 0) {
      data2 = [...data.products];
    } else {
      this.state.activeTags.map((tag) => {
        data.products.map((item) => {
          if (item.availableSizes.includes(tag)) {
            data2.push(item);
          }
        });
      });
    }

    data2 = Array.from(new Set(data2));

    // state cahnge

    if (this.state.sort === 'None') {
      dataFinal = [...data2];
    } else if (this.state.sort === 'Low TO High') {
      dataFinal = [...data2].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (this.state.sort === 'High To Low') {
      dataFinal = [...data2].sort((a, b) => {
        return b.price - a.price;
      });
    }

    return (
      <>
        <Header />

        <div className='box'>
          <div className='flex-15'>
            <Tags
              data={data}
              activeTags={this.state.activeTags}
              handleActiveTags={this.handleActiveTags}
            />
          </div>

          <Products
            imageNames={imageNames}
            filterData={dataFinal}
            handClick={this.handClick}
          />

          <div className='flex-15'>
            <Cart handleChange={this.handleChange} />
            {
                
            }
          </div>
        </div>
      </>
    );
  }
}
export default Shopping;
