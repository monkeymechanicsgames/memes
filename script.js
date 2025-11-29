// Array with preview + 4 memes
const memeImages = [
  {
    preview: "warriorcats.png",
    memes: ["m1.png", "m2.png", "m3.png", "m4.png"]
  }
];

const grid = document.getElementById("imageGrid");

memeImages.forEach(pack => {
  const img = document.createElement("img");
  img.src = pack.preview;
  img.alt = "Meme Pack";
  img.style.width = "200px";
  img.style.borderRadius = "12px";
  img.style.cursor = "pointer";
  img.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
  img.onclick = () => openPopup(pack.memes); // PASS THE ARRAY ONLY
  grid.appendChild(img);
});

function openPopup(memesArray) {
  document.getElementById("popup").style.display = "flex";

  let html = "";
  memesArray.forEach(img => {
    html += `
      <img src="${img}" style="
        width: 45%;
        margin: 10px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      ">
    `;
  });

  document.getElementById("popupContent").innerHTML = html;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
