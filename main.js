
window.addEventListener("scroll", function() {
   
    let nav = this.document.getElementById("navbare");
  
    if (this.window.scrollY > 50) {
     
        nav.classList.add("scrolled");
    } else {
     
        nav.classList.remove("scrolled");
    }
});


const mymodle = document.querySelector(".my-modle");

const imges = Array.from(document.querySelectorAll(".product-img"));

const leftbtn = document.querySelector(".left-btn");

const rightbtn = document.querySelector(".right-btn");

const closebtn = document.querySelector(".close-btn");

const modleimg = document.querySelector(".modle-img");


let currntindex = 0;

for (let i = 0; i < imges.length; i++) {

    imges[i].addEventListener("click", (e) => {
     
       
        mymodle.classList.remove("d-none");
      
        modleimg.setAttribute("src", e.target.getAttribute("src"));
     
        currntindex = i;
    });
}


closebtn.addEventListener("click", () => {
 
    mymodle.classList.add("d-none");
});


rightbtn.addEventListener("click", () => {
   
    currntindex++;
  
    if (currntindex >= imges.length) {
      
        currntindex = 0;
    }
   
    modleimg.setAttribute("src", imges[currntindex].getAttribute("src"));
});

leftbtn.addEventListener("click", () => {
  
    currntindex--;

    if (currntindex < 0) {
      
        currntindex = imges.length - 1;
    }
   
    modleimg.setAttribute("src", imges[currntindex].getAttribute("src"));
});

