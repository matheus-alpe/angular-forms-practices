import { AppRoute } from './core/types/routes';
import { FORMS_ROUTES } from './routing/forms/forms.routes';

export const routes: AppRoute[] = [
  {
    path: '',
    loadComponent: () => import('./routing/home/home').then((m) => m.Home),
    title: 'Home',
    name: 'Home',
  },
  ...FORMS_ROUTES,
  {
    path: '**',
    redirectTo: '',
  },
];
