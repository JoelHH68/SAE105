
let Num_SAE=Object.keys(SAE);

 for (let i = 0; i<Num_SAE.length; i++) 
    { 
     document.querySelector(".content").innerHTML += "<a href='../detailsea.html?Num_SAE='"+Num_SAE+ "><div class='cases'><div class='num_sae'></div><div class='titre_sae'></div><div class='competences_sae'></div></div></a>"
    }

console.log(Num_SAE)
const boites = document.querySelectorAll(".cases");

boites.forEach((cases, indice)=>{
   const cle = Num_SAE[indice];
   const sae = SAE[cle];

   if(sae){
      cases.querySelector(".num_sae").innerHTML = cle;
      cases.querySelector(".titre_sae").innerHTML = sae["titre"];
      cases.querySelector(".competences_sae").innerHTML = sae["compétences"];

   }

});