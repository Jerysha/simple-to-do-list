const inputText = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector(".task-list");
const show = document.querySelector(".show");

addBtn.addEventListener("click", () => {
    if (inputText.value.trim() !== "") {
        addTask(inputText.value);
        inputText.value = "";
        show.classList.add("empty");
    }
});

function addTask(task) {
    const li = document.createElement("li");
    li.innerHTML = `<h4>${task}</h4>
    <div class="task-btn">
        <input type="checkbox" name="complete" id="complete" />
        <i class="fas fa-trash-alt delete"></i>
        <i class="fas fa-edit edit"></i>
    </div>`;
    /*Delete Task*/
    taskList.appendChild(li);
    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        if (taskList.childNodes === 0) {
            show.classList.toggle(".empty");
            show.classList.toggle(".show")
        } else {
            show.classList.remove("empty");
            show.classList.add("show")
        }
    });
    /*Edit Task*/
    const editBtn = li.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        if (inputText.value.trim() !== "") {
            li.querySelector("h4").textContent = `${inputText.value}`;
            inputText.value = "";
        }
    });
    /*Completed Task*/
    const completeCheck = li.querySelector("#complete");
    completeCheck.addEventListener("click", () => {
        if (completeCheck.checked) {
            li.querySelector("h4").style.textDecorationLine = `line-through`;
        } else {
            li.querySelector("h4").style.textDecorationLine = `none`;
        }
    });
}