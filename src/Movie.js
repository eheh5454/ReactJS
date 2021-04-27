import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

// prop들은 {}로 감싸주어야함!
// alt는 사진에 마우스를 올렸을 때 나오는 이름 
function Movie({id,year,title,summary,poster,genres}){
    return (
    <div className="movie"> 
        <img src={poster} alt={title} title={title} /> 
        <div className="movie__data">
            <h3 className="movie__title" style={{backgroundColor: "#BAD4EC"}}>{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
            <ul className="movie__genre">
                {genres.map((genre,index) => (
                 <li key={index} className="genres_genre">{genre}</li>))}
            </ul>
        </div> 
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;