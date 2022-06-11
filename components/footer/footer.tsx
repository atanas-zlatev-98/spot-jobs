import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer: React.FC = () => {

    return (

        <Container className="footer-cont pt-5">
            <Row className="text-white text-left ">
                <Col sm className="align-items-left d-flex flex-column mb-5">
                    <h4 className="pb-2">SpotJobs тук сте на правилното място!</h4>
                    <p>Известен факт е, че читателя обръща внимание на съдържанието, което чете, а не на оформлението му. Свойството на Lorem Ipsum е</p>
                    <Container>
                        <Col sm><button type="button" className="btn btn-outline-primary">Facebook</button></Col>
                        <Col sm></Col>
                        <Col sm></Col>
                    </Container>

                </Col>
                <Col sm className="align-items-left d-flex flex-column mb-5">

                    <h4 className="border-bottom border-primary">SpotJobs</h4>

                    <Nav.Link className="ps-0 footer-hov" href="/">Начало</Nav.Link>



                    <Nav.Link className="ps-0 footer-hov" href="/up-to-date">Актуално</Nav.Link>



                    <Nav.Link className="ps-0 footer-hov" href="/contacts">Контакти</Nav.Link>


                </Col>
                <Col sm className="align-items-left d-flex flex-column mb-5">
                    <h4 className="border-bottom border-primary">Кандидати</h4>

                    <Nav.Link className="ps-0 text-white footer-hov" href="/search-jobs">Разглеждане на Обяви</Nav.Link>



                    <Nav.Link className="ps-0 text-white footer-hov" href="/send-resume">Изпратете Автобиография</Nav.Link>



                    <Nav.Link className="ps-0 text-white footer-hov" href="/search-company">Търсене на Компании</Nav.Link>


                </Col>
                <Col sm className="align-items-left d-flex flex-column mb-5">
                    <h4 className="border-bottom border-primary">Работодатели</h4>

                    <Nav.Link className="ps-0 text-white footer-hov" href="/create-application">Създаване на Обява</Nav.Link>



                    <Nav.Link className="ps-0 text-white footer-hov" href="/find-candidate">Намиране на Кандидати</Nav.Link>



                    <Nav.Link className="ps-0 text-white footer-hov" href="/resumes">Автобиографий</Nav.Link>

                </Col>
                <Col sm className="align-items-left d-flex flex-column mb-5">
                    <h4>Как да се свържете с нас?</h4>
                    <p className="align-items-center d-flex">spotjobs@gmail.com</p>
                    <p className="align-items-center d-flex">гр.Пазарджик ул."Димитър Пейчев №12"</p>
                    <p className="align-items-center d-flex">+3599033323</p>
                </Col>
            </Row>
            <h4 className="text-center text-white pt-4 pb-3">Copyright © 2022 SpotJobs</h4>
        </Container>

    )


}

export default Footer