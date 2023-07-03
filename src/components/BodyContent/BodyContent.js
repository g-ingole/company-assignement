import React from 'react'
import './bodycontent.css'

const BodyContent = () => {
    return (
        <div>
            <div className='container'>
                <div className='row mt5' id='services'>
                    <h1>Financial Advisory Services by FinEdge</h1>
                    <p>FinEdge was born with a single objective, of enabling wealth creation for our clients through quality and conflict free investment management. The use of technology is our cornerstone in ensuring that we can reach across demographics and geographies,
                        provide a convenient, low cost - high quality, process driven, goal oriented, wealth creation platform.
                    </p>
                    <div className='col-lg-4 mt4'>
                        <div className='col-lg-4 department' style={{ width: "90px" }}><img src={require("../../Images/s1.png")} className="img5" alt="..." /></div>
                        <h5>MONEY TRANSFERS</h5>
                        <p> When you transfer funds from a credit card directly to a bank account for use on purchases.</p>
                    </div>
                    <div className='col-lg-4 mt4'>
                        <div className='col-lg-4 department' style={{ width: "90px" }}><img src={require("../../Images/s2.png")} className="img5" alt="..." style={{ height: "60px" }} /></div>
                        <h5>BUSINESS PAYMENTS</h5>
                        <p>The transfer of money, goods, or services to purchase a product or service.</p>

                    </div>
                    <div className='col-lg-4 mt4'>
                        <div className='col-lg-4 department' style={{ width: "90px" }}><img src={require("../../Images/s3.png")} className="img5" alt="..." /></div>
                        <h5>REAL-TIME TRACKING OF PAYMENTS</h5>
                        <p>Payments made between bank accounts that are initiated, cleared and settled within seconds, at any time of the day. </p>

                    </div>
                    {/* <div className='col-lg-3 mt4'>
                        <div className='col-lg-3 department' style={{ width: "90px" }}><img src={require("../../Images/s4.png")} className="img5" alt="..." /></div>
                        <h1>FIRST AID</h1>
                        <p>fact that a reader will be distracted by the readable page when looking at its layout.</p>
                    </div> */}
                    <div className='btn-box mt5'><a href="/">View All</a></div>




                    <div className='col-lg-6 mt5'>
                        <img src={require("../../Images/about-img.jpg")} alt='' style={{ borderRadius: "15px", width: "40em" }} />
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='abt'>Our Platform Offers Two Choices</h1>
                        <p className='ab'>“Do It Yourself” is suited for individuals who want complete control and are short on time, and are therefore unable to interact with an Investment Advisor. The platform is convenient and allows you to make your investments quickly, without a Financial Advisor.
                            “Expert Financial Help” is for individuals who would like to get a comprehensive investment plan prepared with the assistance of an Investment Manager and would be willing to spare time for the same.
                        </p>
                        <div className='btn-box' style={{ float: "left" }}><a href="/">Read More</a></div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default BodyContent
