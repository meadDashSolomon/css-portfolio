import Typewriter from "typewriter-effect/dist/core";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("page-overlay");
  overlay.classList.add("slide-down");

  overlay.addEventListener("transitionend", () => {
    overlay.style.display = "none";
  });
});

const typewriter = new Typewriter("#typewriter", {
  cursor: "",
});

setTimeout(() => {
  typewriter
    .typeString("I design.")
    .pauseFor(400)
    .deleteChars(7)
    .typeString("code.")
    .pauseFor(400)
    .deleteChars(5)
    .typeString("build websites.")
    .start();
}, 250);
