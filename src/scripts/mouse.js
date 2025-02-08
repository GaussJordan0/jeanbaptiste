import { animate } from "motion";

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let offsetWidth = 6;
let offsetheight = 6;

const isTouchScreen = navigator.maxTouchPoints > 0;
const cursor = document.createElement("div");
cursor.classList.add("cursor");
if (!isTouchScreen) {
  document.body.appendChild(cursor);
  
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const springConfig = {
  type: "spring",
  stiffness: 200,
  damping: 10,
  mass: 0.5,
};
let dx = 0;
let prevX = 0;
let lastDirectionX = 0;
const calculateRotation = () => {
  dx = mouseX - prevX;

  const currentDirectionX = dx > 10 ? 1 : dx < -10 ? -1 : 0;

  if (currentDirectionX !== lastDirectionX && currentDirectionX !== 0) {
    lastDirectionX = currentDirectionX;

    if (
      currentDirectionX > 0 &&
      !images.some((img) =>
        img.contains(document.elementFromPoint(mouseX, mouseY)),
      )
    ) {
      animate(cursor, { rotate: 360 }, { duration: 0.4 });
    } else if (
      !images.some((img) =>
        img.contains(document.elementFromPoint(mouseX, mouseY)),
      )
    ) {
      animate(cursor, { rotate: -360 }, { duration: 0.4 });
    }
  }
};
const images = [...document.querySelectorAll("video")];
images.forEach((image) => {
  let timer
  image.addEventListener("mouseenter", () => {
     timer =setTimeout(() => {
      
      cursor.innerText = "Play full video";
    }, 400);

    animate(cursor.style, {width: "120px", height:"24px"}, {duration:0.2, delay:.2});
  });
  image.addEventListener("mouseleave", () => {
    clearTimeout(timer)
    animate(cursor.style, {width: "12px", height:"12px"}, {duration:0.2, delay:.2});
    cursor.innerText = "";
  });
});

const tick = () => {
  animate(
    cursor.style,
    { left: `${mouseX - offsetWidth}px` },
    { springConfig },
  );

  animate(
    cursor.style,
    { top: `${mouseY - offsetheight}px` },
    { springConfig },
  );
  calculateRotation();
  prevX = mouseX;

  window.requestAnimationFrame(tick);
};
tick();

