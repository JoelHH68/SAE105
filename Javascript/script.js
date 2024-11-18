let cles=Object.keys(SAE);
console.log(cles)

 for (let propriete in SAE) 
    { 
     console.log(propriete+" : "+SAE[propriete]);    
     document.querySelector(".pour_js").innerHTML = propriete+" : "+SAE[propriete];
    } 


