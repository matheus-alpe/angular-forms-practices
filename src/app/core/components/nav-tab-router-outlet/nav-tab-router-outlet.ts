import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoute } from '../../types/routes';

@Component({
  selector: 'app-nav-tab-router-outlet',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-tab-router-outlet.html',
})
export class NavTabRouterOutlet {
  routes = input.required<AppRoute[]>();
}
