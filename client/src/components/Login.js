import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {


  const [email ,setemail] = useState("");
  const [password ,setpassword] = useState("");

  const loginuser = async (e) => {
      e.preventDefault();

      const res = await fetch('/login', {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          
          email,  password
        
        })
      });

      const data = await res.json();
    

     if(res.status === 400 || !data){
      window.alert("Invailid credentials");
     }
     else{
      window.alert("loged in successfull");
      // history.push("/login");
     }
  }
 

    return (
       <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
        <form className="m-5" method="POST">
  <div className="mb-3">
    <label  className="form-label">Your Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setemail(e.target.value)}  value={email}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Your Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setpassword(e.target.value)}  value={password}/>
  </div>
  <div class="mb-3">
    <p>If you don't have an account : <Link to="/signup" className="nav-link text-primary">Register</Link></p>
  </div>
  <button type="submit" className="btn btn-primary" onClick={loginuser}>Log in</button>
</form>
</div> 
    )
}

export default Login;