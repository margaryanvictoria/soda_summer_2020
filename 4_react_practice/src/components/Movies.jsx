import React from 'react';
import Movie from "./Movie";

export default function Movies(props) {
    /* const state = React.useState(props.movies);
    const value = state[0];
    const setState = state[1]; */
    
    // ES6 Array Destructuring
    const [movies, setMovies] = React.useState(props.data.movies);

    return (
        <div>
            <button onClick={()=>{
                if(movies.length > 0) {
                    setMovies(movies.slice(1));
                }
            }}>
                Delete
            </button>
            <button onClick={()=>{
                setMovies(props.data.movies)
            }}>
                Restore
            </button>
            {
                movies.map((movie, index) => {
                    return <Movie key={index} name={movie.name} genre={movie.genre} year={movie.year} />
                })
            }
        </div>
    )
}
