import React from 'react'
// import { Button, Card, Elevation } from "@blueprintjs/core";
import { Card } from '@mui/material';
type TaskProps = {
    title: string,
    description: string,
    status: string,
}

export function TaskCard(props: TaskProps) {

    const title = props.title;
    const description = props.description;
    const status = props.status;


    return (
        <div>
            
        <Card >
            <h5>
                {title}
            </h5>
            <p>{description}</p>
            <h5>{status}</h5>
        </Card>
    </div>
    )
}
