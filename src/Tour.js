import React, {useState} from "react";

const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  
  return (
    <div className="tourInfo">
      <div className="imgContainer">
        <img src={image} alt={name}></img>
      </div>

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore?info : `${info.substring(0, 150)}...`}<button onClick={() => {setReadMore(!readMore)}} className="readMore-btn">read more</button></p>
        <button onClick={() => {removeTour(id)}} className="delete-btn">Not interested</button>
      </footer>
    </div>
  )
  
  
}
export default Tour;