import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Inicio',
    iconName: 'mynaui:home-solid',
    route: '/dashboard',
  },
  {
    navCap: 'Opciones',
    divider: true
  },
 /*  {
    displayName: 'Badge',
    iconName: 'solar:add-folder-bolder',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/menu',
  },*/
  /*
  {
    displayName: 'Forms',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/forms', 
  },*/
  {
    displayName: 'Registro Sliders',
    iconName: 'eos-icons:system-re-registered',
    route: '/ui-components/registroSliders',
  },
  {
    displayName: 'Planilla Inspeccion',
    iconName: 'material-symbols-light:fact-check-outline',
    route: '/ui-components/planillaInspeccion',
  },
  /* {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/tables',
  }, */
  {
    displayName: 'Plan Produccion',
    iconName: 'mingcute:inspect-line',
    route: '/ui-components/planProduccion',
  },
  {
    navCap: 'Descargas',
    divider: true
  },
  {
    displayName: 'Lista Pedidos',
    iconName: 'solar-archive-down-minimlistic-linear',
    route: '/ui-components/tooltips',
  },
 
  {
    navCap: 'Auth',
    divider: true
  }, /*
  {
    displayName: 'Login',
    iconName: 'solar:login-3-line-duotone',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
    divider: true
  }, */
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
  },
];
