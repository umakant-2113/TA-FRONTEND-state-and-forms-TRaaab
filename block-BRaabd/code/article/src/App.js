import React from "react";

// class App extends React.Component{
//      constructor(props) {
//            super(props);
//           this.state= {
//         selected: "basketball"
//          }
//      }
//      render(){
//      let data = ["basketball", "cricket", "laptop", "phone", "tiger"]
//     let    styleDiv= {
//         border: "2px solid green",
//         height: "700px"
//        }

//        let    styleImg= {
//         border: "2px solid green",
//         height: "300px",
//         width:"300px"
//        } 

//       return(
//      <React.Fragment>
//           < div   style={styleDiv}>
//        <div>
//         {data.map((btn)=>{
//                return( <button onClick={()=>(this.setState({ selected: btn}))}>{btn.toUpperCase()}</button>)
//         })}
//        </div>

//           <img style={styleImg}  src={`./images/assets/${this.state.selected}.jpg`} alt=""/>    
                  
//           </div>
//      </React.Fragment>
//       )
//      }
// }

class App extends React.Component{
  constructor(){
  super()
  this.state={
    selected: "basketball"
  }
  }
  render(){
    let data = ["basketball", "cricket", "laptop", "phone", "tiger", "pubg" ];
return (
  <>
<div>
  <div>
{data.map((elm)=> <button style={{fontSize:"1.3rem", margin: "20px"}}  onClick={()=>(this.setState({selected: elm}))} > {elm.toLocaleUpperCase()} </button>
)}  
</div>
<img src= { `./images/assets/${this.state.selected}.jpg `}  alt="" width={"300px"}/>

</div>
  </>
)
  }

}


export default App;
