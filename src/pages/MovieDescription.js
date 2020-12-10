import movies from "../utils/movies";
import SeeAgain from "../templates/SeeAgain";
import Originals from "../templates/Originals";
const API_IMAGES = "https://image.tmdb.org/t/p/w500/";

const MovieDescription = async () => {
  const movieNumber = Number(window.location.hash.slice(2));
  let API = `https://api.themoviedb.org/3/movie/${movieNumber}?api_key=e94c5fa2df629f66ab0e1f3a253f3866`;
  const response = await fetch(API);
  const data = await response.json();

  const validMovie = () => {
    if (data.adult === true) {
      return "+18";
    } else {
      return "Todo Público";
    }
  };

  const seeAgain = await SeeAgain();
  const originals = await Originals();

  const view = `
    <div class="main-movie-container">
      <img src="${API_IMAGES}${
    data.backdrop_path
  }" class="main-movie__img" height="120px">
      <div class="main-movie__description">
        <h2>${data.original_title}</h2>
        <p>${data.overview}</p>
      <div class="button-container">
        <button>Reproducir</button>
        <button>Más información</button>
      </div>
    </div>
    </div>
      <div class="main-movie__info">
      <div class="movie-info__left">
        <div class="info-left__bar">
          <span class="valid-movie">
          ${validMovie()}
          </span>
          <span>${data.release_date}</span>
          <span>Rating: ${data.vote_average}</span>
        </div>
        <p>${data.overview}</p>
      </div>
      <div class="movie-info__right">
        <span>Gender:   Action, Suspense, Drama</span>
        <span>This title is:   Emotion, Optimistic</span>
      </div>
    </div>
  <section class="trends">
      <h3>Similar Movies</h3>
      <div class="trends-card-container">
      ${seeAgain}
      </div>
  </section>
  <section class="trends">
      <h3>Originals</h3>
      <div class="trends-card-container">
      ${originals}
      </div>
  </section>
  `;

  return view;
};

export default MovieDescription;
