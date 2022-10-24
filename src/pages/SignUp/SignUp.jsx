import React, { useState } from "react";
import back from "../../utils/images/back5.jpg";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc,doc,setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import "./signup.scss";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState({})
  const [error,setError] = useState()
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault()
    const id = e.target.id;
    const value = e.target.value;
    setData({...data,[id]: value});
  }

  console.log(data)


  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const docRef = await addDoc(collection(db, "users"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
     navigate('/') 
    } catch (err) {
        setError(err.message);
    }
  };
  return (
    <div className="signUp">
      <div className="image">
        <img src={back}/>
      </div>
      <form onSubmit={handleCreate}>
        <input
          id="name"
          type="text"
          placeholder="name"
          required
          onChange={handleInput}
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          required
          onChange={handleInput}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          required
          onChange={handleInput}
        />
        <input
          id="city"
          type="text"
          placeholder="city"
          required
          onChange={handleInput}
        />
        <input
          id="phone"
          type="number"
          placeholder="09 61 43 91 85"
          required
          onChange={handleInput}
        />
        <button type="submit">SignUp</button>
        <p style={{ color: "red" }}>{error}</p>
        <div className="signup">
          <span>do you have account?</span>
          <Link
            to="/login"
            style={{ backgroundColor: "black", marginTop: "0" }}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
