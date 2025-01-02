//Récupération des clés sous forme de tableau
let Num_SAE=Object.keys(SAE);

//Initialisation d'une chaine de caractère vide qui va accueillir les informations 
let content_HTML ="";

// boucle for pour générer la structure HTML et les liens
 for (let i = 0; i<Num_SAE.length; i++) 
    {  
     content_HTML += 
     `<a href="../detailsae.html?Num_SAE=${Num_SAE[i]}">
         <div class="cases">
            <div class="num_sae"></div>
            <div class="titre_sae"></div>
            <div class="competences_sae"></div> 
         </div>
      </a>`;
    }
   //Ajout du contenu HTML dans la chaine de caractère initialiser plus haut 
   document.querySelector(".content").innerHTML += content_HTML

console.log(Num_SAE)

//Ajoute dans la variables boites les éléments de la classe cases  
const boites = document.querySelectorAll(".cases");

//Parcourt chaque "case" pour y ajouter les informations des SAE
boites.forEach(function(cases, indice){
   //Récupère la clé correspondant à l'indice
   const cle = Num_SAE[indice];
   //Récupère les données correspondant à la clé
   const sae = SAE[cle];

   //Condition if pour vérifié que les données existent réellement avant d'insérer les données.
   if(sae){
      //Insère les informations des SAE dans les classe correspondante
      cases.querySelector(".num_sae").innerHTML = cle;
      cases.querySelector(".titre_sae").innerHTML = sae["titre"];
      cases.querySelector(".competences_sae").innerHTML = sae["compétences"].join(" ");
   }

});