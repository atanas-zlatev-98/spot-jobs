import { Button, ListGroup, Container, Card, Breadcrumb, Col, Row } from "react-bootstrap";
import React from "react";
import { JobApplication } from "../../../generates/graphql";


interface Props {
    job: JobApplication,
    onDelete: (_id: string) => void
}
const JobsListItemUser: React.FC<Props> = ({ job, onDelete }) => {
    return (

        <Card className="jobs-cards d-flex flex-row mb-3">
            <Card.Img className="logos" variant="top" src={job.jobCompanyLogo} />
            <Card.Body className="jobs-body d-flex flex-row justify-content-between align-items-center">
                <Card.Text className="d-flex flex-column">
                    <Card.Title><b>@{job.jobTitle}</b></Card.Title>
                    <Card.Text >{job.jobDescription}</Card.Text>
                    <Container className="d-flex flex-row ps-0 justify-content-evenly">
                        <Card.Text className="jobs-fulltime m-2">Местоположение: {job.jobLocation}</Card.Text>
                        <Card.Text className="jobs-halftime m-2"> Заплата: {job.jobSalary}</Card.Text>
                        <Card.Text className="jobs-temporary m-2">Позиция: {job.jobCompanyField} </Card.Text>
                    </Container>
                </Card.Text>

                <Button variant="outline-danger me-3" onClick={(e) => onDelete(job._id)}>Изтриване</Button>
            </Card.Body>
        </Card>

    )
}

export default JobsListItemUser