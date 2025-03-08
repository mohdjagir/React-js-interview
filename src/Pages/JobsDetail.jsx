import React from 'react'
import { useParams } from 'react-router'

const JobsDetail = () => {
    const { id } = useParams();
    return (
        <div>JobsDetail {id}</div>
    )
}

export default JobsDetail