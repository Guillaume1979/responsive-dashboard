import {Injectable, signal} from '@angular/core';
import {Order, orders} from "./data";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

#orders = signal<Order[]>(orders);
readonly orders = this.#orders.asReadonly();
}
