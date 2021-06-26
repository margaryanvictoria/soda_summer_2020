import React from 'react';

export default function Movie(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.genre}, {props.year}</p>
        </div>
    )
}