import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {logUserOut} from '../redux/actions/actions'

function Nav({username, isLoggedIn, logout}) {
  return (
    <nav className="nav-bar">
     {isLoggedIn ? <><Link to="/">Shop</Link><Link to="/new">List new item</Link></> : <></>}
     {isLoggedIn ?<></> : <><Link to="/login">Login</Link>
      <Link to="/register">Register</Link></>} 
      <Link to="/stuffs">Nothing here</Link>
    <div className="nav-greeter">Hello, {username}
    {isLoggedIn ? <button onClick={logout}>Logout</button>: <></>}
    </div>
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
  logout: logUserOut
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
