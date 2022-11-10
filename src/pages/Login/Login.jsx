import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import "./login.scss";
import { auth } from "../../firebase/firebase";
import back from "../../utils/images/back8.webp";
import { useDispatch } from "react-redux";
import { loginActions } from "../../redux/features/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: loginActions.login, payload: user });
        navigate(-1);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError("user not found please try again");
      });
  };
  return (
    <div className="loginContainer">
      <div className="image">
        <img src={back}/>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p style={{ color: "red" }}>{error}</p>
        <div className="signup">
          <span>don't you have account?</span>
          <Link
            to="/signup"
            style={{ backgroundColor: "blue", marginTop: "0" }}
          >
            signUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
