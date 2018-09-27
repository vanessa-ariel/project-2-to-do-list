const button = document.querySelector(".btn-tarefas");
const input = document.querySelector(".form__input");
const list = document.querySelector(".list-tarefas");
const checkAll = document.querySelector(".btn-check-all");
const deleteAll = document.querySelector(".btn-delete-all");
const boxAll =  document.querySelector(".box-all");


button.addEventListener("click", function(e) {
    e.preventDefault();
    //alert("Oi!");


    if (input.value.length === 0 || !input.value.trim()) {
        return false;
    }
    //ADD LINHA
    const linha = document.createElement("li");
    linha.className = "list-item";

    //INSERE TEXTO DO INPUT NA LINHA
    linha.innerHTML = (input.value);

    //ADD LINHA DENTRO DA LISTA
    list.appendChild(linha);

    //LIMPA INPUT AO ENVIAR INPUT
    input.value = "";

    //ADD CHECK NOS ITENS
    linha.addEventListener("click", function(e) {
        e.preventDefault();
        linha.style.textDecoration = "line-through"
        linha.style.color = "gray"

    })
    const span = document.createElement("span");
    //ADD CLASSE NO SPAN
    span.className = "list-tarefas__span"
        //ADD CLASSE BOTÃO NO SPAN DIRETO NO HTML
    span.innerHTML = `<button class="list-tarefas__botao-excluir">x</button>`

    span.addEventListener("click", function(event) {
            event.preventDefault();
            //DELETA LINHA QUANDO CLICA NO X
            linha.remove()
        })
        // ADD SPAN NA LINHA   
    linha.appendChild(span)

    //PARA VISUALIZAR OS BOTÕES DENTRO DO OUTRO BOTÃO
    // deleteAll.style.display = "flex";
    // checkAll.style.display = "flex";

    boxAll.style.display = "flex";
    boxAll.style.justifyContent = "space-evenly";
})

checkAll.addEventListener("click", function(ev) {
    ev.preventDefault();
    //ADD LINHA
    const item = document.querySelectorAll(".list-item");
    //FOR PARA RISCAR E MUDAR COR
    for (let checado of item) { // mesma coisa que for normal [array]
        checado.style.textDecoration = "line-through"
        checado.style.color = "gray"
    }
})
// EVENTO CLICK PARA REMOVER HTML E LIMPAR ESTILOS
deleteAll.addEventListener("click", function(evn) {
    evn.preventDefault();
    list.innerHTML = ""
    //REMOVER O ESTILO TODA VEZ QUE DELETA
    list.removeAttribute("style");
})