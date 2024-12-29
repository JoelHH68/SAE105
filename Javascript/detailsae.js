// Récupère les paramètres de l'URL pour extraire la valeur associée à "Num_SAE"
let param = new URLSearchParams(location.search);
//Extrait la valeur de "Num_SAE" depuis l'url
let Num_SAE = param.get("Num_SAE");

// Vérification de si l'objet contient une entrée qui corrrespond au numéro de la SAE extrait avant 
if (SAE[Num_SAE]) {
    //Récupère les données de la SAE
    const sae = SAE[Num_SAE];

    //Mise à jour du titre avec le nom de la bonne SAE
    document.querySelector("h1").innerHTML = "Voici la " + Num_SAE;
    //Insère les informations spécifiques de la SAE dans les éléments correspondants
    document.querySelector(".titre").innerHTML = sae.titre;
    document.querySelector(".semestre").innerHTML = sae.semestre;
    document.querySelector(".description").innerHTML = sae.description;


    //Génère une liste des Compétences associées à la SAE
    let Liste_compétences = "";
    for (let compétence in sae.compétences) {
        Liste_compétences += `<div>${sae.compétences[compétence]}</div>`;
    }
    document.querySelector(".competences").innerHTML = Liste_compétences;

    //Génère une liste des AC associées à la SAE
    let Liste_AC = "";
    for (let ac in sae.AC) {
        Liste_AC += `<div>${ac} : ${sae.AC[ac]}</div>`;                                                                
    }
    document.querySelector(".AC").innerHTML = `<a href="Pdf/` +Num_SAE+`.pdf">`+ Liste_AC +`</a>`;

    //Génère une liste des Ressources associées à la SAE
    let Liste_ressources = "";
    for (let ressource in sae.ressources) {
        Liste_ressources += `<div>${ressource} : ${sae.ressources[ressource]}</div>`;
    };
    document.querySelector(".ressources").innerHTML = Liste_ressources;
};
