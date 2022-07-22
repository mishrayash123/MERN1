import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
       <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
        <form className="m-5">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <p>If you don't have an account : <Link to="/signup" className="nav-link text-primary">Register</Link></p>
  </div>
  <button type="submit" class="btn btn-primary">Log in</button>
</form>
</div> 
    )
}

export default Login;