function deletaPaciente(){
    let tdBotao = document.createElement("td");

    let botao = document.createElement("button");
    botao.classList.add("botao-de-deleta");
    botao.textContent = "X";

    botao.addEventListener("dblclick", function(event){
        var deleta = event.target.parentNode;
        deleta.parentNode.remove();
    });

    tdBotao.appendChild(botao);
    return tdBotao;
}