import React from "react";
import Image from "../Basics/images/images.jpg";

export default function MenuCard({ menuDataFirst }) {
  // console.log(menuDataFirst);
  return (
    <div className="card-container">

        {menuDataFirst.map((curElem) => {
          const {id, name,  ...curEle} = curElem; 
            return(
        <div className="card" key={id}>
          <div className="card-body">
            <p className="card-number">{id}</p>
            <h3 className="card-author">{name}</h3>
            <h4 className="card-title">{curEle.category}</h4>
            <p className="card-description">
              {curElem.description}
            </p>
            {/* <button className="read-more">Read More</button> */}
            <div className="card-image-container">
              <img src={Image} alt="images" className="card-image" />
            </div>
            <button className="order-now">Order Now</button>
          </div>
        </div>
            )
        })}
      
    </div>
  );
}
