
let cles=Object.keys(SAE);

 for (let i = 0; i<cles.length; i++) 
    { 
     document.querySelector(".content").innerHTML += "<div class='cases'><div class='num_sae'></div><div class='titre_sae'></div><div class='competences_sae'></div></div>"
    }


const boites = document.querySelectorAll(".boite");

boites.forEach((cases, indice)=>{
   const cle = cles[indice];
   const sae = SAE[cle];

   if(sae){
      cases.querySelector(".num_sae").innerHTML = cle;
      console.log(cle)
      cases.querySelector(".titre_sae").innerHTML = sae.titre;
      cases.querySelector(".competences_sae").innerHTML = sae.competences.join(",");

   }

});