import React from "react";

const Signup = () => {
    return (
       <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
        <form className="m-5">
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Your Name</label>
    <input type="text" class="form-control" id="exampleFormControlTextarea1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Your Phone</label>
    <input type="phone" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Your Profession</label>
    <input type="text" class="form-control" id="exampleFormControlTextarea1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
</div> 
    )
}

export default Signup;