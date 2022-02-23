import { Container, Row, Col, Nav, NavDropdown, Dropdown, Navbar, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
    return (
        <Container fluid className='bgAll'>
            <Container>
                <Row>
                    <Col XL={10}>
                        <div>
                            <Navbar bg="" expand="lg">
                                <Container fluid>
                                    <Navbar.Brand href="#"><img className='logo' src="phim1080.png" /></Navbar.Brand>

                                    {/* <Navbar.Brand href="#" className='me-0'>

                                        <div class="dropdown ">
                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Thể Loại
                                            </button>
                                            <ul class="dropdown-menu bg-dark hoverDropdown " aria-labelledby="">
                                                <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </Navbar.Brand>

                                    <Navbar.Brand href="#" className='me-0'>
                                        <div class="dropdown">
                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                               Quốc Gia
                                            </button>
                                            <ul class="dropdown-menu bg-dark hoverDropdown " aria-labelledby="">
                                                <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                                            </ul>
                                        </div></Navbar.Brand>


                                    <Navbar.Brand href="#" className='me-0'>
                                        <div class="dropdown">
                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          Phim Lẻ
                                            </button>
                                            <ul class="dropdown-menu bg-dark hoverDropdown " aria-labelledby="">
                                                <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                                            </ul>
                                        </div></Navbar.Brand>


                                    <Navbar.Brand href="#" className='me-0'>
                                        <div class="dropdown">
                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Phim Bộ
                                            </button>
                                            <ul class="dropdown-menu bg-dark hoverDropdown " aria-labelledby="">
                                                <li><a class="dropdown-item text-light" href="#">Action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Another action</a></li>
                                                <li><a class="dropdown-item text-light" href="#">Something else here</a></li>
                                            </ul>
                                        </div></Navbar.Brand>



                                    <Navbar.Brand href="#" className='me-0'>
                                        <div class="dropdown">

                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                           Chiếu Rạp
                                            </button>
                                           
                                           
                                        </div></Navbar.Brand>




                                    <Navbar.Brand href="#" className='me-0'>
                                        <div class="dropdown">
                                            <button class="btn text-light " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   Sắp Chiếu
                                            </button>
                                            
                                        </div></Navbar.Brand>


                                    <Navbar.Brand href="#">
                                        <div class="">
                                           <input type="search"/>
                                            
                                        </div></Navbar.Brand> */}


                                    <Navbar id="responsive-navbar-nav" className='d-none d-xl-block'>
                                        <Nav className="me-auto">
                                            <Nav.Link href="#features">Features</Nav.Link>
                                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                     
                                    </Navbar>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar " />

                                    <Navbar.Offcanvas
                                        id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel"
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>

                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link href="#action1">Home</Nav.Link>
                                                <Nav.Link href="#action2">Link</Nav.Link>
                                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action5">
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            <Form className="d-flex">
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-success">Search</Button>
                                            </Form>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </div>
                    </Col>
                    <Col xl={2}>
                        <h1 className='text-light'>
                            tesst
                        </h1>
                    </Col>
                </Row>

            </Container>
        </Container>



    );
}

export default Header;
