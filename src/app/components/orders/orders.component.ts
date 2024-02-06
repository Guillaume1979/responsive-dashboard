import {Component, inject} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {LayoutService} from "../../services/layout.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orderService = inject(OrderService);
  orders = this.orderService.orders;
  format = inject(LayoutService).format;

}
