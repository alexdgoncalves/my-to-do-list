const adcTarefas = document.querySelector("#increment");
const inputTarefas = document.querySelector("#tarefa-digitada");
const bord = document.querySelector("#bord");
const tarefas = document.querySelector("#tarefas");

adcTarefas.addEventListener("click", () => {
  const idDelete = Math.random().toString(36).substr(2);
  const idCheck = Math.random().toString(36).substr(2);

  const novaTarefa = inputTarefas.value;
  let newCard = `
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

  bord.insertAdjacentHTML("beforeend", newCard);

  const closeCard = document.getElementById(`${idDelete}`);
  const idCard = document.getElementById(`${idCheck}`);
  const card = tarefas.lastElementChild.lastChild;

  closeCard.addEventListener("click", () => {
    if (idDelete === closeCard.id) {
      card.remove();
    }
  });

  card.addEventListener("click", () => {
    if (card.className == "li-no" && idCard.id == idCheck) {
      card.style.transform = "rotatex(360deg)";
      card.className = "li-yes";
    } else {
      card.style.transform = "rotatex(0deg)";
      card.className = "li-no";
    }
  });
});
