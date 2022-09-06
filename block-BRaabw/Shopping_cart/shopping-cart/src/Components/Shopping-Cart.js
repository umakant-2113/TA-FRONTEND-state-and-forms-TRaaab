import React from 'react';
import data from '../data.json';
import Tags from './Tags';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTags: [],
      sort: 'None',
      activeIndex: [],
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

  handClick = (data) => {
    let arr = this.state.activeIndex;

    if (arr.length === 0) {
      this.setState((prevState) => {
        let ar = prevState.activeIndex;
        return {
          activeIndex: ar.concat({ ...data, quantity: 1 }),
        };
      });
    } else {
      for (let elm of arr) {

        let index = arr.indexOf(elm);
        if (elm.title === data.title) {
          elm['quantity'] = elm.quantity + 1;
          this.setState((prevState) => {
            let ar = prevState.activeIndex;
            return {
              activeIndex: [...arr],
            };
          });
          break;

        } else if (index == arr.length - 1 && elm.title !== data.title) {

          this.setState((prevState) => {
            let ar = prevState.activeIndex;
            return {
              activeIndex: ar.concat({ ...data, quantity: 1 }),
            };
          });
          
        }
      }
    }
  };
  render() {
    console.log(this.state.activeIndex);

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

          <Products handClick={this.handClick} filterData={dataFinal} />

          <div className='flex-15'>
            <Cart
              handleChange={this.handleChange}
              data={this.state.activeIndex}
            />
          </div>
        </div>
      </>
    );
  }
}
export default Shopping;
