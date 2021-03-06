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
            alert('?????????????? ???????? ??????????????????!');
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
                <Card.Text>?????????????????? ???? ??????????</Card.Text>
            </Card>

            <Row>
                <Col sm={12}>

                    <Form>
                        <Form.Group className="ms-3">
                            <Form.Group>
                                <Card className="border-0">
                                    <Card.Body className="border-bottom h5 mb-4 coolbordertwo"><b>???????????????????? ???? ??????????????</b></Card.Body>
                                </Card>

                                <Form.Group className="ms-3">

                                    <Form.Group className="mb-5 pb-2">

                                        <Form.Group>
                                            <Form.Label>?????? ???? ??????????????:</Form.Label>
                                            <Form.Control value={jobCompanyName} className="mb-3" type="text" placeholder="?????? ???? ??????????????" onChange={e => setJobCompanyName(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>???????????????????????????? ???? ??????????????:</Form.Label>
                                            <Form.Control value={jobCompanyLocation} className="mb-3" type="text" placeholder="????????????????????????????" onChange={e => setJobCompanyLocation(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>?? ?????????? ???? ???????????????? ???????????????</Form.Label>
                                            <Form.Control value={jobCompanyField} className="mb-3" type="text" placeholder="?? ?????????? ???? ???????????????? ??????????????" onChange={e => setJobCompanyField(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>???????? ???? ??????????????:</Form.Label>
                                            <Form.Control value={jobCompanyLogo} className="mb-3" type="text" placeholder="???????? ?????? ????????(???? ???????? ????????):" onChange={e => setJobCompanyLogo(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>?????????? ???? ????????????:</Form.Label>
                                            <Form.Control value={jobCompanyEmail} className="mb-3" type="text" placeholder="??????????:" onChange={e => setJobCompanyEmail(e.target.value)} />
                                        </Form.Group>

                                    </Form.Group>

                                </Form.Group>

                                <Card.Body className="border-bottom ms-0 h5 mb-4 coolbordertwo"><b>?????????? ???????????????? ??????????????:</b></Card.Body>

                                <Form.Group className="d-flex flex-row mb-5 pb-3">

                                    <Form.Group className="w-100 m-2">
                                        <Form.Label>?????????? ???????????????? ?????????????? 1: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_one} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 1" onChange={e => setJobCompanyOffers_one(e.target.value)} />

                                        <Form.Label>?????????? ???????????????? ?????????????? 2: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_two} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 2" onChange={e => setJobCompanyOffers_two(e.target.value)} />

                                        <Form.Label>?????????? ???????????????? ?????????????? 3: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_three} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 3"
                                            onChange={e => setJobCompanyOffers_three(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="w-100 m-2">
                                        <Form.Label>?????????? ???????????????? ?????????????? 4: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_four} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 4" onChange={e => setJobCompanyOffers_four(e.target.value)} />

                                        <Form.Label>?????????? ???????????????? ?????????????? 5: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_five} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 5"
                                            onChange={e => setJobCompanyOffers_five(e.target.value)} />

                                        <Form.Label>?????????? ???????????????? ?????????????? 6: </Form.Label>
                                        <Form.Control value={jobCompanyOffers_six} className="mb-3" type="text" placeholder="?????????? ???????????????? ?????????????? 6"
                                            onChange={e => setJobCompanyOffers_six(e.target.value)} />
                                    </Form.Group>



                                </Form.Group>

                                <Card className="border-0">
                                    <Card.Body className="border-bottom h5 mb-4 coolbordertwo"><b>???????????????????? ???? ??????????????</b></Card.Body>
                                </Card>
                                <Form.Group className="d-flex flex-row ms-3">

                                    <Form.Group className="mb-3 w-100 m-3">

                                        <Form.Label>????????????????:</Form.Label>
                                        <Form.Control value={jobTitle} className="mb-3" type="text" placeholder="????????????????" onChange={e => setJobTitle(e.target.value)} />

                                        <Form.Label>????????????:</Form.Label>
                                        <Form.Control value={jobImage} className="mb-3" type="text" placeholder="???????? ?????? ????????????(???? ???????? ????????)"
                                            onChange={e => setJobImage(e.target.value)} />

                                        <Form.Label>?????????????????????? ????:</Form.Label>
                                        <Form.Control value={jobPostedOn} className="mb-3" type="text" placeholder="???????? ???? ??????????????????????"
                                            onChange={e => setJobPostedOn(e.target.value)} />

                                        <Form.Label>?????????????? ????: </Form.Label>
                                        <Form.Control value={jobValidUntil} className="mb-3" type="text" placeholder="?????????????? ????"
                                            onChange={e => setJobValidUntil(e.target.value)} />

                                        <Form.Label>???????????????? ??????????:</Form.Label>
                                        <Form.Control value={jobSpots} className="mb-3" type="text" placeholder="???????????????? ??????????"
                                            onChange={e => setJobSpots(e.target.value)} />

                                        <Form.Label>?????????????????? ????????:</Form.Label>
                                        <Form.Control value={jobRequiredExpirience} className="mb-3" type="text" placeholder="?????????????????? ????????"
                                            onChange={e => setJobRequiredExpirience(e.target.value)} />


                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 m-3">


                                        <Form.Label>????????????:</Form.Label>
                                        <Form.Control value={jobRegion} className="mb-3" type="text" placeholder="????????????"
                                            onChange={e => setJobRegion(e.target.value)} />

                                        <Form.Label>????????????????????????????:</Form.Label>
                                        <Form.Control value={jobLocation} className="mb-3" type="text" placeholder="????????????????????????????" onChange={e => setJobLocation(e.target.value)} />

                                        <Form.Label>??????????????????:</Form.Label>
                                        <Form.Control value={jobCategory} className="mb-3" type="text" placeholder="??????????????????"
                                            onChange={e => setJobCategory(e.target.value)} />

                                        <Form.Label>??????????????:</Form.Label>
                                        <Form.Control value={jobSalary} className="mb-3" type="text" placeholder="??????????????"
                                            onChange={e => setJobSalary(e.target.value)} />

                                        <Form.Label>?????????????? ??????????:</Form.Label>
                                        <Form.Control value={jobWorkHours} className="mb-3" type="text" placeholder="?????????????? ??????????" onChange={e => setJobWorkHours(e.target.value)} />
                                    </Form.Group>


                                </Form.Group>
                            </Form.Group>

                            <Form.Group className=" ms-3 mb-5 pb-3">

                                <Form.Label>????????????????:</Form.Label>
                                <Form.Control value={jobDescription} className="mb-3" type="text" as="textarea" rows={7} placeholder="????????????????" onChange={e => setJobDescription(e.target.value)} />

                            </Form.Group>



                            <Card className="border-0">
                                <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>???????????????????????? ?? ????????????????????</b></Card.Body>

                                <Form.Group className="d-flex flex-row ms-3">

                                    <Form.Group className="w-100 m-2">
                                        <Card.Body className="border-bottom h4 mb-4"><b>????????????????????????:</b></Card.Body>


                                        <Form.Label>?????????????????????? 1: </Form.Label>
                                        <Form.Control value={jobResponsibility_one} className="mb-3" type="text" placeholder="?????????????????????? 1" onChange={e => setJobResponsibility_one(e.target.value)} />

                                        <Form.Label>?????????????????????? 2: </Form.Label>
                                        <Form.Control value={jobResponsibility_two} className="mb-3" type="text" placeholder="?????????????????????? 2" onChange={e => setJobResponsibility_two(e.target.value)} />

                                        <Form.Label>?????????????????????? 3: </Form.Label>
                                        <Form.Control value={jobResponsibility_three} className="mb-3" type="text" placeholder="?????????????????????? 3" onChange={e => setJobResponsibility_three(e.target.value)} />

                                        <Form.Label>?????????????????????? 4: </Form.Label>
                                        <Form.Control value={jobResponsibility_four} className="mb-3" type="text" placeholder="?????????????????????? 4" onChange={e => setJobResponsibility_four(e.target.value)} />

                                        <Form.Label>?????????????????????? 5: </Form.Label>
                                        <Form.Control value={jobResponsibility_five} className="mb-3" type="text" placeholder="?????????????????????? 5"
                                            onChange={e => setJobResponsibility_five(e.target.value)} />

                                    </Form.Group>

                                    <Form.Group className="w-100 m-2">

                                        <Card.Body className="border-bottom h4 mb-4"><b>????????????????????:</b></Card.Body>


                                        <Form.Label>?????????????????? 1: </Form.Label>
                                        <Form.Control value={jobRequirements_one} className="mb-3" type="text" placeholder="?????????????????? 1" onChange={e => setJobRequirements_one(e.target.value)} />

                                        <Form.Label>?????????????????? 2: </Form.Label>
                                        <Form.Control value={jobRequirements_two} className="mb-3" type="text" placeholder="?????????????????? 2"
                                            onChange={e => setJobRequirements_two(e.target.value)} />

                                        <Form.Label>?????????????????? 3: </Form.Label>
                                        <Form.Control value={jobRequirements_three} className="mb-3" type="text" placeholder="?????????????????? 3"
                                            onChange={e => setJobRequirements_three(e.target.value)} />

                                        <Form.Label>?????????????????? 4: </Form.Label>
                                        <Form.Control value={jobRequirements_four} className="mb-3" type="text" placeholder="?????????????????? 4"
                                            onChange={e => setJobRequirements_four(e.target.value)} />

                                        <Form.Label>?????????????????? 5: </Form.Label>
                                        <Form.Control value={jobRequirements_five} className="mb-3" type="text" placeholder="?????????????????? 5"
                                            onChange={e => setJobRequirements_five(e.target.value)} />

                                    </Form.Group>

                                </Form.Group>





                            </Card>


                            <Form.Group className="d-flex justify-content-center">
                                <Button variant="primary" type="submit" onClick={(e) => createApplication(e)}>?????????????????? ???? ??????????</Button>
                            </Form.Group>

                        </Form.Group>

                    </Form>






                </Col>


            </Row>

        </Container >


    )
}

export default CreateNewJobForm