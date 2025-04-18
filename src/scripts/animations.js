import { animate, stagger, inView, scroll } from "motion";

const texts = document.querySelectorAll("h1");

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
        delay: stagger(0.03), // Correct stagger usage
        duration: 0.5,
      },
    );
  });
});



const observerTrigger = document.querySelector("#observer-trigger");
const body = document.querySelector("body");
const observerbody = document.querySelectorAll(".observerbody");
const observerSquare = document.querySelectorAll("#square");
const subtitle = document.querySelector("#subtitle");

inView(
  observerTrigger,
  () => {
    body.style.backgroundColor = "var(--color-blue)";
    body.style.transition = "background-color 0.5s ease-in-out";
    subtitle.style.color = "white";
    subtitle.style.transition = "color 0.5s ease-in-out";
    observerbody.forEach((observerbody) => {
      
      observerbody.style.color = "white";
      observerbody.style.transition = "color 0.5s ease-in-out";
      observerbody.style.backgroundColor = "var(--color-blue)";
      observerbody.style.transition = "background-color 0.5s ease-in-out";
    })
    observerSquare.forEach((square) => {
      square.style.backgroundColor = "var(--color-yellow)";
      square.style.transition = "background-color 0.5s ease-in-out";
    });
    return () => {
      body.style.backgroundColor = "white";
      body.style.transition = "background-color 0.5s ease-in-out";
      observerbody.forEach((observerbody) => {
        
        observerbody.style.color = "var(--color-blue)";
        observerbody.style.transition = "color 0.5s ease-in-out";
        observerbody.style.backgroundColor = "white";
        observerbody.style.transition = "background-color 0.5s ease-in-out";
      })
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

// const footertext = document.querySelectorAll(".footer-text");
// const footerContainer = document.querySelector(".footer-container");

// const animation = animate (footertext, { y:[1000, 0]})

// if(  window.innerWidth < 768){

//   scroll(animation, { 
//     target: footerContainer, 
//     offset: ["0 1", "1 0"]
  
    
//   });
// }else {
//   scroll(animation, { 
//     target: footerContainer, 
//     offset: ["0 1", "0.75 0"]
  
    
//   });
// }


const images = document.querySelectorAll("img");

images.forEach((image) => {
  inView(image, () => {
    animate(
      image,
      {
        filter: ["blur(30px)", "blur(0px)"],
        
      },
      {
        duration: 0.3,
        delay: 0.3
      },
    );
  });
})


const hrs = document.querySelectorAll("hr");

hrs.forEach((hr) => {
  inView(hr, () => {
    animate(
      hr,
      {
        clipPath: ["inset(0 100% 0 0)", "inset(0 0 0 0)"],
      },
      {
        duration: .7 ,
      },
    );
  });
})


const ps = document.querySelectorAll("p");

ps.forEach((p) => {
  inView(p, () => {
    animate(
      p,
      {
        filter: ["blur(10px)", "blur(0px)"],
        opacity: [0,1]
      },
      {
        duration: 0.7  ,
      },
    );
  });
})


const resumeLinks = document.querySelectorAll("#resume");

resumeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.open("/resume.pdf", "_blank");
  });
});
