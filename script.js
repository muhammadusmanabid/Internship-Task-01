const texts = ["Market Competitive Salary", "On Your Desire Domain", "Gain Hands On"];
let i = 0, j = 0, isDeleting = false;

function type() {
  // Adjust where the break happens, or use a fixed split index for each sentence.
  let splitIndex = Math.floor(texts[i].length / 2);
  let current = texts[i].slice(0, j += isDeleting ? -1 : 1);

  let formattedText = current.length > splitIndex 
    ? current.slice(0, splitIndex) + "<br>" + current.slice(splitIndex) 
    : current;

  document.getElementById("text-container").innerHTML = formattedText;

  if (j === texts[i].length) isDeleting = true;
  if (j === 0 && isDeleting) { 
    isDeleting = false; 
    i = (i + 1) % texts.length; 
  }

  setTimeout(type, isDeleting ? 100 : 150);
 }

type();

const container = document.querySelector(".opportunity")
const back = document.querySelector("#scroll-lft")
const next = document.querySelector("#scroll-rgt")

container.addEventListener("wheel",(e)=>{
    e.preventDefault()
    container.scrollLeft += e.deltaX; 
})
next.addEventListener("click",()=>{
    container.style.scrollBehavior = "smooth";
    container.scrollLeft +=1000;
})
back.addEventListener("click",()=>{
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -=1000;
})



// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

// Function to toggle 'visible' class with delays
function handleScroll() {
    const icons = document.querySelectorAll('.icon'); // Select only icons
    icons.forEach((icon, index) => {
        if (isInViewport(icon)) {
            icon.style.setProperty('--delay', `${index * 0.2}s`); // Set delay based on index
            icon.classList.add('visible');  // Add 'visible' if in viewport
        } else {
            icon.classList.remove('visible');  // Remove 'visible' if out of viewport
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in the viewport on load
handleScroll();





const reviewsContainer = document.querySelector('.reviews');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
let autoScrollInterval;
const scrollStep = 220; // Adjust to match box width + margin

// Function to automatically scroll
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        reviewsContainer.scrollLeft += scrollStep;
        if (reviewsContainer.scrollLeft + reviewsContainer.clientWidth >= reviewsContainer.scrollWidth) {
            reviewsContainer.scrollLeft = 0; // Loop back to start when reaching end
        }
    }, 3000); // 3 seconds interval
}

// Stop automatic scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Start auto-scrolling on load
startAutoScroll();

// Scroll left on button click
scrollLeftBtn.addEventListener('click', () => {
    stopAutoScroll();
    reviewsContainer.scrollLeft -= scrollStep;
    startAutoScroll();
});

// Scroll right on button click
scrollRightBtn.addEventListener('click', () => {
    stopAutoScroll();
    reviewsContainer.scrollLeft += scrollStep;
    startAutoScroll();
});

// Restart auto-scroll if user interacts
reviewsContainer.addEventListener('scroll', () => {
    stopAutoScroll();
    startAutoScroll();
});


window.addEventListener("scroll", function() {
    const image = document.querySelector(".portal-img");
    const rect = image.getBoundingClientRect();
    
    if (rect.top <= this.window.innerHeight && rect.bottom >=0){
        image.classList.add('visible');
    }
});

const winner = document.querySelector(".winner");
const btn = document.getElementById("close-btn");

btn.addEventListener("click",()=>{
    winner.style.display = "none";
})