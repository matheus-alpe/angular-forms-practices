import { Component } from '@angular/core';
import { routes } from './app.routes';
import { NavTabRouterOutlet } from './core/components/nav-tab-router-outlet/nav-tab-router-outlet';

@Component({
  selector: 'app-root',
  imports: [NavTabRouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly routes = routes;
}
