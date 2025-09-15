// Add an event listener to the window for the "scroll" event
window.addEventListener("scroll", function() {
    // Get the element with the ID "navbare"
    let nav = this.document.getElementById("navbare");
    // Check if the vertical scroll position is greater than 50 pixels
    if (this.window.scrollY > 50) {
        // If scrolled down more than 50px, add the CSS class "scrolled" to the nav element
        nav.classList.add("scrolled");
    } else {
        // Otherwise (if scrolled up to 50px or less), remove the CSS class "scrolled" from the nav element
        nav.classList.remove("scrolled");
    }
});

// Select the first element with the class "my-modle"
const mymodle = document.querySelector(".my-modle");
// Select all elements with the class "product-img" and convert the resulting NodeList into an array
const imges = Array.from(document.querySelectorAll(".product-img"));
// Select the first element with the class "left-btn"
const leftbtn = document.querySelector(".left-btn");
// Select the first element with the class "right-btn"
const rightbtn = document.querySelector(".right-btn");
// Select the first element with the class "closebtn"
const closebtn = document.querySelector(".close-btn");
// Select the first element with the class "modle-img"
const modleimg = document.querySelector(".modle-img");

// Initialize a variable to keep track of the current image index in the gallery
let currntindex = 0;

// Loop through each element in the 'imges' array (elements with class "product-img")
for (let i = 0; i < imges.length; i++) {
    // Add a "click" event listener to each image
    imges[i].addEventListener("click", (e) => {
        // When an image is clicked:
        // Remove the CSS class "d-none" from the "mymodle" element (making the modal visible)
        mymodle.classList.remove("d-none");
        // Set the "src" attribute of the "modleimg" element (the image inside the modal)
        // to the "src" attribute of the clicked image (e.target)
        modleimg.setAttribute("src", e.target.getAttribute("src"));
        // Set the current index to the index of the clicked image
        currntindex = i;
    });
}

// Add a "click" event listener to the "closebtn" element
closebtn.addEventListener("click", () => {
    // When the close button is clicked:
    // Add the CSS class "d-none" to the "mymodle" element (hiding the modal)
    mymodle.classList.add("d-none");
});

// Add a "click" event listener to the "rightbtn" element
rightbtn.addEventListener("click", () => {
    // When the right button is clicked:
    // Increment the current image index
    currntindex++;
    // Check if the current index has gone beyond the last image
    if (currntindex >= imges.length) {
        // If it has, wrap around to the first image (index 0)
        currntindex = 0;
    }
    // Set the "src" attribute of the "modleimg" to the "src" of the image at the new current index
    modleimg.setAttribute("src", imges[currntindex].getAttribute("src"));
});

// Add a "click" event listener to the "leftbtn" element
leftbtn.addEventListener("click", () => {
    // When the left button is clicked:
    // Decrement the current image index
    currntindex--;
    // Check if the current index has gone below the first image
    if (currntindex < 0) {
        // If it has, wrap around to the last image (index length - 1)
        currntindex = imges.length - 1;
    }
    // Set the "src" attribute of the "modleimg" to the "src" of the image at the new current index
    modleimg.setAttribute("src", imges[currntindex].getAttribute("src"));
});

