import movies from "../utils/movies";

const getMovie = async (number) => {
  let API = `https://api.themoviedb.org/3/movie/${movies[number]}?api_key=e94c5fa2df629f66ab0e1f3a253f3866`;
  const response = await fetch(API);
  const data = await response.json();
  return data;
};

export default getMovie;
