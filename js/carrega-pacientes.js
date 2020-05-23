let botaoCarrega = document.querySelector("#carregar-pacientes");


botaoCarrega.addEventListener("click", function(){


    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/pacientes");
    console.log(xhr.status);
    xhr.addEventListener("load", function(){
        
        let pacientes = JSON.parse(xhr.responseText);

        // let pacientes = respostaJSON.pacientes;

        for(let i = 0; i < pacientes.length; i++){

            let tabela = document.querySelector("#tabela-pacientes");
            let trPaciente = montaTr(pacientes[i]);
            tabela.appendChild(trPaciente);
        }
    });
    
    xhr.send();

});