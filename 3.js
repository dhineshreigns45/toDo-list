const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = " ";
}

taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
