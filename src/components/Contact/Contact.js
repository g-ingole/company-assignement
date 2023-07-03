import React from 'react'
import "./contact.css"
const Contact = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6' id='contactus'>
                        <h1 style={{ textAlign: "start" }}>GET IN TOUCH</h1>
                        <div className='row'>
                            <div className='col-lg-6 mb2'>
                                <input type="name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder='Your Name' />

                            </div>
                            <div className='col-lg-6'>
                                <input type="phone" class="form-control" id="exampleInputnumber1" aria-describedby="numberHelp" placeholder='Phone Number' />

                            </div>
                            <div className='col-lg-12 mt3'>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />

                            </div>
                            <div className='col-lg-12 mt3'>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message' />
                            </div>
                            <div class="d-grid mt3 mb3">
                                <div className='btn-boxxx' ><a href="/">Send</a></div>

                            </div>

                        </div>
                    </div>


                    <div className='col-lg-6'>
                        <div>
                            <iframe title='google-map' className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
