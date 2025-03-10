import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { UiComponentsRoutes } from './ui-components/ui-components.routes';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'ui-components',
    children: UiComponentsRoutes,
  },
];
