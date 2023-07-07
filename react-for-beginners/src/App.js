import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  // API 불러와서 Json parsing하기
  const getMovies = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies()
  },[])


  return (
    <div>
      {loading? <h1>Loading...</h1> : 
                <div>
                  {movies.map((movie) => (
                    <div key={movie.id}>
                      <img src={movie.medium_cover_image}></img>
                      <h2>{movie.title}</h2>
                      <p>{movie.summary}</p>
                      <ul>
                        {movie.genres.map(g => <li key={g}>{g}</li>)}
                      </ul>
                    </div>
                  ))}
                </div> }
    </div>
  )
}

export default App 

//http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=87aabdae434c4afee310a9208d02f2e3&targetDt=20230601
//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year