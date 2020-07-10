import React from "react";
import { connect } from "react-redux";
import { getSellableItemsAction } from "../redux/actions/actions";
import Item from './Item'
import {Redirect} from 'react-router-dom'

function Home({ items, loadItems, loggedIn }) {  
  return (
    <>
      {loggedIn ? <></> : <Redirect to="/login"/> }
      <h2 onClick={loadItems}>Greenbay</h2>
      <div className = "store-container">
        {items.map((item) =>{
          return <Item key={item.id} props={item}/>
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.homeReducer.items,
    loggedIn: state.authReducer.loggedIn
  };
};

const mapDispatchToProps = {
  loadItems: getSellableItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
