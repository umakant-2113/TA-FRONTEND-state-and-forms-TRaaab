import React from 'react';
import data from '../data.json';
import CreateUi  from './Data';

class Tags extends React.Component{
  constructor(){
    super()
    this.state={
      activeSate: "All"
    }
  }
  handle=(elm)=>{

    this.setState({
      activeSate: elm!=="All"? elm : "All" 
    })
  }
render(){
  let category = data.map((elm) => {
    return elm.category;
  });
  
  let allCartegory = category.filter((elm, index) => {
    if (category.indexOf(elm) == index) {
      return elm;
    }
  });
  allCartegory.push('All');
  let srotedData = allCartegory.sort();

  let All=data.filter(elm=>{
    if(this.state.activeSate=="All"){
      return elm
    }else if(this.state.activeSate==elm.category){
      return elm
    }
  })
  return(
        <>
        <ul className='list'>
          {srotedData.map((elm) => {
            return <li id={this.state.activeSate==elm ? "active" : ""}  key={elm} onClick={()=>this.handle(elm)} >{elm} </li>;
          })}
        </ul>

        <div className="ui">
    <CreateUi  everyOne={All}  />
    </div>

        </>
      );
}

}

export default Tags;
