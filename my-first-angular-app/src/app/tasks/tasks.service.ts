import { Injectable } from "@angular/core";
import { AddTask } from "./add-task/add-task.model";
import { DUMMY_TASKS } from "./dummy-tasks";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = DUMMY_TASKS;

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getTasksByUserId(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    completeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    addTask(newTask: AddTask, userId: string) {
        const task = {
            id: Date.now().toString(),
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate,
            userId: userId,
        };
        this.tasks.unshift(task);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}