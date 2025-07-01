import "./styles.css";
import { setUpImageCarousel } from "./carousel.js";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

setUpImageCarousel();