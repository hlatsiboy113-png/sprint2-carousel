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