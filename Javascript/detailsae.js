let params = new URLSearchParams(window.location.search);
let Num_SAE = params.get("sae");

let titre_sae = SAE.titre;
let semestre = SAE.semestre;
let description = SAE.description;
let AC = SAE.AC;
let ressources = SAE.ressources;

document.querySelector(".num_SAE").innerHTML = titre_sae;
document.querySelector(".semestre").innerHTML = semestre;
document.querySelector(".description").innerHTML = description;
document.querySelector(".AC").innerHTML = AC;
document.querySelector(".ressources").innerHTML = ressources;
