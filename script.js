const languages = [
  {
    name: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "Structure of web pages"
  },
  {
    name: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Styling and layout"
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Adds interactivity"
  }
];

let currentIndex = 0;

const img = document.getElementById("langImage");
const nameEl = document.getElementById("langName");
const desc = document.getElementById("langDesc");

function renderLanguage(index) {
  const item = languages[index];
  img.src = item.image;
  nameEl.textContent = item.name;
  desc.textContent = item.description;
}

document.getElementById("nextBtn").onclick = () => {
  currentIndex = (currentIndex + 1) % languages.length;
  renderLanguage(currentIndex);
};

document.getElementById("prevBtn").onclick = () => {
  currentIndex = (currentIndex - 1 + languages.length) % languages.length;
  renderLanguage(currentIndex);
};

renderLanguage(currentIndex);