import "./styles.css";
import axios from "axios";
import { useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = (googleData) => {
    console.log(googleData);
    navigate("search");
  };
  return (
    <div className="container">
      <h1>Login Google</h1>
      <div>
        <GoogleLogin
          clientId="294372531642-i20m2bqstc0pna0qnrdpbttavab4ud55.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    </div>
  );
}
export default Login;
