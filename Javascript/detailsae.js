let param = new URLSearchParams(location.search);
let Num_SAE = param.get("Num_SAE");





document.querySelector(".num_SAE").innerHTML = SAE.titre;
document.querySelector(".semestre").innerHTML = SAE.semestre;
document.querySelector(".description").innerHTML = SAE.description;
document.querySelector(".AC").innerHTML = SAE.AC;
document.querySelector(".ressources").innerHTML = SAE.ressources;
