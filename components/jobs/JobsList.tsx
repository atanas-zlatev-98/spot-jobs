import { ListGroup } from "react-bootstrap";
import React from "react";
import { JobApplication } from "../../generates/graphql";
import JobsListItem from "../jobs/JobsListItem";


interface Props {
    jobs: JobApplication[],
    onSelect: (_id: string) => void
}

const JobsList: React.FC<Props> = ({ jobs, onSelect }) => {
    return (

        <ListGroup>
            {jobs.map(job => (
                <JobsListItem key={job._id} job={job} onSelect={onSelect} />
            ))}

        </ListGroup>

    )
}
/*onDelete={onDelete}*/
export default JobsList