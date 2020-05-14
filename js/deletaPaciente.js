function deletaPaciente(){

    let botao = document.createElement("button");
    botao.classList.add("botao-de-deleta");
    botao.textContent = "x";    

    botao.addEventListener("dblclick", function(event){
        event.target.parentNode.classList.add("deletando");

        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500); 
    });

    return botao;
}