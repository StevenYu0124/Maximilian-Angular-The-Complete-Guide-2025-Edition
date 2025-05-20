import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[this.getRandomIndex()]);
  imagePath = computed(() => 'users/' + this.selectedUser().avatar);

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[this.getRandomIndex()]);
  }

  private getRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
