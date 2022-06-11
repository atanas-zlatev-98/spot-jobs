import JobsList from './JobsListUser';
import { useGetAllJobsQuery, useDeleteJobApplicationMutation } from "../../../generates/graphql";
import { Container, Col, Row } from "react-bootstrap";




const JobsContainerUser: React.FC = () => {

    const { isLoading, isError, data, refetch } = useGetAllJobsQuery({}, { refetchOnWindowFocus: false });
    const { mutate } = useDeleteJobApplicationMutation({
        onSuccess: () => {
            refetch()
        }
    })
    function onDelete(_id: string) {
        mutate({ id: _id })
    }

    if (isLoading) {
        return <span>Loading....</span>
    }

    if (isError) {
        return <span>Error....</span>
    }

    return (

        <Container>
            <Row>
                <Col className="" sm={12}>

                    <Container fluid>

                        <Row>
                            <Col>


                                <Container>
                                    {data && <JobsList jobs={data?.getAllJobs} onDelete={onDelete} />}
                                </Container>



                            </Col>
                        </Row>

                    </Container>

                </Col>

            </Row>


        </Container>



    )
}

export default JobsContainerUser