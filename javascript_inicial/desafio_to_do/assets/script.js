let botao = document.getElementById('adicona');
let areaTarefas = document.getElementById('areaTarefas');
let cont = 0;

function validarTarefa(text){
    return text.length > 2
}

botao.addEventListener("click", ()=>{
    let texto = document.getElementById('tarefa');
    if(validarTarefa(texto.value)){
        cont++; 
        let tarefaNova = document.createElement("input");
        let label = document.createElement("label");
        let divNova = document.createElement("div");
        tarefaNova.type = "checkbox";
        tarefaNova.id = `tarefa${cont}`;
        tarefaNova.class = "checkBox";
        tarefaNova.style.marginRight = '10px'
        label.htmlFor = `tarefa${cont}`;
        label.appendChild(document.createTextNode(`${texto.value}`));
        divNova.appendChild(tarefaNova);
        divNova.appendChild(label);
        areaTarefas.appendChild(divNova);
        texto.value = ''
    }
        
})