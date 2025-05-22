import { Component, computed, signal, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './dummy-tasks';
import { type Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  tasks = signal<Task[]>(DUMMY_TASKS);
  selectedUserTasks = computed(() =>
    this.tasks().filter((task) => task.userId === this.user().id)
  );
  displayAddTask = false;

  onCompleteTask(taskId: string) {
    const updatedTasks = this.tasks().filter(task => task.id !== taskId);
    this.tasks.set(updatedTasks);
  }

  displayAddTaskForm() {
    this.displayAddTask = true;
  }
}
