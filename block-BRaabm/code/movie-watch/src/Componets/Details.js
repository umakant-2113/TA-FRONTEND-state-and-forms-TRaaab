const Details = (props) => {
  return (
    <>
      <div className="span-btn">
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          let div = document.querySelector('.details');
          div.style.display = 'none';
        }}
      >
        ❌
      </span>
      </div>
      <h2 className="title1"> <strong> MovieName</strong>  : {props.data.Title}</h2>
      <h2  className="year" >  <strong> Year</strong>  {props.data.Year} </h2>
      <p  className="rated">  <strong> Rated </strong>  {props.data.Rated} </p>
      <p className="released" >  <strong> ReleasedDate</strong>  : {props.data.Released} </p>
      <div  className="caption">
     <strong> Poster</strong>
      </div>
      <div className="image-div">
     
        {props.data.Images.map((image) => {
          return <img className="img-details"   src={image} alt='' />;
        })}
      </div>
      <p  className="director">    <strong> Director</strong> :{props.data.Director}</p>
  
      <p className="actor"><strong> Actor </strong> :   {props.data.Actors} </p>
      <p  className="rating"> <strong>imdbRating  </strong> : ⭐{props.data.imdbRating} </p>
    
    </>
  );
};
export default Details;
