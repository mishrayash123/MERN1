import React, {useState} from "react";
// import {useHistory} from 'react-router-dom';

const Signup = () => {
  //  const history = useHistory();
   const [user, setuser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
   });

   let name, value;

   const handleInputs = (e) =>{
     name=e.target.name;
     value=e.target.value;

     setuser({...user, [name]:value})
   }
   
   const postdata = async(e) => {
     e.preventDefault();
     const {name , email, phone, work, password, cpassword } = user;
     const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        
        name, email, phone, work, password, cpassword 
      
      })
     });

     const data = await res.json();
     console.log(data);

     if(data.status === 422 || !data){
      window.alert("Invailid registration");
     }
     else{
      window.alert("registration successfull");
      // history.push("/login");
     }

   }


    return (
       <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
        <form className="m-5" method="post">
  <div className="mb-3">
    <label  className="form-label">Your Name</label>
    <input type="text" name="name" className="form-control" id="exampleFormControlTextarea1"  
    value={user.name}
    onChange={handleInputs}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Your Email</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  
    value={user.email}
    onChange={handleInputs}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Your Phone</label>
    <input type="phone" name="phone" className="form-control" id="exampleInputPhone" aria-describedby="emailHelp"  
    value={user.phone}
    onChange={handleInputs}
    />
  </div>
  <div class="mb-3">
    <label  className="form-label">Your Profession</label>
    <input type="text" name="work" className="form-control" id="exampleFormControlTextarea2" aria-describedby="emailHelp"  
    value={user.work}
    onChange={handleInputs}
    />
  </div>
  <div class="mb-3">
    <label  className="form-label">Your Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" 
    value={user.password}
    onChange={handleInputs}
    />
  </div>
  <div class="mb-3">
    <label  className="form-label">Confirm Password</label>
    <input type="password" name="cpassword" className="form-control" id="exampleInputPassword2" 
    value={user.cpassword}
    onChange={handleInputs}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={postdata}>Register</button>
</form>
</div> 
    )
}

export default Signup;