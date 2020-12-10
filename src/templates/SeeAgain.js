import getMovie from "../utils/getMovie";

const API_IMAGES = "https://image.tmdb.org/t/p/w300/";

const SeeAgain = async () => {
  let movie6 = await getMovie(6);
  let movie7 = await getMovie(7);
  let movie8 = await getMovie(8);
  let movie9 = await getMovie(9);
  let movie10 = await getMovie(10);

  const view = `
  <a href = "#/${movie6.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie6.backdrop_path}" />
  </a>
  <a href = "#/${movie7.id}"class="trends-card" >
    <img  src="${API_IMAGES}${movie7.backdrop_path}" />
  </a>
  <a href = "#/${movie8.id}"class="trends-card" >
    <img  src="${API_IMAGES}${movie8.backdrop_path}" />
  </a>
  <a href = "#/${movie9.id}"class="trends-card" >
    <img  src="${API_IMAGES}${movie9.backdrop_path}" />
  </a>
  <a href = "#/${movie10.id}"class="trends-card" >
    <img  src="${API_IMAGES}${movie10.backdrop_path}" />
  </a>
  `;
  return view;
};

export default SeeAgain;
