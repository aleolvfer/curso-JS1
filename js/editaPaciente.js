let tabela = document.querySelector("#tabela-pacientes");

let botaoEdita = document.querySelector("#editar-paciente");

tabela.addEventListener("dblclick", function(event){
    
    if(event.target.tagName !== "TBODY"){
        var selecionado = true;

    event.target.parentNode.classList.add("editando-paciente");

    var recebe = obtemPacienteSelecionado(event);
    form.nome.focus();
    
    console.log(event);
    botaoEdita.addEventListener("click", function(evento){
        
        evento.preventDefault();

        let paciente = obtemPacienteDoFormulario(form);
        
        if(valida(paciente) && selecionado){

            recebe[0].textContent = paciente.nome;
            recebe[1].textContent = paciente.peso;
            recebe[2].textContent = paciente.altura;
            recebe[3].textContent = paciente.gordura;
            recebe[4].textContent = paciente.imc;

            form.reset();
            event.target.parentNode.classList.remove("editando-paciente");
            
            selecionado = false;

        }else{
                clickLimpa(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);
            
        }    
    });
    }
});