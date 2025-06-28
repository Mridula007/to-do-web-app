// Load tasks from localStorage when page opens
document.addEventListener("DOMContentLoaded", loadTasks);

// Add a new task to the list
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    let li = document.createElement("li");

    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskValue}</span>
      <button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(li);
    saveTasks();
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

// Delete a task
function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

// Mark task as completed
function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
  saveTasks();
}

// Save tasks to localStorage
function saveTasks() {
  let tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

// Load tasks from localStorage
function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    document.getElementById("taskList").innerHTML = savedTasks;
  }
}