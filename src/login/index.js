import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory,  } from "react-router-dom";
import { submitUserAuthReq } from "../redux/actions/user";
import { INVALID_CREDENTIALS_MSG } from "../constants";
import { Redirect } from "react-router-dom";

import "./login.css";

export const Login = ({ userLoginRequest, users, apiFailed }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirect, setRedirectTo] = useState('');

  useEffect(() => {
    if (users.userAuth) {
      setRedirectTo("/home")
    } else if (!users.userAuth && password && userId) {
      setError(true);
    }
  }, [users]);
  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();
    const requestBody = { userId, password };
    if (userId && password) userLoginRequest(requestBody);
  };

  const isButtonDisabled = () => {
    return userId && password ? false : true;
  };
  return (
    redirect? <Redirect to={redirect} />: <div className="login-form">
      <form
        name="login"
        onSubmit={e => {
          submitHandler(e);
        }}
      >
        {" "}
        {apiFailed && apiFailed.apiError && (
          <label className="alert">
            {" "}
            something went wrong. Pleas try after sometime!{" "}
          </label>
        )}
        {error && <label className="alert"> {INVALID_CREDENTIALS_MSG} </label>}
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            placeholder="username"
            onChange={e => {
              setError(false);
              setUserId(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => {
              setError(false);
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          disabled={isButtonDisabled()}
          type="submit"
          className="button"
          size="lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapDispatch = {
  userLoginRequest: submitUserAuthReq
};

const mapState = state => {
  return { users: state.users, apiFailed: state.apiFailed };
};

Login.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  users: PropTypes.shape({
    userId: PropTypes.string,
    password: PropTypes.string
  })
};

export default connect(
  mapState,
  mapDispatch
)(Login);
