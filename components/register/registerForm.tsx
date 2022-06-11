import React, { useState } from "react";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
import { useCurrentUserQuery, useLoginMutation } from "../../generates/graphql";
import { useCookies } from "react-cookie"
import { queryClient } from "../../pages/_app";
import { useCreateUserMutation } from "../../generates/graphql";
const RegisterForm: React.FC = () => {

    const { mutate } = useCreateUserMutation({
        onSuccess: () => {
            alert('Профилът Беше създаден успешно!');
            setTimeout(() => window.location.href = "/", 1000);
        }
    })

    const [userFirstName, setUserFirstName] = useState<string>('');
    const [userMiddleName, setUserMiddleName] = useState<string>('');
    const [userLastName, setUserLastName] = useState<string>('');

    const [userProffesion, setUserProffesion] = useState<string>('');
    const [userImage, setUserImage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [userLocationCity, setUserLocationCity] = useState<string>('');
    const [userLocationState, setUserLocationState] = useState<string>('');

    const [aboutMe, setAboutMe] = useState<string>('');

    const [userSkills_one, setUserSkills_one] = useState<string>('');
    const [userSkills_one_percent, setUserSkills_one_percent] = useState<string>('');

    const [userSkills_two, setUserSkills_two] = useState<string>('');
    const [userSkills_two_percent, setUserSkills_two_percent] = useState<string>('');

    const [userSkills_three, setUserSkills_three] = useState<string>('');
    const [userSkills_three_percent, setUserSkills_three_percent] = useState<string>('');

    const [userSkills_four, setUserSkills_four] = useState<string>('');
    const [userSkills_four_percent, setUserSkills_four_percent] = useState<string>('');

    const [userSkills_five, setUserSkills_five] = useState<string>('');
    const [userSkills_five_percent, setUserSkills_five_percent] = useState<string>('');

    const [userCertificate_or_Education_one, setUserCertificate_or_Education_one] = useState<string>('');
    const [userCertificate_or_Education_two, setUserCertificate_or_Education_two] = useState<string>('');
    const [userCertificate_or_Education_three, setUserCertificate_or_Education_three] = useState<string>('');
    const [userCertificate_or_Education_four, setUserCertificate_or_Education_four] = useState<string>('');
    const [userCertificate_or_Education_five, setUserCertificate_or_Education_five] = useState<string>('');

    const [userPreviousJob_one, setUserPreviousJob_one] = useState<string>('');
    const [userPreviousJob_two, setUserPreviousJob_two] = useState<string>('');
    const [userPreviousJob_three, setUserPreviousJob_three] = useState<string>('');
    const [userPreviousJob_four, setUserPreviousJob_four] = useState<string>('');
    const [userPreviousJob_five, setUserPreviousJob_five] = useState<string>('');


    const registerUser = (e: any) => {
        e.preventDefault();
        mutate({
            data: {
                userImage,
                userProffesion,
                userFirstName,
                userMiddleName,
                userLastName,
                email,
                userLocationCity,
                aboutMe,
                userSkills_one,
                userSkills_one_percent,
                userSkills_two,
                userSkills_two_percent,
                userSkills_three,
                userSkills_three_percent,
                userSkills_four,
                userSkills_four_percent,
                userSkills_five,
                userSkills_five_percent,
                userLocationState,
                userCertificate_or_Education_one,
                userCertificate_or_Education_two,
                userCertificate_or_Education_three,
                userCertificate_or_Education_four,
                userCertificate_or_Education_five,
                userPreviousJob_one,
                userPreviousJob_two,
                userPreviousJob_three,
                userPreviousJob_four,
                userPreviousJob_five,
                password
            }
        })

    }

    return (


        <Container>
            <Card className="h2 mb-5 coolborder">
                <Card.Text>Регистрация</Card.Text>
            </Card>
            <Row className="ps-3">
                <Col sm={12}>
                    <Card className="border-0">
                        <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>Информация</b></Card.Body>
                    </Card>

                    <Form>
                        <Form.Group className="d-flex flex-row">

                            <Form.Group className="mb-3 w-100 m-3">
                                <Form.Label>Име:</Form.Label>
                                <Form.Control value={userFirstName} className="mb-3" type="text" placeholder="Име" onChange={e => setUserFirstName(e.target.value)} />

                                <Form.Label>Презиме:</Form.Label>
                                <Form.Control value={userMiddleName} className="mb-3" type="text" placeholder="Презиме" onChange={e => setUserMiddleName(e.target.value)} />

                                <Form.Label>Фамилия:</Form.Label>
                                <Form.Control value={userLastName} className="mb-3" type="text" placeholder="Фамилия" onChange={e => setUserLastName(e.target.value)} />

                                <Form.Label>Професия:</Form.Label>
                                <Form.Control value={userProffesion} className="mb-3" type="text" placeholder="Професия" onChange={e => setUserProffesion(e.target.value)} />

                                <Form.Label>Ваша снимка:</Form.Label>
                                <Form.Control value={userImage} className="mb-3" type="text" placeholder="Линк към снимка(от друг сайт)" onChange={e => setUserImage(e.target.value)} />


                            </Form.Group>

                            <Form.Group className="mb-3 w-100 m-3">

                                <Form.Label>Емайл:</Form.Label>
                                <Form.Control value={email} className="mb-3" type="text" placeholder="Емайл" onChange={e => setEmail(e.target.value)} />

                                <Form.Label>Парола:</Form.Label>
                                <Form.Control value={password} className="mb-3" type="password" placeholder="Парола" onChange={e => setPassword(e.target.value)} />

                                <Form.Label>Държава:</Form.Label>
                                <Form.Control value={userLocationState} className="mb-3" type="text" placeholder="Държава" onChange={e => setUserLocationState(e.target.value)} />

                                <Form.Label>Град:</Form.Label>
                                <Form.Control value={userLocationCity} className="mb-3" type="text" placeholder="Град" onChange={e => setUserLocationCity(e.target.value)} />

                                <Form.Label>Кратка Информация за Мен:</Form.Label>
                                <Form.Control value={aboutMe} className="mb-3" type="text" placeholder="Кратка Информация за Мен" onChange={e => setAboutMe(e.target.value)} />

                            </Form.Group>
                        </Form.Group>

                        <Card className="border-0">
                            <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>Професионални Умения</b></Card.Body>

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Умение 1: </Form.Label>
                                    <Form.Control value={userSkills_one} className="mb-3" type="text" placeholder="Умение" onChange={e => setUserSkills_one(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="w-100 m-3 mb-0" >
                                    <Form.Label>Колко сте запознат с това умение в числа(от 1 до 100) </Form.Label>
                                    <Form.Control value={userSkills_one_percent} className="mb-3" type="text" placeholder="от 1 до 100" onChange={e => setUserSkills_one_percent(e.target.value)} />
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Умение 2: </Form.Label>
                                    <Form.Control value={userSkills_two} className="mb-3" type="text" placeholder="Умение" onChange={e => setUserSkills_two(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Колко сте запознат с това умение в числа(от 1 до 100) </Form.Label>
                                    <Form.Control value={userSkills_two_percent} className="mb-3" type="text" placeholder="от 1 до 100" onChange={e => setUserSkills_two_percent(e.target.value)} />
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Умение 3: </Form.Label>
                                    <Form.Control value={userSkills_three} className="mb-3" type="text" placeholder="Умение" onChange={e => setUserSkills_three(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Колко сте запознат с това умение в числа(от 1 до 100) </Form.Label>
                                    <Form.Control value={userSkills_three_percent} className="mb-3" type="text" placeholder="от 1 до 100" onChange={e => setUserSkills_three_percent(e.target.value)} />
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Умение 4: </Form.Label>
                                    <Form.Control value={userSkills_four} className="mb-3" type="text" placeholder="Умение" onChange={e => setUserSkills_four(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="w-100 m-3 mb-0">
                                    <Form.Label>Колко сте запознат с това умение в числа(от 1 до 100) </Form.Label>
                                    <Form.Control value={userSkills_four_percent} className="mb-3" type="text" placeholder="от 1 до 100" onChange={e => setUserSkills_four_percent(e.target.value)} />
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3">
                                    <Form.Label>Умение 5: </Form.Label>
                                    <Form.Control value={userSkills_five} className="mb-3" type="text" placeholder="Умение" onChange={e => setUserSkills_five(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="w-100 m-3">
                                    <Form.Label>Колко сте запознат с това умение в числа(от 1 до 100) </Form.Label>
                                    <Form.Control value={userSkills_five_percent} className="mb-3" type="text" placeholder="от 1 до 100" onChange={e => setUserSkills_five_percent(e.target.value)} />
                                </Form.Group>

                            </Form.Group>


                        </Card>

                        <Card className="border-0">
                            <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>Сертификати и Образование</b></Card.Body>

                            <Form.Label>Кратка Информация за Образованието:</Form.Label>
                            <Form.Control value={userCertificate_or_Education_one} as="textarea" rows={3} className="mb-3" onChange={e => setUserCertificate_or_Education_one(e.target.value)} />

                            <Form.Group className="d-flex flex-row">

                                <Form.Group className="w-100 m-3">
                                    <Card className="border-0">
                                        <Card.Body className="border-bottom h4 mb-4"><b>Образование</b></Card.Body>
                                    </Card>

                                    <Form.Label>Средно Образование:</Form.Label>
                                    <Form.Control value={userCertificate_or_Education_two} className="mb-3" type="text" placeholder="Средно Образование" onChange={e => setUserCertificate_or_Education_two(e.target.value)} />

                                    <Form.Label>Висше Образование:</Form.Label>
                                    <Form.Control value={userCertificate_or_Education_three} className="mb-3" type="text" placeholder="Висше Образование" onChange={e => setUserCertificate_or_Education_three(e.target.value)} />

                                </Form.Group>

                                <Form.Group className="w-100 m-3">
                                    <Card className="border-0">
                                        <Card.Body className="border-bottom h4 mb-4"><b>Сертификати</b></Card.Body>
                                    </Card>

                                    <Form.Label>Сертификат 1:</Form.Label>
                                    <Form.Control value={userCertificate_or_Education_four} className="mb-3" type="text" placeholder="Сертификат 1" onChange={e => setUserCertificate_or_Education_four(e.target.value)} />

                                    <Form.Label>Сертификат 2:</Form.Label>
                                    <Form.Control value={userCertificate_or_Education_five} className="mb-3" type="text" placeholder="Сертификат 2" onChange={e => setUserCertificate_or_Education_five(e.target.value)} />
                                </Form.Group>
                            </Form.Group>

                        </Card>

                        <Card className="border-0">
                            <Card.Body className="border-bottom h4 mb-4 coolbordertwo"><b>Работен Опит</b></Card.Body>

                            <Form.Group className="w-100 m-3">

                                <Form.Label>Кратка Информация за Работния Опит: </Form.Label>
                                <Form.Control value={userPreviousJob_one} as="textarea" rows={3} className="mb-3" onChange={e => setUserPreviousJob_one(e.target.value)} />

                                <Form.Label>Настояща Работа: </Form.Label>
                                <Form.Control value={userPreviousJob_two} className="mb-3" type="text" placeholder="Вашата Настояща Работа" onChange={e => setUserPreviousJob_two(e.target.value)} />

                                <Form.Label>Предишна Работа:</Form.Label>
                                <Form.Control value={userPreviousJob_three} className="mb-3" type="text" placeholder="Вашата Предишна Работа" onChange={e => setUserPreviousJob_three(e.target.value)} />

                                <Form.Label>Предишна Работа:</Form.Label>
                                <Form.Control value={userPreviousJob_four} className="mb-3" type="text" placeholder="Вашата Предишна Работа" onChange={e => setUserPreviousJob_four(e.target.value)} />

                                <Form.Label>Предишна Работа:</Form.Label>
                                <Form.Control value={userPreviousJob_five} className="mb-3" type="text" placeholder="Вашата Предишна Работа" onChange={e => setUserPreviousJob_five(e.target.value)} />


                            </Form.Group>



                        </Card>
                        <Container className="d-flex justify-content-center">
                            <Button variant="primary" type="submit" onClick={(e) => registerUser(e)}>Регистрация</Button>
                        </Container>



                    </Form>


                </Col>


            </Row>

        </Container >


    )
}

export default RegisterForm