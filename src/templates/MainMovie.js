import getMovie from "../utils/getMovie";

const API_IMAGES = "https://image.tmdb.org/t/p/w500/";

const MainMovie = async () => {
  const data = await getMovie(18);
  const view = `
  <div class="main-movie-container">
   <div class="main-movie__img" height="120px"></div>
   <div class="main-movie__description">
      <h2>${data.original_title}</h2>
      <p>${data.overview}</p>
      <div class="button-container">
      
      <button>Reproducir</button>
      <button>Más información</button>
      </div>
    </div>
  </div>
  `;
  return view;
};

export default MainMovie;
