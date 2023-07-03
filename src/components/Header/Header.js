import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './header.css'
function NavScrollExample() {
    return (

        <>

            <Navbar expand="lg" className="bg-img">
                <Container>
                    <Navbar.Brand href="#" className='b f2' style={{ color: "white" }}>FINEDGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: "#fff" }}>HOME</Nav.Link>
                            <Nav.Link href="#about" style={{ color: "#fff" }}>ABOUT</Nav.Link>
                            <Nav.Link href="#services" style={{ color: "#fff" }}>SERVICES</Nav.Link>
                            <Nav.Link href="#contactus" style={{ color: "#fff" }}>CONTACT US</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: "#fff" }}><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>

                            <NavDropdown.Divider />

                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>

            <Carousel className='bgimg'>
                <Carousel.Item className='cartitem'>
                    <h3 className='b'>Metting Your Goals</h3>
                    <p>Setting smart investing goals is what plays the <br />
                        biggest role in determining our investing success.</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
                <Carousel.Item className='cartitem'>
                    <h3>Saving Taxes</h3>
                    <p>Most of us end up chasing short term returns <br />
                        during our investment planning journeys</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
                <Carousel.Item className='cartitem'>
                    <h3>Making Your Money Work For You</h3>
                    <p>Keeping you focused on the big picture instead of<br />
                        worrying about short term fluctuations or trends.</p>
                    <Button variant="light">Read More</Button>
                </Carousel.Item>
            </Carousel>

        </>


    );
}

export default NavScrollExample;




