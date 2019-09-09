import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatchListComponent } from './watch-list.component';

const routes: Routes = [
  {
    path: '',
    component: WatchListComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WatchListRoutingModule {}
