let filtraNome = document.querySelector("#filtrar-nome");
filtra(filtraNome, ".info-nome", "i");

let filtraPeso = document.querySelector("#filtrar-peso");
filtra(filtraPeso, ".info-peso", "g");


function filtra(qualBotao, ondeBuscar, tipoBusca){

    qualBotao.addEventListener("input", function(){
        let pacientes = document.querySelectorAll(".paciente");
    
        if(this.value.length > 0){
            for(let i = 0; i < pacientes.length; i++){
                
                let paciente = pacientes[i];
                let tdNome = paciente.querySelector(ondeBuscar);
                let nome = tdNome.textContent;  
                let expressao = new RegExp(this.value, tipoBusca);
                
                if(!expressao.test(nome)){
                    paciente.classList.add("invisivel");
                }else{
                    paciente.classList.remove("invisivel");
                }
                       
            }
        }else{
            for(let i = 0; i < pacientes.length; i++){
                let paciente = pacientes[i];
                paciente.classList.remove("invisivel");
                         
            }
            
        }

    });

}