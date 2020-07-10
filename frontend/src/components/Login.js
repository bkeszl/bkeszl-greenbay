import React from "react";
import {connect} from 'react-redux';
import {changeInputAction} from '../redux/actions/actions'
import {loginUserAction} from '../redux/actions/actions'


function Login({handleLogin, handleChange, username, password, errText}) {
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label className="control-label">Usename:</label>
        <input
          type="text"
          className="form-input"
          value={username}
          onChange={handleChange}
          name="username"
        ></input>
        <label className="control-label">Password:</label>
        <input
          type="text"
          className="form-input"
          value={password}
          onChange={handleChange}
          name="password"
        ></input>
        {errText ? errText : ''}
        <button className="form-submit">Log in</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    errText: state.loginReducer.errText
  }
}

const mapDispatchToProps = {
  handleChange: changeInputAction,
  handleLogin: loginUserAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
