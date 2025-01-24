import { animate, stagger } from "motion";

const texts = document.querySelectorAll('.primary-text');

texts.forEach((text) => {
  // Split text into characters and wrap in spans
  const chars = text.textContent.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    return span;
  });

  // Clear original text and add wrapped chars
  text.textContent = '';
  chars.forEach(span => text.appendChild(span));

  // Animate the spans

  animate(
    chars,
    { 
      opacity: [0, 1],
     filter: ["blur(10px)", "blur(0px)"]

    },
    {
      delay: stagger(.05), // Correct stagger usage
      duration: 0.5
    }
  );
});