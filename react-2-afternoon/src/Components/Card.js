import React from 'react';

const Card = (props) => {
    const favoriteMovies = props.employee ? props.employee.favoriteMovies.map((movie, i)=> (<li key={i}>{movie}</li>)) : (<div></div>)
    return (
        <div className='card'>
        <p id='number'>{props.index}/{props.amount}</p>
        {props.employee && 
        <div>
        <h1 id='title'>{props.employee.name.first} {props.employee.name.last}</h1>
        <div className='about'>
            <div><b>From:</b> {props.employee.city}, {props.employee.country}</div>
            <div><b>Job Title:</b> {props.employee.title}</div>
            <div><b>Employer:</b> {props.employee.employer}</div>
        </div>
        <div className='favorite-movies'>
            <b>Favorite Movies:</b>
            <ol>
                {favoriteMovies}
            </ol>
        </div>
        </div>}
    </div>
        
    )
};

export default Card;