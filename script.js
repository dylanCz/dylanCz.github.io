const words = [
  "Platform Engineer",
  "Esports Enthusiast",
  "Competitive Gamer",
  "FOSS Advocate",
];

const el = document.querySelector(".word");
let i = 0;

function next() {
  el.classList.replace("in", "out");
  setTimeout(() => {
    i = (i + 1) % words.length;
    el.textContent = words[i];
    el.classList.replace("out", "in");
  }, 380);
}

el.textContent = words[0];
el.classList.add("in");
setInterval(next, 5000);
