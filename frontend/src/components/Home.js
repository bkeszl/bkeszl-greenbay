import React from "react";
import { connect } from "react-redux";
import { getSellableItemsAction } from "../redux/actions/actions";
import Item from './Item'

function Home({ items, loadItems }) {
  return (
    <>
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
    items: state.homeReducer.items
  };
};

const mapDispatchToProps = {
  loadItems: getSellableItemsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
