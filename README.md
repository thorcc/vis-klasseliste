# vis-klasseliste
 
Et lite skript som generer en klasseliste med bilder fra fraværsregistreringssiden i VIS.

Gjør følgende:
1. Gå inn på siden for å registrere dagens fravær for en klasse som har bilder
2. Trykk ctrl+shift+j (på mac: trykk f12 -> velg fanen konsoll)
3. Lim inn skriptet og trykk enter
4. Print ut siden
5. Oppdater siden for å komme tilbake til visma

Skriptet:
````
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

