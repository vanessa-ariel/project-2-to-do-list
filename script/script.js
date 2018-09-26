const button = document.querySelector(".btn-tarefas");
const input = document.querySelector(".form__input");
const list = document.querySelector(".list-tarefas");

button.addEventListener("click", function (e){
    e.preventDefault();
    //alert("Oi!");
    
    if(input.value === "" || input.value === " "){
        return false;
    }
    //ADD LINHA
    const linha = document.createElement("li");
    linha.className = "list-item";

    //INSERE TEXTO DO INPUT NA CONST
    linha.innerHTML = (input.value);

    //ADD LINHA DENTRO DA LISTA
    list.appendChild(linha);
    
    //LIMPA INPUT AO ENVIAR INPUT
    input.value = "";

    //ADD CHECK NOS ITENS
    linha.addEventListener("click", function(e){
        linha.style.textDecoration = "line-through"
        linha.style.color = "gray"; 
    })

    const span = document.createElement("span");
    span.className = "list-tarefas__span"
    span.innerHTML= `<button class="list-tarefas__botao-excluir">x</button>`
    console.log(span.innerHTML)
    span.addEventListener("click", function(event){
        event.preventDefault();
        linha.remove()
    })

    linha.appendChild(span)   
    
})


