import { Task } from "../models/Task";
import { TaskService } from "../services/TaskService";

export class TaskList {
  private listEl: HTMLUListElement;

  constructor(
    private service: TaskService,
    containerId: string
  ) {
    this.listEl = document.getElementById(containerId) as HTMLUListElement;
    this.render();
  }

  render(): void {
    const tasks = this.service.getAll();
    this.listEl.innerHTML = "";
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.textContent = task.content;
      if (task.completed) li.style.textDecoration = "line-through";

      const toggleBtn = document.createElement("button");
      toggleBtn.textContent = task.completed ? "Undo" : "Done";
      toggleBtn.onclick = () => {
        this.service.toggle(task.id);
        this.render();
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✖";
      deleteBtn.onclick = () => {
        this.service.delete(task.id);
        this.render();
      };

      li.append(toggleBtn, deleteBtn);
      this.listEl.appendChild(li);
    });
  }
}
