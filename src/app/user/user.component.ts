import { Component, computed, input, output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();
  imagePath = computed(() => 'users/' + this.user().avatar);
  selectUser = output<User>();

  onSelectUser() {
    this.selectUser.emit(this.user());
  }
}