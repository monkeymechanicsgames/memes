// Array with preview + 4 memes
const memeImages = [
  {
     preview: "warriorcats.png",  // This is the grid image you click
    memes: ["warriorcats-1.png", "warriorcats-2.png", "warriorcats-3.png", "warriorcats-4.png"] // These 4 images show in th
     preview: "roblox.png", 
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
  memesArray.forEach(imgName => {
    html += `
      <img src="${imgName}" style="
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
