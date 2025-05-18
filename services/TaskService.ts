import { Task } from "../models/Task";
import { StorageUtil } from "../utils/Storage";

export class TaskService {
  private storage = new StorageUtil<Task[]>("tasks");
  private tasks: Task[] = [];

  constructor() {
    this.tasks = this.storage.load() || [];
  }

  getAll(): Task[] {
    return [...this.tasks];
  }

  add(taskContent: string): Task {
    const newTask: Task = {
      id: crypto.randomUUID(),
      content: taskContent,
      completed: false,
    };
    this.tasks.push(newTask);
    this.persist();
    return newTask;
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.persist();
  }

  toggle(id: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.persist();
    }
  }

  private persist(): void {
    this.storage.save(this.tasks);
  }
}
