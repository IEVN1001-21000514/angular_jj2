import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppTablesComponent } from './tables/tables.component';
import { AppTables2Component } from './planProduccion/tables.component';
import { AppForms2Component } from './registroSliders/forms.component';
import { AppForms3Component } from './planillaInspeccion/forms.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'registroSliders',
        component: AppForms2Component,
      },
      {
        path: 'planillaInspeccion',
        component: AppForms3Component,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
      {
        path: 'planProduccion',
        component: AppTables2Component,
      },
    ],
  },
];
