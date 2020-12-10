import MainMovie from "../templates/MainMovie";
import Trends from "../templates/Trends";
import SeeAgain from "../templates/SeeAgain";
import Originals from "../templates/Originals";

const Home = async () => {
  const mainMovie = await MainMovie();
  const trends = await Trends();
  const seeAgain = await SeeAgain();
  const originals = await Originals();

  const view = `
  <section class="main-movie">
    ${mainMovie}
  </section>
    <section class="trends">
      <h3>Tendencias</h3>
      <div class="trends-card-container">
      ${trends}
      ${trends}
      ${trends}
      ${trends}
      ${trends}
      ${trends}
      ${trends}
      ${trends}
      </div>
     
    </section>
    <section class="trends">
      <h3>See Again</h3>
      <div class="trends-card-container">
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      ${seeAgain}
      </div>
     
    </section>
    <section class="trends">
      <h3>Originals</h3>
      <div class="trends-card-container">
      ${originals}
      ${originals}
      ${originals}
      ${originals}
      ${originals}
      ${originals}
      ${originals}
      ${originals}
      </div>
     
    </section>`;
  return view;
};

export default Home;
