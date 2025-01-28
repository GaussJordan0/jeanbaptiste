import { animate, stagger, inView } from "motion";

const texts = document.querySelectorAll('h1');

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
  inView(text, () =>{

    animate(
      chars,
      { 
        opacity: [0, 1],
       filter: ["blur(10px)", "blur(0px)"]
  
      },
      {
        delay: stagger(.03), // Correct stagger usage
        duration: 0.3
      }
    );
  });
  })
  
// texts.forEach((text) => {
//   text.textContent.split('').map(char => {
//     const char = document.createElement('span');
//     char.textContent = char;
//     return char;
    
//   })
// })

// inView(texts, (e) => {
//  animate(e,{opacity:[0,1],filter:["blur(10px)", "blur(0px)"]},{duration:0.5, delay: stagger(.05)}) 
// })

