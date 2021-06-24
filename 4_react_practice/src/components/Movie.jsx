import React from 'react';

export default function Movie(props) {
    return (
        <div>
            <h2>{props.movie.name}</h2>
            <p>{props.movie.genre}, {props.movie.year}</p>
        </div>
    )
}