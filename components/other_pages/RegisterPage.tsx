import React, { useState } from "react";
import { Container, Col, Row, Breadcrumb, Card, Button, Nav, Navbar, NavDropdown, SSRProvider } from "react-bootstrap";
import BelowNav from '../jobs/BelowNav';
import Footer from "../footer/footer";
import RegisterForm from "../register/registerForm";


const RegistrationPage: React.FC = () => {


    return (
        <>
            <SSRProvider>
                <Container className="main-layout">
                    <Container className="mini-nav">
                        <BelowNav></BelowNav>

                        <Container className="d-flex flex-column navilinks">
                            <Card className="ps-5 bg-transparent text-white border-0">
                                <Card.Body className="bg-transparent h3">Регистрация</Card.Body>
                            </Card>

                            <Container>
                                <Card className="bg-transparent border-0">
                                    <Card.Body className="d-flex flex-row border-0">

                                        <Card.Text >
                                            <Nav.Link className="h5 ps-5" href="/" id="baseColorWhite">Начало</Nav.Link>
                                        </Card.Text>

                                        <Card.Text>
                                            <Nav.Link className="ps-0 h5" href="" id="baseColorWhite">/</Nav.Link>
                                        </Card.Text>

                                        <Card.Text>
                                            <Nav.Link className="ps-0 h5" href="#" id="baseColorWhite">Кандидати</Nav.Link>
                                        </Card.Text>

                                        <Card.Text>
                                            <Nav.Link className="ps-0 h5" href="" id="baseColorWhite">/</Nav.Link>
                                        </Card.Text>

                                        <Card.Text>
                                            <Nav.Link className="ps-0 h5" href="/Register" id="baseColorWhite">Регистрация</Nav.Link>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Container>

                        </Container>
                    </Container>
                    <Container>
                        <Row className="ps-3">
                            <Container className="spacer"></Container>
                            <Col className="" sm={12}>

                                <Container>
                                    <RegisterForm></RegisterForm>
                                </Container>


                            </Col>
                        </Row>
                    </Container>
                    <Container className='footers mt-5'>
                        <Footer></Footer>
                    </Container>

                </Container>
            </SSRProvider>

        </>

    )
}

export default RegistrationPage