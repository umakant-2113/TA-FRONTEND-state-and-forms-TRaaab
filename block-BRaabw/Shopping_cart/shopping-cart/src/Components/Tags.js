import React from 'react';

class Tags extends React.Component {

  render() {
    let sizeAll = [];
    let size = this.props.data.products.map((data) =>
      data.availableSizes.map((elm) => sizeAll.push(elm))
    );
    let UniqueSize = Array.from(new Set(sizeAll));

    this.handleClick = (size) => {};

    return (
      <>
        <div className='tag-box'>
          {UniqueSize.map((size) => {
            return (
              <p  className={this.props.activeTags.includes(size.trim()) ? "active" : ""}  key={size} onClick={() => this.props.handleActiveTags(size)}>
                {size}{' '}
              </p>
            );
          })}
        </div>
      </>
    );
  }
}

export default Tags;
