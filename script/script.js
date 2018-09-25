const button = document.querySelector(".btn-tarefas");
const input = document.querySelector(".form__input");
const table = document.querySelector(".table-tarefas");

button.addEventListener("click", function (e){
    e.preventDefault();
    //alert("Oi!");
    
    if(input.value === "" || input.value === " "){
        return false;
    }
    //ADD LINHA
    const linha = document.createElement("tr");
    
    //ADD COLUNA
    const colunaTarefa = document.createElement("td");

    //INSERE TEXTO DO INPUT NA COLUNA
    colunaTarefa.innerHTML = (input.value);

    //ADD COLUNA DENTRO LINHA
    linha.appendChild(colunaTarefa);


    //ADD LINHA DENTRO DA TABLE
    table.appendChild(linha);
    
    //LIMPA INPUT AO ENVIAR INPUT
    input.value = "";
})

const colunaTarefa = document.getElementsByName("td");
console.log(colunaTarefa);
// colunaTarefa.addEventListener("click", function(){
// })