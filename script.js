const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task item
    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    // Mark Complete Action
    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete Task Action
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
}
