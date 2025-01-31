import { animate, stagger, inView, delay, scroll } from "motion";

const texts = document.querySelectorAll("h1");
const reveals = document.querySelectorAll(".citroen, hr");

reveals.forEach((reveal) => {
  inView(reveal, () => {
    animate(reveal, { opacity: [0, 1] }, { duration: 0.7 }, delay(0.5));
  });
}); 


texts.forEach((text) => {
  // Split text into characters and wrap in spans
  const chars = text.textContent.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    return span;
  });

  // Clear original text and add wrapped chars
  text.textContent = "";
  chars.forEach((span) => text.appendChild(span));

  // Animate the spans
  inView(text, () => {
    animate(
      chars,
      {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        delay: stagger(0.02), // Correct stagger usage
        duration: 0.3,
      },
    );
  });
});

const ps = document.querySelectorAll("p");

ps.forEach((text) => {
  // Split text into characters and wrap in spans
  const chars = text.textContent.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    return span;
  });

  // Clear original text and add wrapped chars
  text.textContent = "";
  chars.forEach((span) => text.appendChild(span));

  // Animate the spans
  inView(text, () => {
    animate(
      chars,
      {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
      },
      {
        delay: stagger(0.005), // Correct stagger usage
        duration: 0.3,
      },
    );
  });
});

const observerTrigger = document.querySelector("#observer-trigger");
const body = document.querySelector("body");
const observerbody = document.querySelector(".observerbody");
const observerSquare = document.querySelectorAll("#square");
const subtitle = document.querySelector("#subtitle");

inView(
  observerTrigger,
  () => {
    body.style.backgroundColor = "var(--color-blue)";
    body.style.transition = "background-color 0.5s ease-in-out";
    observerbody.style.color = "white";
    subtitle.style.color = "white";
    subtitle.style.transition = "color 0.5s ease-in-out";
    observerbody.style.transition = "color 0.5s ease-in-out";
    observerbody.style.backgroundColor = "var(--color-blue)";
    observerbody.style.transition = "background-color 0.5s ease-in-out";
    observerSquare.forEach((square) => {
      square.style.backgroundColor = "var(--color-yellow)";
      square.style.transition = "background-color 0.5s ease-in-out";
    });
    return () => {
      body.style.backgroundColor = "white";
      body.style.transition = "background-color 0.5s ease-in-out";
      observerbody.style.color = "var(--color-blue)";
      observerbody.style.transition = "color 0.5s ease-in-out";
      observerbody.style.backgroundColor = "white";
      observerbody.style.transition = "background-color 0.5s ease-in-out";
      observerSquare.forEach((square) => {
        square.style.backgroundColor = "var(--color-blue)";
        square.style.transition = "background-color 0.5s ease-in-out";
        subtitle.style.color = "var(--color-blue)";
        subtitle.style.transition = "color 0.5s ease-in-out";
      });
    };
  },
  { amount: 0.5 },
);

// scroll(".footertext",{
//   a
//   target: ".footer-container",})