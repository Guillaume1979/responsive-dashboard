import {Component, inject, input} from '@angular/core';
import {LayoutService} from "../../../services/layout.service";

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.css'
})
export class NavLinkComponent {
  layoutService = inject(LayoutService)
  format = this.layoutService.format;

iconName = input.required<string>();
displayedName = input.required<string>();

}
