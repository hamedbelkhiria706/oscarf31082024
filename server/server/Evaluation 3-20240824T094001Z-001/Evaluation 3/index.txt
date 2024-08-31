const images = [
  { src: "images/photo1.jpg", caption: "Légende de la Photo 1" },
  { src: "images/photo2.jpg", caption: "Légende de la Photo 2" },
  { src: "images/photo3.jpg", caption: "Légende de la Photo 3" },
  { src: "images/photo4.jpg", caption: "Légende de la Photo 4" },
  { src: "images/photo5.jpg", caption: "Légende de la Photo 5" },
];
let position = 1;
const prev = document.querySelector("#prevBtn");

const next = document.querySelector("#nextBtn");

const img = document.querySelector("#galleryImage");

const cap = document.querySelector("#caption");
prev.addEventListener("click", () => {
  position -= 1;
  if (position < 1) {
    position = 5;
  }

  img.setAttribute("src", images[position - 1].src);
  cap.textContent = images[position - 1].caption;
});
next.addEventListener("click", () => {
  position += 1;
  if (position > 5) {
    position = 1;
  }
  img.setAttribute("src", images[position - 1].src);
  cap.textContent = images[position - 1].caption;
});
const b = document.querySelector("body");

const originalTransform = img.style.transform;
const originalBgColor = b.style.backgroundColor;

img.addEventListener("mouseover", () => {
  // img.classList.add("hoverimage");
  img.style.transform = "scale(1.1)";
  b.style.backgroundColor = "black";
  b.style.transition = "background-color 0.5s";
  // b.classList.add("body1");
});
img.addEventListener("mouseleave", () => {
  //img.classList.remove("hoverimage");
  //b.classList.remove("body1");

  img.style.transform = originalTransform;
  b.style.backgroundColor = originalBgColor;
});
