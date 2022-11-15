import "./App.css";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
function App() {
  // const [movieName, setMovieName] = useState("spiderman");
  const [list, setList] = useState([]);
  // const getMovie = (e) => {
  //   setMovieName(e.target.value);
  // }

  useEffect(() => {
    (async (_) => {
      const res = await fetch(
        'http://www.omdbapi.com/?apikey=b6c1ddaf&s="marvel"'
      );
      const response = await res.json();

      console.log(response.Search);
      setList(response.Search);
    })();
  }, []);

  console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        {/* <input type="text" onClick={getMovie} /> */}
        <Movies list={list} />
      </header>
    </div>
  );
}

export default App;
