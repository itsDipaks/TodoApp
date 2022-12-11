import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
const Signup = () => {
  const [loading, setloading] = useState(false);
  const [signupcred, setsignupcred] = useState({});
  const handeldchange = (e) => {
    const {name, value} = e.target;

    setsignupcred({
      ...signupcred,
      [name]: value,
    });
  };
const navigate=useNavigate()
  const handeldsubmite = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8700/auth/signup", signupcred)
        .then((res) => {
          console.log(res);
        });
        alert("Signup Sucessfully");
      setloading(false);
      navigate("/login")
    } catch (err) {
      alert("something wents Wrong");
      setloading(false);
    }
  };
 
  return (
    <div>
       {loading?<h1>Loading...</h1>:""}
      <form onSubmit={handeldsubmite}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={handeldchange}
        />
        <input
          type="text"
          name="password"
          onChange={handeldchange}
          placeholder="Enter Password"
        />
        <input
          type="text"
          name="username"
          onChange={handeldchange}
          placeholder="Enter UserName"
        />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
