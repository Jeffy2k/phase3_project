import { NavLink } from "react-router-dom";
import "../styles/form.css";
import { useState } from "react";


function LoginForm() {

    // input field values
    let [login_email, setLoginEmail] = useState("");
    let [login_password, setLoginPassword] = useState("");

    // password visibility
    let [isVisible, setIsVisible] = useState(false);
    let [password_input_type, setPasswordType] = useState("password");

    let visibility = isVisible ? "visibility_off" : "visibility";

    function toggleVisibility() {
          if (!isVisible) {
            setPasswordType("text");
            setIsVisible(true);
          } else {
            setPasswordType("password");
            setIsVisible(false);
          }
      }

    return ( 
        <main>
      <div className="shape square"></div>
      <div className="shape circle"></div>
      <div className="shape border"></div>
      <div className="form-container">
        <form className='active' id="login">
          <h2 className="form-title">
            Login<span>.</span>
          </h2>
          <span>
            <label>Email</label>
            <input
              onChange={
                (e)=>{
                    setLoginEmail(e.target.value);
                }
              }
              type="email"
              id="login-email"
              className="login-input"
              value={login_email}
              autoComplete="false"
            ></input>
          </span>
          <label>Password</label>
          <span>
            <input
                onChange={
                    (e)=>{
                        setLoginPassword(e.target.value);
                    }
                  }
              type={password_input_type}
              className="login-input"
              value={login_password}
              autoComplete="false"
            ></input>
            <i
              onClick={toggleVisibility}
              id="visibility-icon"
              className="material-icons"
            >
              {visibility}
            </i>
          </span>
          <span id="policies">
            <input type="checkbox"></input>
            <h5>Remember me</h5> <h5 id="forgot-msg">Forgot Password?</h5>
          </span>
          <button onClick={(e)=>{
            e.preventDefault();
            console.log("password:"+ login_password,"email:"+ login_email)
          }}>
            Login<i className="material-icons">arrow_forward</i>
          </button>
          <h5 id="sign-in-msg">
            Don't have an account?
            <NavLink className='navlink' to='sign'>
            <span
            >
              Sign Up
            </span>
            </NavLink>
          </h5>
        </form>
      </div>
    </main>
     );
}

export default LoginForm;