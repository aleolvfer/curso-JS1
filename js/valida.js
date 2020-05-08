function valida(paciente){

    let form = document.querySelector("#Form-Adiciona");
    if(paciente.peso <= 0 || paciente.peso >= 600 || isNaN(paciente.peso) == true){
        var ps = false
        form.peso.value = "Peso inválido!";
        form.peso.classList.add("paciente-invalido");
    }else{
        ps = true;
    }

    if(paciente.altura <= 0 || paciente.altura >= 3.00 || isNaN(paciente.altura) == true){
        var alt = false
        form.altura.value = "Altura inválida!";
        form.altura.classList.add("paciente-invalido");
    }else{
        alt = true;
    }

    if(paciente.nome == "" || isNaN(paciente.nome) != true){
        var nm = false;
        form.nome.value = "Nome inválido";
        form.nome.classList.add("paciente-invalido");
    }else{
        nm = true;
    }

    if(paciente.gordura == "" || isNaN(paciente.gordura) == true){
        var gor = false;
        form.gordura.value = "Valor inválido";
        form.gordura.classList.add("paciente-invalido");
    }else{
        gor = true;
    }

    if(ps == true && alt == true && nm == true && gor == true){
        var respValida = true;
    }else{
        respValida = false;
    }

    return respValida;
}   