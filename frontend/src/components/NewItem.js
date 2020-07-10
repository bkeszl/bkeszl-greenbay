import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {changeNewItemInputAction} from '../redux/actions/actions'
import {listItem} from '../redux/actions/actions'

function NewItem({handleSubmit, name, description, price, url, loggedIn, handleChange, errText}) {
  return(
    <>
      {loggedIn ? <></> : <Redirect to= '/new'/>}
      <h2>
        List new item
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange}/>
        <label>Decription:</label>
        <input type="text" name="description" value={description} onChange={handleChange}/>
        <label>Price:</label>
        <input type="text" name="price" value={price} onChange={handleChange}/>
        <label>Photo Url:</label>
        <input type="text" name="url" value={url} onChange={handleChange}/>
        {errText ? errText : ''}
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.newReducer.name,
    description: state.newReducer.description,
    price: state.newReducer.price,
    url: state.newReducer.iurl,
    loggedIn: state.authReducer.loggedIn,
    errText: state.newReducer.errText
  }
}

const mapDispatchToProps = {
  handleChange: changeNewItemInputAction,
  handleSubmit: listItem
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem);