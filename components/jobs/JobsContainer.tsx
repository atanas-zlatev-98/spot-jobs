import React, { useState } from "react";
import JobsList from './JobsList';
import { useGetAllJobsQuery, useDeleteJobApplicationMutation, useCurrentUserQuery, useGetJobByIdQuery } from "../../generates/graphql";
import { Container, Col, Row, Breadcrumb, Card, Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faArrowUpZA } from "@fortawesome/free-solid-svg-icons";
import Filters from "./filters/filters";
import BelowNav from "./BelowNav";
import Footer from "../footer/footer";
import FullJobInfo from "./FullJobInfo";




const JobsContainer: React.FC = () => {

    const [activePage, setActivePage] = useState<string>('');

    const { isLoading, isError, data, refetch } = useGetAllJobsQuery({}, { refetchOnWindowFocus: false });

    const { mutate } = useDeleteJobApplicationMutation({
        onSuccess: () => {
            refetch()
        }
    })

    function onDelete(_id: string) {
        mutate({ id: _id })
    }

    function onSelect(_id: string) {
        setActivePage(_id);
    }

    if (isLoading) {
        return <span>Loading....</span>
    }

    if (isError) {
        return <span>Error....</span>
    }
    console.log(activePage);
    return (
        <>
            <Container className="main-layout">
                <Container className="mini-nav">
                    <BelowNav></BelowNav>

                    <Container className="d-flex flex-column navilinks">
                        <Card className="ps-5 bg-transparent text-white border-0">
                            <Card.Body className="bg-transparent h3">Разглеждане на Обяви</Card.Body>
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
                                        <Nav.Link className="ps-0 h5" href="#" id="baseColorWhite">Създаване на Обява</Nav.Link>
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Container>

                    </Container>
                </Container>

                {activePage === '' &&
                    (<Container>

                        <Row>
                            <Container className="spacer"></Container>
                            <Col className="" sm={8}>

                                <Container fluid>
                                    <Container className="p-0 d-flex align-items-center">
                                        <Card.Text className="h3 text-black p-3 ">Обяви</Card.Text>

                                        <Container className="d-flex justify-content-end aligh-items-center pe-0">
                                            <Card.Text className="p-2">Работно време:  <Button variant="outline-primary"><FontAwesomeIcon icon={faArrowDownAZ} /></Button></Card.Text>
                                            <Card.Text className="p-2">Заплата:  <Button variant="outline-primary"><FontAwesomeIcon icon={faArrowUpZA} /></Button></Card.Text>


                                        </Container>
                                    </Container>
                                    <Row>
                                        <Col>


                                            <Container>
                                                {data && <JobsList jobs={data?.getAllJobs} onSelect={onSelect} />}
                                            </Container>



                                        </Col>
                                    </Row>
                                    <Container className="pages-holder d-flex justify-content-end">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#">Предишна</a></li>
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>

                                                <li className="page-item"><a className="page-link" href="#">Следваща</a></li>
                                            </ul>
                                        </nav>
                                    </Container>
                                </Container>




                            </Col>
                            <Col className="" sm={4}>

                                <Container>
                                    <span></span>
                                    <Filters></Filters>

                                </Container>

                            </Col>
                        </Row>
                    </Container>)}
                {activePage !== '' && (
                    <><FullJobInfo _id={activePage}></FullJobInfo>
                        <Container className="d-flex justify-content-center mt-2">  <Button variant="primary" onClick={() => setActivePage('')}>Назад към Обявите</Button></Container>
                    </>
                )}

                <Container className='footers mt-5'>
                    <Footer></Footer>
                </Container>

            </Container>

        </>

    )
}

export default JobsContainer