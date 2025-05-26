import { Component, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTask } from './add-task/add-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  displayAddTask = false;

  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.user().id);
  }

  onCancelAddTask() {
    this.displayAddTask = false;
  }

  onAddTask(addTask: AddTask) {
    this.tasksService.addTask(addTask, this.user().id);
    this.displayAddTask = false;
  }

  displayAddTaskForm() {
    this.displayAddTask = true;
  }
}
