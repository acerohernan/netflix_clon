import "../src/styles/main.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDescription from "./pages/MovieDescription";

const render = async (fn) => {
  const element = await fn();
  const main = document.querySelector(".main-content");
  main.innerHTML = element;
};

if (window.location.hash === "") {
  render(Home);
} else if (window.location.hash === "#/about") {
  render(About);
} else {
  render(MovieDescription);
}

window.addEventListener("hashchange", () => {
  if (window.location.hash === "") {
    render(Home);
  } else if (window.location.hash === "#/about") {
    render(About);
  } else {
    render(MovieDescription);
  }
});

window.addEventListener("hashchange", () => {
  let scrollTop = ((
    document.header ||
    document.body.parentNode ||
    document.body
  ).scrollTop = 0);
  console.log("oa");
});
