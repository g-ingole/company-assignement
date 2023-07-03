import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div>
            <section style={{ backgroundColor: " #000000" }}>
                <div className='container' >
                    <div className='row txtt'>
                        <div className='col-lg-3'>
                            <h1>Reach at..</h1>
                            <p>Location</p>
                            <p> Call +01 1234567890</p>
                            <p> demo@gmail.com</p>
                            <div className='icn'>
                                <i class="fa-brands fa-facebook f3"></i>
                                <i class="fa-brands fa-square-twitter f3 ml2"></i>
                                <i class="fa-brands fa-linkedin f3 ml2"></i>
                                <i class="fa-brands fa-instagram f3 ml2"></i>
                            </div>

                        </div>
                        <div className='col-lg-3'>
                            <h1>About</h1>
                            <p style={{ maxWidth: "500px" }}>FinEdge was born with a single objective, of
                                enabling wealth creation for our clients through quality and conflict
                                free investment management.
                            </p>
                        </div>
                        <div className='col-lg-3'>
                            <h1>Links</h1>
                            <p>Home About</p>
                            <p>Services</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='col-lg-3'>
                            <h1>Newsletter</h1>
                            <input type="email" class="form-control" id="exampleInputemail" aria-describedby="emailHelp" placeholder='Enter Email' style={{ width: "280px" }} />
                            <div className='btn-box mt3'><a href="/">Subscribe</a></div>

                        </div>


                        <h6 className='text-center mt5'>© 2023 All Rights Reserved By Fine Edge</h6>
                        <h6 className='text-center mt3'>© Distributed By Fine Edge</h6>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
