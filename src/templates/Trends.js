import getMovie from "../utils/getMovie";

const API_IMAGES = "https://image.tmdb.org/t/p/w300/";

const Trends = async () => {
  let movie1 = await getMovie(18);
  let movie2 = await getMovie(2);
  let movie3 = await getMovie(3);
  let movie4 = await getMovie(4);
  let movie5 = await getMovie(5);

  const view = `
  <a href = "#/${movie1.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie1.backdrop_path}" />
  </a>
  <a href = "#/${movie2.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie2.backdrop_path}" />
  </a>
  <a href = "#/${movie3.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie3.backdrop_path}" />
  </a>
  <a href = "#/${movie4.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie4.backdrop_path}" />
  </a>
  <a href = "#/${movie5.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie5.backdrop_path}" />
  </a>
  `;
  return view;
};

export default Trends;
