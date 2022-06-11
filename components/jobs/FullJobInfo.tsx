import BelowNav from '../jobs/BelowNav';
import Footer from "../footer/footer";
import { Container, Col, Row, Card, Button, Nav, SSRProvider } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBriefcase, faFilter, faClock, faHeart, faCircleCheck, faPlus, faAt } from '@fortawesome/free-solid-svg-icons';
import { JobApplication, useGetJobByIdQuery } from '../../generates/graphql';

interface Props {
    _id: string;
}

const FullJobInfo: React.FC<Props> = ({ _id }) => {

    const { data, isLoading, error, refetch } = useGetJobByIdQuery({ id: _id }, { refetchOnWindowFocus: false });


    return (
        <>
            <SSRProvider>

                <Container className="mt-5">
                    <Row>
                        <Container className='company-info mb-3'>
                            <Container className="justify-content-between d-flex flex-column">
                                <Card className="border-0 d-flex flex-row align-items-center card-column">
                                    <Card.Img variant="top" className="cards-imgs" src={data?.getJobById.jobCompanyLogo} />
                                    <Card.Body className="d-flex flex-row justify-content-between card-column">
                                        <Card.Text className="d-flex flex-column">
                                            <Card.Text>
                                                <Card.Title className="job-page-title"><b>@{data?.getJobById.jobTitle}</b></Card.Title>
                                            </Card.Text>
                                            <Card.Text className="d-flex flex-row">
                                                <Card.Text className="pe-2 gray-color">
                                                    <FontAwesomeIcon className="pe-1" icon={faBriefcase}></FontAwesomeIcon>{data?.getJobById.jobCompanyName}
                                                </Card.Text>

                                                <Card.Text className="pe-2 gray-color">
                                                    <FontAwesomeIcon className="pe-1" icon={faLocationDot}></FontAwesomeIcon>{data?.getJobById.jobCompanyLocation}
                                                </Card.Text>
                                                <Card.Text className="pe-2 gray-color">
                                                    <FontAwesomeIcon className="pe-1 " icon={faFilter} /> {data?.getJobById.jobCompanyField}
                                                </Card.Text>
                                                <Card.Text className="pe-2 gray-color">
                                                    <FontAwesomeIcon className="pe-1" icon={faClock} />{data?.getJobById.jobWorkHours}
                                                </Card.Text>
                                            </Card.Text>
                                        </Card.Text>
                                        <Card.Text>
                                            <Button className="m-2" variant="outline-primary">Кандидатстване</Button>
                                            <Button className="m-2" variant="outline-danger"><FontAwesomeIcon className="pe-1" icon={faHeart} />Запази</Button>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Container>
                        <Col sm={8}>



                            <Container className='img-job'>

                                <Card className='border-0'>
                                    <Card.Img src={data?.getJobById.jobImage}></Card.Img>
                                </Card>

                            </Container>



                        </Col>
                        <Col sm={4}>
                            <Container className='job-info'>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className='fw-bold'>
                                            @ Информация
                                        </Card.Title>

                                        <Card.Text>
                                            <span className='fw-bold'>Публикувана на: </span> {data?.getJobById.jobPostedOn}</Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Свободни места: </span> {data?.getJobById.jobSpots}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Работно време: </span> {data?.getJobById.jobWorkHours}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Опит: </span> {data?.getJobById.jobRequiredExpirience}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Локация: </span> {data?.getJobById.jobLocation}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Заплата: </span> {data?.getJobById.jobSalary}
                                        </Card.Text>

                                        <Card.Text>
                                            <span className='fw-bold'>Валидна до: </span> {data?.getJobById.jobValidUntil}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Container>




                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Card className="border-0 text-primary">
                        <Card.Body className="h4">
                            <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faAt} />Описание</Card.Text>
                            <Card.Text className="h6 text-secondary pb-3">{data?.getJobById.jobDescription}</Card.Text>
                        </Card.Body>
                    </Card>

                    <Container className='d-flex flex-row justify-content-between'>

                        <Card className="border-0 text-primary">
                            <Card.Body className="h4">
                                <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faPlus} />Отговорности</Card.Text>
                                <Container className="h6 ps-0 ms-0 text-secondary">
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.getJobById.jobResponsibility_one}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.getJobById.jobResponsibility_two}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.getJobById.jobResponsibility_three}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.getJobById.jobResponsibility_four}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />{data?.getJobById.jobResponsibility_five}</Card.Text>
                                </Container>
                            </Card.Body>
                        </Card>


                        <Card className="border-0 text-primary">
                            <Card.Body className="h4">
                                <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faPlus} />Изисквания</Card.Text>
                                <Container className="h6 ps-0 ms-0 text-secondary">
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />
                                        {data?.getJobById.jobRequirements_one}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobRequirements_two}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobRequirements_three}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobRequirements_four}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobRequirements_five}</Card.Text>
                                </Container>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 text-primary">
                            <Card.Body className="h4">
                                <Card.Text className=""><FontAwesomeIcon className="me-2" icon={faPlus} />Фирмата предлага: </Card.Text>
                                <Container className="h6 ps-0 ms-0 text-secondary">
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} />
                                        {data?.getJobById.jobCompanyOffers_one}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobCompanyOffers_two}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobCompanyOffers_three}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobCompanyOffers_four}</Card.Text>
                                    <Card.Text><FontAwesomeIcon className="me-2" icon={faCircleCheck} /> {data?.getJobById.jobCompanyOffers_five}</Card.Text>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Container>



                </Container>

            </SSRProvider>
        </>

    )
}
export default FullJobInfo