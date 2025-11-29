const memeImages = [
  {
    preview: "warriorcats.png",  // This is the grid image you click
    memes: ["m1.png", "m2.png", "m3.png", "m4.png"] // These 4 images show in the popup
  }
];

// AUTO-GENERATE 3-per-row IMAGE GRID
const grid = document.getElementById("imageGrid");

memeImages.forEach(name => {
  const img = document.createElement("img");
  img.src = name;
  img.alt = name;
  img.onclick = () => openPopup(name);
  grid.appendChild(img);
});

// POPUP FUNCTIONS
function openPopup(imgName) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popupContent").innerHTML =
    `<p>You clicked: ${imgName}</p>`;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
