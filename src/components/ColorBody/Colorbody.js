import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './colorbody.css'

const Colorbody = () => {
    return (
        <div>
            <div className='container-fluid' style={{ backgroundColor: "#ececec" }} >
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 style={{ color: "#0000000" }} className='mt5' id='about'>OUR STORY</h1>
                        <p style={{ color: "#0000000", maxWidth: "82em", margin: "0 auto" }}>FinEdge was born with a single objective, of enabling wealth creation for our clients through quality and conflict free investment management. The use of technology is our cornerstone in ensuring that we can reach across demographics and geographies,
                            provide a convenient, low cost - high quality, process driven, goal oriented, wealth creation platform.
                        </p>
                    </div>
                    <Container>
                        <Row className='abc mt4'>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d1.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Harsh Gahlaut</h5>
                                    <h6>Co-Founder & CEO</h6>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d2.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Mayank Bhatnagar</h5>
                                    <h6>Co-Founder & COO</h6>

                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <Image src={require("../../Images/d3.jpg")} className='brf' />
                                <div className='details-box'>
                                    <h5>Aniruddha Bose</h5>
                                    <h6>Chief Business Officer</h6>

                                </div>

                            </div>
                            <div className='btn-boxx mb5'><a href="/">View All</a></div>


                        </Row>
                    </Container>

                </div>


            </div>
        </div>
    )
}

export default Colorbody
