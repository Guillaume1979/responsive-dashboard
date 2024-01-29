import {Injectable, signal} from '@angular/core';
import {User, users} from "./data";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #users = signal<User[]>([])
  readonly users = this.#users.asReadonly();

  initUsers() {
    this.#users.set(users);
  }

  defineUsers(values: User[]) {
    this.#users.set(values);
  }

  addUser(user: User) {
    this.#users.update((users) => [...users, user])
  }

  deleteUsers() {
    this.#users.set([]);
  }
}
