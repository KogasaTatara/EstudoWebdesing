const tarefa = document.getElementById("tarefa");
const lista = document.getElementById("lista");
const btn = document.getElementById("btn");
const contador = document.getElementById("contador");

function contadoralmentar(){
    contador.innerText = lista.children.length;
}
function ListaTarefas(){
    const Program = JSON.parse(localStorage.getItem("Program") || [])
    lista.innerHTML = "";
    Program.forEach((u, index) => {
        const li = document.createElement("li");
        li.textContent = u.tarefa;

        const btnRemove = document.createElement("button");
        btnRemove.textContent = "x";
        btnRemove.addEventListener("click", function(){
            Program.splice(index, 1);
            localStorage.setItem("Program", JSON.stringify(Program));
            ListaTarefas();
        });
        
        li.appendChild(btnRemove);
        lista.appendChild(li)
    });
    contadoralmentar();
}
btn.addEventListener("click", function(event){
    event.preventDefault();
    const Program = JSON.parse(localStorage.getItem("Program") || "[]");
    
    if (tarefa.value.trim() === "") return;

    Program.push({tarefa: tarefa.value});
    localStorage.setItem("Program", JSON.stringify(Program));
    ListaTarefas();

    tarefa.value = "";
})
document.addEventListener("DOMContentLoaded", ListaTarefas);