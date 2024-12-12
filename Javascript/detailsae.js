let param = new URLSearchParams(location.search);
let Num_SAE = param.get("Num_SAE");


if (SAE[Num_SAE]) {
    const sae = SAE[Num_SAE];

    document.querySelector("h1").innerHTML = "Voici la " + Num_SAE;
    document.querySelector(".titre").innerHTML = sae.titre;
    document.querySelector(".semestre").innerHTML = sae.semestre;
    document.querySelector(".description").innerHTML = sae.description;

    console.log(Num_SAE)

    let Liste_compétences = "";
    for (let compétence in sae.compétences) {
        Liste_compétences += `<div>${sae.compétences[compétence]}</div>`;
    }
    document.querySelector(".competences").innerHTML = Liste_compétences;

    let Liste_AC = "";
    for (let ac in sae.AC) {
        Liste_AC += `<div>${ac} : ${sae.AC[ac]}</div>`;                                                                
    }
    document.querySelector(".AC").innerHTML = `<a href="Pdf/` +Num_SAE+`.pdf">`+ Liste_AC +`</a>`;

    let Liste_ressources = "";
    for (let ressource in sae.ressources) {
        Liste_ressources += `<div>${ressource} : ${sae.ressources[ressource]}</div>`;
    };
    document.querySelector(".ressources").innerHTML = Liste_ressources;
};
