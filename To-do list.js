document.addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value;
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `${taskText}<button class="delete-button">X</button>`;

            taskList.appendChild(li);
            taskInput.value = "";

            li.querySelector(".delete-button").addEventListener("click",  function() {
                taskList.removeChild(li);
            });
        }
    });

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
