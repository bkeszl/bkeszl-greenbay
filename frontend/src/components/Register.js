import React from "react";
import { connect } from "react-redux";
import { changeRegisterInputAction } from "../redux/actions/actions";
import { registerUserAction } from "../redux/actions/actions";

function Register({ register, handleChange, username, password, errText }) {
  return (
    <>
      <h2>Register</h2>
      <form onSubmit={register}>
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
        {errText ? errText : ""}
        <button className="form-submit">Sign up</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.registerReducer.username,
    password: state.registerReducer.password,
    errText: state.registerReducer.errText,
  };
};

const mapDispatchToProps = {
  handleChange: changeRegisterInputAction,
  register: registerUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
