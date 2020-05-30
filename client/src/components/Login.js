import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/user/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("jwt_token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <nav class="navbar mb-3">
      <Link to="/"><img src="/back-arrow.svg" width="35" height="35" style={{marginRight: "10px"}} class="d-inline-block align-top" alt="" /></Link>
      </nav>
      <h1 className="mt-5 text-center">Login</h1>
      <div className="container">
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={e => onChange(e)}
            className="form-control my-3"
          />
          <button className="btn btn-info btn-block">Submit</button>
        </form>
      </div>
      <br></br>
      <p className="text-center">You haven't joined yet?</p>
      <Link to="/register"><p className="text-center">Register</p></Link>
    </Fragment>
  );
};

export default Login;