import {Component, inject} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-new-users',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent {
  userService = inject(UserService);
  users = this.userService.users;
}
