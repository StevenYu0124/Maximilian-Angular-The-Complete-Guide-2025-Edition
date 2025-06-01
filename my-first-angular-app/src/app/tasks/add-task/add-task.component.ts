import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './add-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  userId = input.required<string>();
  onClose = output<void>();
  task = signal<AddTask>({
    title: '',
    summary:'',
    dueDate: '',
  });

  constructor(private tasksService: TasksService) {}

  onSubmit() {
    this.tasksService.addTask(this.task(), this.userId());
    this.onClose.emit();
  }

  closeForm() {
    this.onClose.emit();
  }
}
