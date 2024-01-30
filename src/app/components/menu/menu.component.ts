import { Component } from '@angular/core';
import {NavLinkComponent} from "../shared-components/nav-link/nav-link.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NavLinkComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
