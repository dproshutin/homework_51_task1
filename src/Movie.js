import React from 'react';

const Movie = (props) => {
    console.log(props);
    return (
        <div className="movie">
            <img src={props.image} width="220" height="311"/>
            <h2>{props.name}</h2>
            <p>Год: {props.date}</p>
        </div>
    );
};

export default Movie;
