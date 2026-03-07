import { AppRoute } from '../../core/types/routes';

export const FORMS_ROUTES: AppRoute[] = [
  {
    path: 'forms',
    title: 'Forms',
    name: 'Forms',
    loadComponent: () => import('./forms').then((m) => m.Forms),
  },
];
