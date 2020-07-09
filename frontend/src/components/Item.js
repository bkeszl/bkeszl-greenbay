import React from 'react';

function Item({props}) {
  return(
    <>
    <div className="item-container">
      <img src={props.photoUrl} alt="item-thumbnail" widht="100" height="100" className="img-thumbnail"></img>
      <div className='item-dsc'>
        <div className="item-name">{props.name}</div>
        <div className="item-desc">{props.description}</div>
        <div className="item-price">{props.price}</div>
      </div>
    </div>
    </>
  )
}

export default Item;