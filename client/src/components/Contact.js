import React from "react";

const Contact = () => {
    return (
        <div className=" w-50 mx-auto mt-5 border border-2  mb-5">
          <div class="m-3 text-center">
    <h5>Get in touch</h5>
  </div>  
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
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
</div> 
    )
}

export default Contact;