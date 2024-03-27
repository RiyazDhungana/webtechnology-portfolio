const images = [
  "/Assets/FoodieDelight.png",
  "/Assets/JavaIIS1.png",
  "/Assets/JavaIIS2.png",
  "/Assets/Portfolio.png",
  "/Assets/AquaScape.png",
  "/Assets/burgrr.png",
];
const title = [
  "Foodie Delight- A Resturant Website",
  "Student IMS in Java- Entering Data",
  "Student IMS in Java- Viewing Data",
  "Portfolio Website",
  "AquaScape-Wordpress Ecommerce Website",
  "Burgrr- A Burger Store",
];
let count = 0;
let img = document.getElementById("Image");
let pname = document.getElementById("projectName");
function changeImage(x) {
  if (x == 0) {
    if (count == 0) {
      alert("There are no images before this..");
    } else {
      pname.innerHTML = title[count - 1];
      img.src = images[count - 1];
      count--;
    }
  } else if (x == 1) {
    if (count == images.length - 1) {
      alert("There are no images after this");
    } else {
      pname.innerHTML = title[count + 1];
      img.src = images[count + 1];
      count++;
    }
  }
}
var typed = new Typed("#element", {
  strings: [
    "IT Student.",
    "Diligient Learner.",
    "Frontend Learnee.",
    "Web Developer.",
  ],
  typeSpeed: 100,
  loop: true,
});

function changeContent(a) {

  if (a == 0) {
    document.getElementById("Heading").innerHTML = "About Me";
    document.getElementById("text").innerHTML = "Hello";
  } else if (a == 1) {
    document.getElementById("Heading").innerHTML = "Education";
    document.getElementById("text").innerHTML = "Hello";
  } else if (a == 2) {
    document.getElementById("Heading").innerHTML = "Skills and experience";
    document.getElementById("text").innerHTML = "Hello";
  } else if (a == 3) {
    document.getElementById("Heading").innerHTML = "Vision";
    document.getElementById("text").innerHTML = "Hello";
  }
}
