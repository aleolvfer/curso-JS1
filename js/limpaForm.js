function clickLimpa(mome, peso, altura, gordura){
   
    let inputPeso = document.querySelector("#peso"); 
    inputPeso.addEventListener("focus", function(){
        form.peso.value = "";
        form.peso.classList.remove("paciente-invalido");
    });

    let inputAltura = document.querySelector("#altura"); 
    inputAltura.addEventListener("focus", function(){
        form.altura.value = "";
        form.altura.classList.remove("paciente-invalido");
    });

    let inputNome = document.querySelector("#nome"); 
    inputNome.addEventListener("focus", function(){
        form.nome.value = "";
        form.nome.classList.remove("paciente-invalido");
    });

    let inputGordura = document.querySelector("#gordura"); 
    inputGordura.addEventListener("focus", function(){
        form.gordura.value = "";
        form.gordura.classList.remove("paciente-invalido");
    }); 
    

}