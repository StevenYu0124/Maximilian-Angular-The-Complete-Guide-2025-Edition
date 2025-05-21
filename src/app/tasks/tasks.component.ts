import { Component, computed, input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input<User>();
  title = computed(() => {
    if (this.user()) {
      return `Tasks for ${this.user()!.name}`;
    }
    else {
      return '';
    }
  })
}
