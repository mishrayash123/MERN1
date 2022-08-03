import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
       <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
        <form className="m-5">
  <div className="mb-3">
    <label  className="form-label">Your Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label className="form-label">Your Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <p>If you don't have an account : <Link to="/signup" className="nav-link text-primary">Register</Link></p>
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
</form>
</div> 
    )
}

export default Login;