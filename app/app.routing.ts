import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CloudIntegrationsComponent} from './cloud-integrations.component'
import {CloudIntegrationsScrollComponent} from './cloud-integrations-scroll.component'

const appRoutes: Routes = [
  {
      path:'',
      redirectTo: '/integrations',
      pathMatch: 'full'
  },
  {
    path: 'integrations',
    component: CloudIntegrationsComponent
  },
  {
    path: 'integrationsscroll',
    component: CloudIntegrationsScrollComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);