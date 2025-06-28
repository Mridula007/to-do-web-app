// To-Do List Functions

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
});

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

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function toggleComplete(span) {
  span.parentElement.classList.toggle("completed");
  saveTasks();
}

function saveTasks() {
  let tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    document.getElementById("taskList").innerHTML = savedTasks;
  }
}

// Meeting Reminder Functions

let meetingDateTime = null;
let reminderInterval;

function setReminder() {
  let input = document.getElementById("meetingTime").value;

  if (!input) {
    alert("Please select a meeting date and time!");
    return;
  }

  meetingDateTime = new Date(input);
  alert("Meeting reminder set for " + meetingDateTime.toLocaleString());

  // Clear existing interval if any
  if (reminderInterval) clearInterval(reminderInterval);

  // Start checking every second
  reminderInterval = setInterval(checkReminder, 1000);
}

function checkReminder() {
  if (!meetingDateTime) return;

  let now = new Date();

  if (now >= meetingDateTime) {
    alert("🔔 It's time for your meeting!");
    clearInterval(reminderInterval);
    meetingDateTime = null;
  }
}