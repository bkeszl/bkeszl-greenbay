import React from 'react';

function Item({props}) {
  return(
    <>
    <div className="item-container">
      <img src={props.photoUrl} alt="item-thumbnail" className="img-thumbnail"></img>
      <div className='item-dsc'>
        <div className="item-name">{props.name}</div>
        <div className="item-desc">{props.description}</div>
        <div className="item-price">{props.price}</div>
        <button>Buy this!</button>
      </div>
    </div>
    </>
  )
}

export default Item;