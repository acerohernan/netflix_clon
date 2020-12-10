import getMovie from "../utils/getMovie";

const API_IMAGES = "https://image.tmdb.org/t/p/w300/";

const Originals = async () => {
  let movie11 = await getMovie(11);
  let movie12 = await getMovie(12);
  let movie13 = await getMovie(13);
  let movie14 = await getMovie(14);
  let movie15 = await getMovie(15);

  const view = `
  <a href = "#/${movie11.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie11.backdrop_path}" />
  </a>
  <a href = "#/${movie12.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie12.backdrop_path}" />
  </a>
  <a href = "#/${movie13.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie13.backdrop_path}" />
  </a>
  <a href = "#/${movie14.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie14.backdrop_path}" />
  </a>
  <a href = "#/${movie15.id}" class="trends-card" >
    <img  src="${API_IMAGES}${movie15.backdrop_path}" />
  </a>
  `;
  return view;
};

export default Originals;
