function clickLimpa(mome, peso, altura, gordura){
   
    let inputPeso = document.querySelector("#peso"); 
    inputPeso.addEventListener("click", function(){
        form.peso.value = "";
        form.peso.classList.remove("paciente-invalido");
    });

    let inputAltura = document.querySelector("#altura"); 
    inputAltura.addEventListener("click", function(){
        form.altura.value = "";
        form.altura.classList.remove("paciente-invalido");
    });

    let inputNome = document.querySelector("#nome"); 
    inputNome.addEventListener("click", function(){
        form.nome.value = "";
        form.nome.classList.remove("paciente-invalido");
    });

    let inputGordura = document.querySelector("#gordura"); 
    inputGordura.addEventListener("click", function(){
        form.gordura.value = "";
        form.gordura.classList.remove("paciente-invalido");
    });

}