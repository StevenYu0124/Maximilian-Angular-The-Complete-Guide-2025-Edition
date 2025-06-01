import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TasksService } from './tasks.service';
@NgModule({
  declarations: [
    TasksComponent,
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [TasksService],
  exports: [TasksComponent]
})
export class TasksModule {
}