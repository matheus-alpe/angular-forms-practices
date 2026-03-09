import { Component } from '@angular/core';
import { NavTabRouterOutlet } from '../../core/components/nav-tab-router-outlet/nav-tab-router-outlet';
import { FORMS_CHILDREN_ROUTES } from './forms.routes';

@Component({
  selector: 'app-forms',
  imports: [NavTabRouterOutlet],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  childrenRoutes = FORMS_CHILDREN_ROUTES;
}
