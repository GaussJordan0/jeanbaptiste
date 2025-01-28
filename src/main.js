import "./style.css";
import "./scripts/three";
import "./scripts/mouse";
import "./scripts/iframes";
import "./scripts/animations";

// import { animate, scroll } from "motion";
import Lenis from "lenis";

const lenis = new Lenis({
  autoRaf: true,
  lerp: 0.05,
});
