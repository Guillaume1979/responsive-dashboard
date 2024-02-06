import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutService} from "./services/layout.service";
import {Subscription} from "rxjs";
import {HeaderComponent} from "./components/header/header.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {NewUsersComponent} from "./components/new-users/new-users.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {RemindersComponent} from "./components/reminders/reminders.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AnalyticsComponent, NewUsersComponent, OrdersComponent, RemindersComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  layoutService = inject(LayoutService);
  format = this.layoutService.format;

  sub = new Subscription();

  ngOnInit(): void {
    this.sub.add(this.layoutService.breakpoints.subscribe());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
