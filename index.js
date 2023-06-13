window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    // store all colors for each div which we have added in the style(Note : color should be same from css)
    const colors =  [
        "rgb(244, 2, 195)",
        "rgb(3, 3, 122)", 
        "rgb(224, 17, 58)",
        "rgb(215, 215, 7)",
        "rgb(52, 50, 50",
        "rgb(7, 200, 7)"
    ]

    // lets access each div with audio using forEach 
    pads.forEach((pad, index) => {
        pad.addEventListener("click", () =>{
            // make currentTime= 0 for to stop previous sound when we click other sound pad.
            sounds[index].currentTime= 0;
            sounds[index].play();
           
            // taking this function to macth with index
            createBubbles(index);
        })
    });

    // create function to make bubbles
    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation= "jump 1s ease-in";
        bubble.addEventListener("animationend", () =>{
            visual.removeChild(bubble);
        })
    }
})