const adcTarefas = document.querySelector("#increment");
const inputTarefas = document.querySelector("#tarefa-digitada");
const bord = document.querySelector("#bord");
const tarefas = document.querySelector("#tarefas");

adcTarefas.addEventListener("click", () => {
  const id = Math.random().toString(36).substr(2);
  const novaTarefa = inputTarefas.value;
  let card = `
  <li class="li-no">
    <div class="box-img">
      <img
      id="checkbox-${novaTarefa.length}"
      class="no-checkbox"
      src="./img/empty-checkbox.png"
      alt="empty-checkbox"
      />
      <text class="text-no">${novaTarefa}</text>
    </div>
    <img class="close" id="${id}" src="./img/x.png" />
  </li>`;
  if (!novaTarefa) {
    alert("campo não preenchido");
    adcTarefas.removeEventListener();
  }
  novaTarefa.input = null;

  bord.insertAdjacentHTML("beforeend", card);

  const closeCard = document.getElementById(`${id}`);
  console.log(id);

  const btnFinalizar = tarefas.lastElementChild.lastChild;
  closeCard.addEventListener("click", () => {
    if (id === closeCard.id) {
      btnFinalizar.remove();
    }
  });

  const checkbox = document.querySelector(`#checkbox-${novaTarefa.length}`);
  const textNo = document.querySelector(".li-no");

  checkbox.addEventListener("click", () => {
    textNo.classList.remove("li-no");
    textNo.classList.add("li-yes");
  });
});
