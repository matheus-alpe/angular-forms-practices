import { AppRoute } from '../../core/types/routes';

export const FORMS_CHILDREN_ROUTES: AppRoute[] = [
  {
    path: 'signal',
    title: 'Signal',
    name: 'Signal',
    loadComponent: () => import('./signal/signal').then((m) => m.Signal),
  },
  {
    path: 'reactive',
    title: 'Reactive',
    name: 'Reactive',
    loadComponent: () => import('./reactive/reactive').then((m) => m.Reactive),
  },
  {
    path: 'template',
    title: 'Template',
    name: 'Template',
    loadComponent: () => import('./template/template').then((m) => m.Template),
  },
];

export const FORMS_ROUTES: AppRoute[] = [
  {
    path: 'forms',
    title: 'Forms',
    name: 'Forms',
    loadComponent: () => import('./forms').then((m) => m.Forms),
    children: FORMS_CHILDREN_ROUTES,
  },
];
