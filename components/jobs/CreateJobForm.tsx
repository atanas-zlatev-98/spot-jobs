import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { useCurrentUserQuery, useLoginMutation } from "../../generates/graphql";
import { useCookies } from "react-cookie"
import { queryClient } from "../../pages/_app";
import { useCreateUserMutation } from "../../generates/graphql";
import { useCreateJobApplicationMutation } from "../../generates/graphql";

const CreateNewJobForm: React.FC = () => {
    //const [] = useState<string>('');
    const [jobImage, setJobImage] = useState<string>('');
    const [jobCompanyName, setJobCompanyName] = useState<string>('');
    const [jobCompanyLocation, setJobCompanyLocation] = useState<string>('');
    const [jobCompanyField, setJobCompanyField] = useState<string>('');
    const [jobCompanyLogo, setJobCompanyLogo] = useState<string>('');
    const [jobCompanyEmail, setJobCompanyEmail] = useState<string>('');
    const [jobCompanyOffers_one, setJobCompanyOffers_one] = useState<string>('');
    const [jobCompanyOffers_two, setJobCompanyOffers_two] = useState<string>('');
    const [jobCompanyOffers_three, setJobCompanyOffers_three] = useState<string>('');
    const [jobCompanyOffers_four, setJobCompanyOffers_four] = useState<string>('');
    const [jobCompanyOffers_five, setJobCompanyOffers_five] = useState<string>('');
    const [jobCompanyOffers_six, setJobCompanyOffers_six] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [jobPostedOn, setJobPostedOn] = useState<string>('');
    const [jobValidUntil, setJobValidUntil] = useState<string>('');
    const [jobSpots, setJobSpots] = useState<string>('');
    const [jobRequiredExpirience, setJobRequiredExpirience] = useState<string>('');
    const [jobRegion, setJobRegion] = useState<string>('');
    const [jobLocation, setJobLocation] = useState<string>('');
    const [jobCategory, setJobCategory] = useState<string>('');
    const [jobSalary, setJobSalary] = useState<string>('');
    const [jobWorkHours, setJobWorkHours] = useState<string>('');
    const [jobDescription, setJobDescription] = useState<string>('');
    const [jobResponsibility_one, setJobResponsibility_one] = useState<string>('');
    const [jobResponsibility_two, setJobResponsibility_two] = useState<string>('');
    const [jobResponsibility_three, setJobResponsibility_three] = useState<string>('');
    const [jobResponsibility_four, setJobResponsibility_four] = useState<string>('');
    const [jobResponsibility_five, setJobResponsibility_five] = useState<string>('');
    const [jobRequirements_one, setJobRequirements_one] = useState<string>('');
    const [jobRequirements_two, setJobRequirements_two] = useState<string>('');
    const [jobRequirements_three, setJobRequirements_three] = useState<string>('');
    const [jobRequirements_four, setJobRequirements_four] = useState<string>('');
    const [jobRequirements_five, setJobRequirements_five] = useState<string>('');

    const { mutate } = useCreateJobApplicationMutation({
        onSuccess: () => {
            console.log("Application Created");
            alert('Обявата беше Създадена!');
            setTimeout(() => window.location.href = "/JobsPage", 1000);
        }
    })

    const createApplication = (e: any) => {
        e.preventDefault();
        mutate({
            data: {
                jobCompanyName,
                jobImage,
                jobCompanyLocation,
                jobCompanyField,
                jobCompanyLogo,
                jobCompanyEmail,
                jobCompanyOffers_one,
                jobCompanyOffers_two,
                jobCompanyOffers_three,
                jobCompanyOffers_four,
                jobCompanyOffers_five,
                jobCompanyOffers_six,
                jobTitle,
                jobPostedOn,
                jobValidUntil,
                jobSpots,
                jobRequiredExpirience,
                jobRegion,
                jobLocation,
                jobCategory,
                jobSalary,
                jobWorkHours,
                jobDescription,
                jobResponsibility_one,
                jobResponsibility_two,
                jobResponsibility_three,
                jobResponsibility_four,
                jobResponsibility_five,
                jobRequirements_one,
                jobRequirements_two,
                jobRequirements_three,
                jobRequirements_four,
                jobRequirements_five,
            }
        })
    }


    return (

        <Container>
            <Card className="h2 mb-5 coolborder">
                <Card.Text>Създаване на Обява</Card.Text>
            </Card>

            <Row>
                <Col sm={12}>

                    <Form>
                        <Form.Group className="ms-3">
                            <Form.Group>
                                <Card className="border-0">
                                    <Card.Body className="border-bottom h5 mb-4 coolbordertwo"><b>Информация за Фирмата</b></Card.Body>
                                </Card>

                                <Form.Group className="ms-3">

                                    <Form.Group className="mb-5 pb-2">

                                        <Form.Group>
                                            <Form.Label>Име на Фирмата:</Form.Label>
                                            <Form.Control value={jobCompanyName} className="mb-3" type="text" placeholder="Име на Фирмата" onChange={e => setJobCompanyName(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Местоположение на Фирмата:</Form.Label>
                                            <Form.Control value={jobCompanyLocation} className="mb-3" type="text" placeholder="Местоположение" onChange={e => setJobCompanyLocation(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>С какво се занимава фирмата?</Form.Label>
                                            <Form.Control value={jobCompanyField} className="mb-3" type="text" placeholder="С какво се занимава фирмата" onChange={e => setJobCompanyField(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Лого на фирмата:</Form.Label>
                                            <Form.Control value={jobCompanyLogo} className="mb-3" type="text" placeholder="Линк към лого(от друг сайт):" onChange={e => setJobCompanyLogo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Емайл за вързка:</Form.Label>
                                            <Form.Control value={jobCompanyEmail} className="mb-3" type="text" placeholder="Емайл:" onChange={e => setJobCompanyEmail(e.target.value)} />
                                        </Form.Group>

                                    </Form.Group>

                                </Form.Group>

                                <Card.Body className="border-bottom ms-0 h5 mb-4 coolbordertwo"><b>Какво предлага фирмата:</b></Card.Body>

                                <Form.Group className="d-flex flex-row mb-5 pb-3">

                                    <Form.Group className="w-100 m-2">
                                        <Form.Label>Какво предлага фирмата 1: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_one} className="mb-3" type="text" placeholder="Какво предлага фирмата 1" onChange={e => setJobCompanyOffers_one(e.target.value)} />

                                        <Form.Label>Какво предлага фирмата 2: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_two} className="mb-3" type="text" placeholder="Какво предлага фирмата 2" onChange={e => setJobCompanyOffers_two(e.target.value)} />

                                        <Form.Label>Какво предлага фирмата 3: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_three} className="mb-3" type="text" placeholder="Какво предлага фирмата 3"
                                            onChange={e => setJobCompanyOffers_three(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="w-100 m-2">
                                        <Form.Label>Какво предлага фирмата 4: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_four} className="mb-3" type="text" placeholder="Какво предлага фирмата 4" onChange={e => setJobCompanyOffers_four(e.target.value)} />

                                        <Form.Label>Какво предлага фирмата 5: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_five} className="mb-3" type="text" placeholder="Какво предлага фирмата 5"
                                            onChange={e => setJobCompanyOffers_five(e.target.value)} />

                                        <Form.Label>Какво предлага фирмата 6: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_six} className="mb-3" type="text" placeholder="Какво предлага фирмата 6"
                                            onChange={e => setJobCompanyOffers_six(e.target.value)} />
                                    </Form.Group>



                                </Form.Group>

                                <Card className="border-0">
                                    <Card.Body className="border-bottom h5 mb-4 coolbordertwo"><b>Информация за Обявата</b></Card.Body>
                                </Card>
                                <Form.Group className="d-flex flex-row ms-3">

                                    <Form.Group className="mb-3 w-100 m-3">

                                        <Form.Label>Заглавие:</Form.Label>
                                        <Form.Control value={jobTitle} className="mb-3" type="text" placeholder="Заглавие" onChange={e => setJobTitle(e.target.value)} />

                                        <Form.Label>Снимка:</Form.Label>
                                        <Form.Control value={jobImage} className="mb-3" type="text" placeholder="Линк към снимка(от друг сайт)"
                                            onChange={e => setJobImage(e.target.value)} />

                                        <Form.Label>Публикувана на:</Form.Label>
                                        <Form.Control value={jobPostedOn} className="mb-3" type="text" placeholder="Дата на публикуване"
                                            onChange={e => setJobPostedOn(e.target.value)} />

                                        <Form.Label>Валидна до: </Form.Label>
                                        <Form.Control value={jobValidUntil} className="mb-3" type="text" placeholder="Валидна до"
                                            onChange={e => setJobValidUntil(e.target.value)} />

                                        <Form.Label>Свободни места:</Form.Label>
                                        <Form.Control value={jobSpots} className="mb-3" type="text" placeholder="Свободни Места"
                                            onChange={e => setJobSpots(e.target.value)} />

                                        <Form.Label>Необходим Опит:</Form.Label>
                                        <Form.Control value={jobRequiredExpirience} className="mb-3" type="text" placeholder="Необходим Опит"
                                            onChange={e => setJobRequiredExpirience(e.target.value)} />


                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 m-3">


                                        <Form.Label>Регион:</Form.Label>
                                        <Form.Control value={jobRegion} className="mb-3" type="text" placeholder="Регион"
                                            onChange={e => setJobRegion(e.target.value)} />

                                        <Form.Label>Местоположение:</Form.Label>
                                        <Form.Control value={jobLocation} className="mb-3" type="text" placeholder="Местоположение" onChange={e => setJobLocation(e.target.value)} />

                                        <Form.Label>Категория:</Form.Label>
                                        <Form.Control value={jobCategory} className="mb-3" type="text" placeholder="Категория"
                                            onChange={e => setJobCategory(e.target.value)} />

                                        <Form.Label>Заплата:</Form.Label>
                                        <Form.Control value={jobSalary} className="mb-3" type="text" placeholder="Заплата"
                                            onChange={e => setJobSalary(e.target.value)} />

                                        <Form.Label>Работно време:</Form.Label>
                                        <Form.Control value={jobWorkHours} className="mb-3" type="text" placeholder="Работно време" onChange={e => setJobWorkHours(e.target.value)} />
                                    </Form.Group>


                                </Form.Group>
                            </Form.Group>

                            <Form.Group className=" ms-3 mb-5 pb-3">

                                <Form.Label>Описание:</Form.Label>
                                <Form.Control value={jobDescription} className="mb-3" type="text" as="textarea" rows={7} placeholder="Описание" onChange={e => setJobDescription(e.target.value)} />

                            </Form.Group>



                            <Card className="border-0">
                                <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>Отговорности и Изисквания</b></Card.Body>

                                <Form.Group className="d-flex flex-row ms-3">

                                    <Form.Group className="w-100 m-2">
                                        <Card.Body className="border-bottom h4 mb-4"><b>Отговорности:</b></Card.Body>


                                        <Form.Label>Отговорност 1: </Form.Label>
                                        <Form.Control value={jobResponsibility_one} className="mb-3" type="text" placeholder="Отговорност 1" onChange={e => setJobResponsibility_one(e.target.value)} />

                                        <Form.Label>Отговорност 2: </Form.Label>
                                        <Form.Control value={jobResponsibility_two} className="mb-3" type="text" placeholder="Отговорност 2" onChange={e => setJobResponsibility_two(e.target.value)} />

                                        <Form.Label>Отговорност 3: </Form.Label>
                                        <Form.Control value={jobResponsibility_three} className="mb-3" type="text" placeholder="Отговорност 3" onChange={e => setJobResponsibility_three(e.target.value)} />

                                        <Form.Label>Отговорност 4: </Form.Label>
                                        <Form.Control value={jobResponsibility_four} className="mb-3" type="text" placeholder="Отговорност 4" onChange={e => setJobResponsibility_four(e.target.value)} />

                                        <Form.Label>Отговорност 5: </Form.Label>
                                        <Form.Control value={jobResponsibility_five} className="mb-3" type="text" placeholder="Отговорност 5"
                                            onChange={e => setJobResponsibility_five(e.target.value)} />

                                    </Form.Group>

                                    <Form.Group className="w-100 m-2">

                                        <Card.Body className="border-bottom h4 mb-4"><b>Изисквания:</b></Card.Body>


                                        <Form.Label>Изискване 1: </Form.Label>
                                        <Form.Control value={jobRequirements_one} className="mb-3" type="text" placeholder="Изискване 1" onChange={e => setJobRequirements_one(e.target.value)} />

                                        <Form.Label>Изискване 2: </Form.Label>
                                        <Form.Control value={jobRequirements_two} className="mb-3" type="text" placeholder="Изискване 2"
                                            onChange={e => setJobRequirements_two(e.target.value)} />

                                        <Form.Label>Изискване 3: </Form.Label>
                                        <Form.Control value={jobRequirements_three} className="mb-3" type="text" placeholder="Изискване 3"
                                            onChange={e => setJobRequirements_three(e.target.value)} />

                                        <Form.Label>Изискване 4: </Form.Label>
                                        <Form.Control value={jobRequirements_four} className="mb-3" type="text" placeholder="Изискване 4"
                                            onChange={e => setJobRequirements_four(e.target.value)} />

                                        <Form.Label>Изискване 5: </Form.Label>
                                        <Form.Control value={jobRequirements_five} className="mb-3" type="text" placeholder="Изискване 5"
                                            onChange={e => setJobRequirements_five(e.target.value)} />

                                    </Form.Group>

                                </Form.Group>





                            </Card>


                            <Form.Group className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" onClick={(e) => createApplication(e)}>Създаване на Обява</Button>
                            </Form.Group>

                        </Form.Group>

                    </Form>






                </Col>


            </Row>

        </Container >


    )
}

export default CreateNewJobForm