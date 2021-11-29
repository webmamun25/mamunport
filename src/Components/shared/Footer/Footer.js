import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="container-fluid footer mt-3">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                          <div>
                                <h1 className="text-center">CONTACT ME</h1>
                               <div className="icon">
                               <i class="bi bi-telephone-fill"></i>
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-instagram"></i>
                               </div>
                          </div> 
                    </div>
                    <div className="col-md-6">
                    <form action="mdmamun113901@gmail.com"
                        method="POST"
                        enctype="multipart/form-data"
                        name="EmailForm">
                       
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Describe</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-outline-dark" style={{color:"#FF87CA"}} type="submit" value="Submit">Send</button>
                    </form> 
                    </div>
                </div>
        </div>
    );
};

export default Footer;