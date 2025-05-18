import { TaskService } from "./services/TaskService";
import { TaskList } from "./components/TaskList";

const service = new TaskService();
const taskList = new TaskList(service, "task-list");

const form = document.getElementById("task-form") as HTMLFormElement;
const input = document.getElementById("task-input") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    service.add(input.value.trim());
    input.value = "";
    taskList.render();
  }
});
