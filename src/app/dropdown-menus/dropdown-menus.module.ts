import { Routes } from '@angular/router';
import { PrintOrders } from './print-orders/print-orders';
import { WaitlistSystem } from './waitlist-system/waitlist-system';

export const DropdownMenusModule: Routes = [
  {
    path: '',
    redirectTo: 'printingOrders',
    pathMatch: 'full',
  },
  {
    path: 'printingOrders',
    component: PrintOrders,
  },
  {
    path: 'waitlist',
    component: WaitlistSystem,
  },
];
