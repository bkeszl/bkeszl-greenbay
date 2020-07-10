import React from 'react';
import { Link } from "react-router-dom";


function Item({props}) {
  return(
    <>
    <div className="item-container">
      <img src={props.photoUrl} alt="item-thumbnail" className="img-thumbnail"></img>
      <div className='item-dsc'>
        <Link to={"/item/" + props.id}><div className="item-name">{props.name}</div></Link>
        <div className="item-desc">{props.description}</div>
        <div className="item-price">{props.price}</div>
        <button>Buy this!</button>
      </div>
    </div>
    </>
  )
}

export default Item;