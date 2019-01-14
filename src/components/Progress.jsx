import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export const Progress = (props) => {
    const now = props.progress;
    return (
        <ProgressBar
            now={now}
            bsStyle="info"
            label={`${now / 10}/10`} />
    )
}