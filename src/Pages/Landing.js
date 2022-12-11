import React, { useEffect, useState } from "react";
// import CustomCard from "../Components/CustomCard";
import "./landing.scss";
import "../Components/customCard.scss";

function Landing() {
  // set states
  const [movie, setMovie] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Fetch movies function
  const fetchMovie = async () => {
    const result = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=6ed00ae2"
    );
    const data = await result.json();
    setMovie([data]);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  // handleInput function
  const handleInput = (e) => {
    return setSearchInput(e.target.value)
  }

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = movie.filter(
      (searched) => searched.Title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setMovie(searchResult)
    
  };

  return (
    <div className="landing">
      <div className="header">
        <button>MyTestApp</button>
      </div>
      <article>
        <div className="hero_image">
          <img src="/images/photo-1517604931442-7e0c8ed2963c.jpg" alt="hero" />
        </div>
        <h1>Watch something incredible.</h1>
      </article>

      <form type="submit">
        <label>Search</label>
        <input onChange={handleInput} />
        <button onClick={handleSubmit}>search</button>
      </form>
      <section>
      <div className="category">
                <p className="category_title">Category</p>
        {
          movie.map((mov) => {
            return (
                <div className="movie" key={mov.Title}>
                  <img src={mov.Poster} alt="movie" />
                  <p className="title">{mov.Title}</p>
                </div>
            )
          })
        }
        </div>
      </section>
    </div>
  );
}

export default Landing;
