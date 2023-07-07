// url에 따라 어떤 페이지를 보여줄지 정해주는 부분

import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";

function App() {
  return (
    <Router>
      {/* Switch는 Route(URL)를 찾아주는 역할을 하고 찾으면 component를 render한다 */}
      <Switch>
        {/* movie 디테일로 가는 route */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        {/* home으로 가는 route */}
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  ) 
}

export default App 

//http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=87aabdae434c4afee310a9208d02f2e3&targetDt=20230601
//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year