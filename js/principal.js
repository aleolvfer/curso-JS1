let adicionaPaciente =  document.querySelector("#adicionar-paciente");

let form = document.querySelector("#Form-Adiciona");

adicionaPaciente.addEventListener("click", function(event){    
    
    event.preventDefault();

    let paciente = obtemPacienteDoFormulario(form);

    let pacienteTr = montaTr(paciente); 
    
    if(valida(paciente)){

        let tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();

    }else{

        clickLimpa(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);

    }

});