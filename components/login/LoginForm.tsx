import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useCurrentUserQuery, useLoginMutation } from "../../generates/graphql";
import { useCookies } from "react-cookie"
import { queryClient } from "../../pages/_app";

const LoginForm: React.FC = () => {

    const [email, setEmail] = useState<string>('');

    const [password, setPassword] = useState<string>('');

    const { data, isLoading, error, refetch } = useCurrentUserQuery(undefined, {
        refetchOnWindowFocus: false,
        retry: 1,
    });

    const [cookie, setCookie] = useCookies(["token"])

    const { mutate } = useLoginMutation({
        onSuccess: (data) => {
            if (data.login)
                setCookie("token", data.login, {
                    path: "/",
                    maxAge: 3600,
                    sameSite: true,
                })

            queryClient.removeQueries('CurrentUser')

            setTimeout(() => {
                refetch()
            })
            window.location.href = "/Profile";

        }
    })

    const loginUser = (e: any) => {
        e.preventDefault();
        mutate({ email, password })
    }

    return (
        <Form>
            <Card className="border-0">
                <Card.Text className="text-center text-black h4">Вход</Card.Text>
            </Card>
            <Form.Group className=" m-3" controlId="formBasicEmail">
                <Form.Label className="text-black ">Емайл Адрес:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Емайл: "
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="" />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label className="text-black">Парола:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Парола"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                    Ние никога няма да споделим вашата парола с когото и да е било
                </Form.Text>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
                <Button className="m-3" variant="primary" type="submit" onClick={(e) => loginUser(e)}>
                    Вход
                </Button>
            </Form.Group>

        </Form>
    )
}

export default LoginForm