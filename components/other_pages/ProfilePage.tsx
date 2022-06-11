import BelowNav from '../jobs/BelowNav';
import Footer from "../footer/footer";
import { Container, Col, Row, Breadcrumb, Card, Button, Nav, Navbar, NavDropdown, Form, SSRProvider } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faUser, faLocationDot, faCode, faUserAlt, faBriefcase, faCircleCheck, faBook, faCertificate, faUserTie, faNetworkWired, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { useCurrentUserQuery } from "../../generates/graphql"
import JobsContainerUser from '../jobs/JobsUser/JobsContainerUser';



const UserPageProfile: React.FC = () => {

    const { data, isLoading, isError, error, refetch } = useCurrentUserQuery(undefined, {
        refetchOnWindowFocus: false,
        retry: 1,
    });

    return (
        <>
            <SSRProvider>
                <Container className="main-layout">
                    <Container className="mini-nav">

                        <BelowNav></BelowNav>

                        <Container className="d-flex flex-column navilinks">
                            <Card className="ps-5 bg-transparent text-white border-0">
                                <Card.Body className="bg-transparent h3">Профил</Card.Body>
                            </Card>

                            <Container>
                                <Card className="bg-transparent border-0">
                                    <Card.Body className="d-flex flex-row border-0">

                                        <Card.Text >
                                            <Nav.Link className="h5 ps-5" href="#" id="baseColorWhite">Начало</Nav.Link>
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
                                            <Nav.Link className="ps-1 h5" href="#" id="lookingforjobs">Профил</Nav.Link>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Container>

                        </Container>
                    </Container>
                    <Container className="mt-5">
                        <Container className="mt-5">
                            <Row>
                                <Col sm={8}>
                                    <Container>
                                        <Card className="d-flex flex-row border-0">
                                            <Card.Img variant="top" style={{ width: '150px', height: '150px' }} src={data?.currentUser.userImage} />
                                            <Card.Body className="d-flex flex-row justify-content-evenly">
                                                <Container className="d-flex flex-column">
                                                    <Card.Title className="title-profile">@{data?.currentUser.userFirstName} {data?.currentUser.userLastName}</Card.Title>
                                                    <Card.Text className="color-profile mb-2">
                                                        <FontAwesomeIcon className="pe-2" icon={faCode} />
                                                        {data?.currentUser.userProffesion}
                                                    </Card.Text>
                                                    <Card.Text className="color-profile">
                                                        <FontAwesomeIcon className="pe-2" icon={faLocationDot} />
                                                        {data?.currentUser.userLocationCity}, {data?.currentUser.userLocationState}
                                                    </Card.Text>
                                                </Container>

                                            </Card.Body>
                                        </Card>
                                    </Container>

                                </Col>
                                <Col sm={4}>

                                    <Container className="social_media_icons d-flex flex-column mt-3">
                                        <Card className="border-0 d-flex flex-row">
                                            <Card.Img className="social_icons m-1" src='https://res.cloudinary.com/dcdmmuhf2/image/upload/v1654293319/spot-jobs/facebook_hngpqf.png' />
                                            <Card.Img className="social_icons m-1" src='https://res.cloudinary.com/dcdmmuhf2/image/upload/v1654293319/spot-jobs/github_z3ltmy.png' />
                                            <Card.Img className="social_icons m-1" src='https://res.cloudinary.com/dcdmmuhf2/image/upload/v1654293319/spot-jobs/pinterest_arilew.png' />
                                            <Card.Img className="social_icons m-1" src='https://res.cloudinary.com/dcdmmuhf2/image/upload/v1654293319/spot-jobs/linkedin_jvusim.png' />
                                        </Card>
                                        <Button variant="outline-primary mt-2">Изтегляне на CV</Button>

                                    </Container>


                                </Col>
                            </Row>
                        </Container>
                    </Container>

                    <Container className="mt-5">
                        <Container>
                            <Row>
                                <Col sm={8}>
                                    <Card className="border-0 text-primary">
                                        <Card.Body className="h5">
                                            <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faUserAlt} />Кратка Информация за мен</Card.Text>
                                            <Card.Text className="h6 text-secondary">{data?.currentUser.aboutMe}</Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card className="border-0 text-primary">
                                        <Card.Body className="h5">
                                            <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faAlignLeft} />Професионални Умения</Card.Text>

                                            <Container>
                                                <Container className="d-flex justify-content-between">
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_one}</Form.Label>
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_one_percent}%</Form.Label>
                                                </Container>
                                                <Form.Range defaultValue={data?.currentUser.userSkills_one_percent} />
                                            </Container>

                                            <Container>
                                                <Container className="d-flex justify-content-between">
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_two}</Form.Label>
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_two_percent}%</Form.Label>
                                                </Container>
                                                <Form.Range defaultValue={data?.currentUser.userSkills_two_percent} />
                                            </Container>

                                            <Container>
                                                <Container className="d-flex justify-content-between">
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_three}</Form.Label>
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_three_percent}%</Form.Label>
                                                </Container>
                                                <Form.Range defaultValue={data?.currentUser.userSkills_three_percent} />
                                            </Container>

                                            <Container>
                                                <Container className="d-flex justify-content-between">
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_four}</Form.Label>
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_four_percent}%</Form.Label>
                                                </Container>
                                                <Form.Range defaultValue={data?.currentUser.userSkills_four_percent} />
                                            </Container>

                                            <Container>
                                                <Container className="d-flex justify-content-between">
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_five}</Form.Label>
                                                    <Form.Label className="h5">{data?.currentUser.userSkills_five_percent}%</Form.Label>
                                                </Container>
                                                <Form.Range defaultValue={data?.currentUser.userSkills_five_percent} />
                                            </Container>

                                        </Card.Body>
                                    </Card>

                                    <Card className="border-0 text-primary">
                                        <Card.Body className="h5">
                                            <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faBriefcase} />Сертификати и Образование</Card.Text>
                                            <Card.Text className="h6 text-secondary pb-3">{data?.currentUser.userCertificate_or_Education_one}</Card.Text>
                                            <Container className="h6 ps-0 ms-0 text-secondary">
                                                <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faBook} />Образование</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userCertificate_or_Education_two}</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userCertificate_or_Education_three}</Card.Text>
                                                <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faCertificate} />Сертификати</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userCertificate_or_Education_four}</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userCertificate_or_Education_five}</Card.Text>
                                            </Container>
                                        </Card.Body>
                                    </Card>

                                    <Card className="border-0 text-primary">
                                        <Card.Body className="h5">
                                            <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faUserTie} />Работен Опит</Card.Text>
                                            <Card.Text className="h6 text-secondary pb-3">{data?.currentUser.userPreviousJob_one}</Card.Text>
                                            <Container className="h6 ps-0 ms-0 text-secondary">

                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userPreviousJob_two}</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userPreviousJob_three}</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userPreviousJob_four}</Card.Text>
                                                <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.currentUser.userPreviousJob_five}</Card.Text>
                                            </Container>
                                        </Card.Body>
                                    </Card>


                                </Col>

                                <Col sm={4}>

                                    <Form className="profile-contacts p-3">
                                        <Form.Label>Свържете се с мен</Form.Label>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Име</Form.Label>
                                            <Form.Control type="text" placeholder="Име" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Емайл</Form.Label>
                                            <Form.Control type="text" placeholder="Емайл" />
                                            <Form.Text className="text-muted">
                                                Ние никога няма да споделим вашият емайл с когото и да е било!
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Тема</Form.Label>
                                            <Form.Control type="text" placeholder="Тема" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Съобщение</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Изпращане
                                        </Button>
                                    </Form>


                                </Col>

                            </Row>

                        </Container>

                        <Container className='container-with-jobs'>
                            <Card className="border-0 text-primary mb-5">
                                <Card.Body className="h5">
                                    <Card.Text className="border-bottom p-3"><FontAwesomeIcon className="me-2" icon={faNetworkWired} />Създадени Обяви</Card.Text>
                                </Card.Body>
                            </Card>

                            <JobsContainerUser></JobsContainerUser>

                        </Container>


                    </Container>

                    <Container className='footers mt-5'>
                        <Footer></Footer>
                    </Container>
                </Container>
            </SSRProvider>
        </>

    )
}
export default UserPageProfile