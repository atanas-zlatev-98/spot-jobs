import { ListGroup } from "react-bootstrap";
import React from "react";
import { JobApplication } from "../../../generates/graphql";
import JobsListItemUser from "./JobsListItem";


interface Props {
    jobs: JobApplication[],
    onDelete: (_id: string) => void

}

const JobsListUser: React.FC<Props> = ({ jobs, onDelete }) => {
    return (

        <ListGroup>
            {jobs.map(job => (
                <JobsListItemUser key={job._id} job={job} onDelete={onDelete} />
            ))}

        </ListGroup>

    )
}
export default JobsListUser