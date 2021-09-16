const adcTarefas = document.querySelector("#increment");
const inputTarefas = document.querySelector("#tarefa-digitada");
const bord = document.querySelector("#bord");
const tarefas = document.querySelector("#tarefas");

adcTarefas.addEventListener("click", () => {
  const idDelete = Math.random().toString(36).substr(2);
  const idCheck = Math.random().toString(36).substr(2);

  const novaTarefa = inputTarefas.value;
  let card = `
  <li class="li-no">
    <div class="box-img" id="${idCheck}">
      <text class="text-no">${novaTarefa}</text>
    </div>
    <img class="close" id="${idDelete}" src="./img/x.png" />
  </li>`;
  if (!novaTarefa) {
    alert("campo não preenchido");
    adcTarefas.removeEventListener();
  }
  novaTarefa.input = null;

  bord.insertAdjacentHTML("beforeend", card);

  const closeCard = document.getElementById(`${idDelete}`);
  const btnFinalizar = tarefas.lastElementChild.lastChild;
  const checkbox = document.getElementById(`${idCheck}`);

  closeCard.addEventListener("click", () => {
    if (idDelete === closeCard.id) {
      btnFinalizar.remove();
    }
  });

  btnFinalizar.addEventListener("click", () => {
    if (btnFinalizar.className == "li-no" && checkbox.id == idCheck) {
      btnFinalizar.className = "li-yes";
    } else {
      btnFinalizar.className = "li-no";
    }
  });
});
