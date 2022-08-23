import React from "react";
import data from '../data.json';

const CreateUi=(props)=>{
  console.log(props.everyOne)
  return(
    <>
    {
        props.everyOne.map(meenuCard=>{
            return<div className="flex-45" key={meenuCard.id}>
                <figure className="figure-45">
                  <img className="img"  src={meenuCard.img} alt="" />
                </figure>
                <div className="title-45">
                  <div className="title-div">
                    <h2 className="title">{meenuCard.title}</h2>
                    <p className="price"> $ {meenuCard.price}</p>
                  </div>
                  <p className="desc">{meenuCard.desc}</p>
                </div>
              </div>
        })
    }
    </>
)

}

   

export default CreateUi;
