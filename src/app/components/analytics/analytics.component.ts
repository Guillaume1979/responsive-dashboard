import {Component, inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  format = inject(LayoutService).format;

}
