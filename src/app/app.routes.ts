import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Customers } from './pages/customers/customers';
import { Vehicles } from './pages/vehicles/vehicles';
import { Technicians } from './pages/technicians/technicians';
import { ServiceOrders } from './pages/service-orders/service-orders';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'customers', component: Customers },
      { path: 'vehicles', component: Vehicles },
      { path: 'technicians', component: Technicians },
      { path: 'service-orders', component: ServiceOrders },
      { path: 'settings', component: Settings },
    ],
  },
];
