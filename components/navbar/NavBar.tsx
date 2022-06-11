import { Navbar, Container, Nav, NavDropdown, Button, Modal, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import React from "react";
import { useCurrentUserQuery } from "../../generates/graphql";
import { useCookies } from 'react-cookie';
import LoginForm from "../login/LoginForm";
import { queryClient } from '../../pages/_app';

const NavBar: React.FC = () => {


    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const { data, isLoading, error, refetch } = useCurrentUserQuery(undefined, {
        refetchOnWindowFocus: false,
        retry: 1,
    });

    const [show, setShow] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => setShowLogin(false);
    const handleShow = () => setShowLogin(true);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);


    const showSecondDropdown = () => {
        setShowSecond(!showSecond);
    }
    const hideSecondDropdown = () => {
        setShowSecond(false)
    }

    const showDropdown = () => {
        setShow(!show);
    }
    const hideDropdown = () => {

        setShow(false);
    }

    let ButtonDisplay = 'Вход';

    let registerButton = 'registerButtonShow'

    let JobButtonDisplay = 'jobButtonHide';

    let showProfile = 'hideProfile'

    if (data?.currentUser?._id) {

        showProfile = 'showProfile'
        registerButton = 'registerButtonHide';
        ButtonDisplay = 'Профил';
        JobButtonDisplay = 'jobButtonShow';

    }

    return (

        <Navbar collapseOnSelect className="navbar-z-index p-5 fs-5" expand="lg">
            <Container>
                <Navbar.Brand className="text-white fs-3" href="#home">SpotJobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span>
                        <FontAwesomeIcon className="text-white" icon={faBars} />
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

                    <Nav className="me-5">

                        <Nav.Link href="/" className="text-white">Начало</Nav.Link>
                        <Nav.Link href="/Profile" className="text-white">Профил</Nav.Link>
                        <Nav.Link href="/JobsPage" className="text-white">Обяви</Nav.Link>

                        <Nav.Link href="/contacts" className="text-white">Контакти</Nav.Link>

                    </Nav>

                    <Button className={registerButton} variant="outline-light" href="/Register" >
                        {/*<FontAwesomeIcon icon={faPlus} />*/} Регистрация
                    </Button>

                    <Button className={JobButtonDisplay} variant="outline-light" href="/create-new-job">
                        {/*<FontAwesomeIcon icon={faUser} /> */}Създаване на Обява
                    </Button>

                    <Button variant="outline-light" onClick={handleShow}>
                        {/*<FontAwesomeIcon icon={faUser} /> */}{ButtonDisplay}
                    </Button>

                    <Modal className="modal-form-style" show={showLogin} onHide={handleClose}>
                        <Modal.Header >

                        </Modal.Header>
                        <Modal.Body className="modal-form-style-login">{/*TODO: Полета за Регистрация*/}
                            <Container className="d-flex flex-column ps-0 pe-0">

                                <Container className={showProfile}>
                                    <Card className="border-0 mini-profile text-black justify-content-center">
                                        <Card.Img className="mini-profile-img" variant="top" src={data?.currentUser.userImage} />
                                        <Card.Body className="d-flex justify-content-center flex-column">

                                            <Card.Text>

                                                <Card.Title className="text-center">Добре Дошъл!<span className="fw-bold"> @{data?.currentUser.userFirstName} {data?.currentUser.userLastName}</span></Card.Title>

                                                <Card.Text>
                                                    Местоположение: <span className="fw-bold">{data?.currentUser.userLocationState}, {data?.currentUser.userLocationCity}</span>
                                                </Card.Text>

                                                <Card.Text>
                                                    Емайл: <span className="fw-bold">{data?.currentUser.email}</span>
                                                </Card.Text>

                                                <Card.Text>
                                                    Професия: <span className="fw-bold">{data?.currentUser.userProffesion}</span>
                                                </Card.Text>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Container>

                                <Container className="d-flex justify-content-center">
                                    {data?.currentUser?._id && <Button variant="primary" className="p-2 m-3 custbutton" onClick={() => {
                                        removeCookie('token', { path: '/' });
                                        queryClient.removeQueries('CurrentUser')
                                        setTimeout(() => {
                                            refetch();
                                            window.location.href = '/'

                                        }, 100)
                                    }}>Изход</Button>}
                                    {!data?.currentUser?._id && <LoginForm />}
                                </Container>

                            </Container>
                        </Modal.Body>
                    </Modal>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar