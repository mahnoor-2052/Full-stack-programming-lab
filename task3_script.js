function completeTask(id) {
  let task = document.getElementById(id);
  task.style.textDecoration = "line-through";
}

function removeTask(id) {
  document.getElementById(id).parentElement.style.display = "none";
}
