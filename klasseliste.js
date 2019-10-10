// Henter elever fra fraværsregistreringssiden i VIS og generer en klasseliste med bilder.

const antallX = 5; // Antall elever i bredden pr. side
const antallY = 3; // Antall elever i høyden pr. side


const elevDiv = document.querySelectorAll(".attendance-card-header");
const elevGrids = [];
for(let i = 0; i < elevDiv.length; i++){
  if(i % (antallX * antallY) === 0){
    elevGrids.push(document.createElement("div"));
  }
  elevGrids[elevGrids.length - 1].innerHTML +=
    `
      <div class="elev">
        <img src="${elevDiv[i].children[0].src}">
        <p>${elevDiv[i].children[1].innerText}</p>
      </div>
    `;
}
document.body.innerHTML = "";
document.body.style.height = "auto";

for(const elevGrid of elevGrids){
  elevGrid.style.display = "grid";
  elevGrid.style.pageBreakAfter="always";
  elevGrid.style.gridTemplateColumns= `repeat(${antallX},1fr)`;
  document.body.appendChild(elevGrid);
}
