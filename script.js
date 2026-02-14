/* 
   script.js 
   Handles the Preloader Animation
*/

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  const counter = document.querySelector(".counter");
  const barFill = document.querySelector(".bar-fill");
  
  // Start the counter at 0
  let count = 0;
  
  // Updates every 20 milliseconds (adjust for speed)
  const interval = setInterval(() => {
    // Increment
    count++;
    
    // Update the HTML text and the CSS width
    if (counter) counter.textContent = count;
    if (barFill) barFill.style.width = count + "%";

    // When we reach 100%, stop and hide
    if (count === 100) {
      clearInterval(interval);
      
      // Add the fade-out class (defined in CSS)
      setTimeout(() => {
        preloader.classList.add("fade-out");
      }, 500); // Wait 0.5s at 100% before fading
    }
  }, 20); 
});