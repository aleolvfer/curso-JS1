let adicionaPaciente =  document.querySelector("#adicionar-paciente");

adicionaPaciente.addEventListener("click", function(event){    
    
    event.preventDefault();

    let form = document.querySelector("#Form-Adiciona");

    let paciente = obtemPacienteDoFormulario(form);
    
    
    if(valida(paciente)){

        let pacienteTr = montaTr(paciente);
        let tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        form.reset();

    }else{

        clickLimpa(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);

    }
});