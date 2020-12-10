import { render } from "node-sass";
import Home from "../pages/Home";
import About from "../pages/About";

const routes = {
  "/": Home(),
  "/about": About(),
};
