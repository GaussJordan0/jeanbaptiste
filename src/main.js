import "./style.css";
import "./scripts/three";
import "./scripts/mouse";
import "./scripts/iframes";
import "./scripts/animations";

import { animate } from "motion";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.1,
});

// const body = document.querySelector("body");
// const trigger = document.getElementById("trigger");
// const observer = new IntersectionObserver((entries)=>{

//  body.style.transition = "background-color 1s";
// body.style.background = entries[0].isIntersecting ? "white" : "#090979";
// body.style.color = entries[0].isIntersecting ? "#090979" : "white";
// }, {threshold: 0.4,})
// observer.observe(trigger)


