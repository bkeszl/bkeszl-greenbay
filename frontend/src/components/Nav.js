import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

function Nav({username, isLoggedIn}) {
  return (
    <nav className="nav-bar">
     {isLoggedIn ? <Link to="/">Shop</Link> : <></>}
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/stuffs">Nothing here</Link>
    <div className="nav-greeter">Hello, {username}</div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username,
    isLoggedIn: state.authReducer.loggedIn
  }
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
