import PropTypes from "prop-types";
import {Link} from "react-router-dom";



const MovieDetail = ({id,img, title, rating, summary}) => {
    return(
        <div className="bg-slate-50" >
            <img src= {img} />
            <h1>{title}</h1>
            <div>rating : {rating}</div>
            <p>{summary}</p>
        </div>
    )
}




export default MovieDetail;