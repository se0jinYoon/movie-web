import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"; 

function Movie({id, coverImg, title, summary, genres}) {
    return (
        <div className={styles.movie_el_box}>
            <img className={styles.movie_el_img} src={coverImg} alt = {title}></img>
            <div className = {styles.info_box}>
            <h2> 
               <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
} 

export default Movie;