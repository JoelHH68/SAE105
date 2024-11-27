let Num_SAE=Object.keys(SAE);

let content_HTML =""

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
    document.querySelector(".content").innerHTML += content_HTML

console.log(Num_SAE)
const boites = document.querySelectorAll(".cases");

boites.forEach(function(cases, indice){
   const cle = Num_SAE[indice];
   const sae = SAE[cle];

   if(sae){
      cases.querySelector(".num_sae").innerHTML = cle;
      cases.querySelector(".titre_sae").innerHTML = sae["titre"];
      cases.querySelector(".competences_sae").innerHTML = sae["compétences"].join("");
   }

});

