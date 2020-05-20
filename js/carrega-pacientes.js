let botaoCarrega = document.querySelector("#carregar-pacientes");

botaoCarrega.addEventListener("click", function(){

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/pacientes");

    xhr.addEventListener("load", function(){

        var pacientes = JSON.parse(xhr.responseText);
        
        pacientes.forEach(function(element){

            let tabela = document.querySelector("#tabela-pacientes");
            let trPaciente = montaTr(element);

            tabela.appendChild(trPaciente);
        });

    });
    
    xhr.send();
});