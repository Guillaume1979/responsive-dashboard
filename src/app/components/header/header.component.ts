import {Component, inject} from '@angular/core';
import {LayoutService} from "../../services/layout.service";
import {NavLinkComponent} from "../shared-components/nav-link/nav-link.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavLinkComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
layoutService = inject(LayoutService)
  format = this.layoutService.format;
}
