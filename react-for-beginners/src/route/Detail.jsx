import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/Detail"

function Detail() {
    const {id} = useParams();
    const [detail, setDetails] = useState({});

    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie);
    }
    console.log(detail.title);
    useEffect(() => {
        getMovie();
    },[])
    
    return (
        <MovieDetail 
            id = {detail.id}
            img = {detail.background_image}
            title = {detail.title}
            rating = {detail.rating}
            summary = {detail.description_full} />
    )
}

export default Detail;