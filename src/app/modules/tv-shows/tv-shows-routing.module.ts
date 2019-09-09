import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowsComponent } from './tv-shows.component';

const routes: Routes = [
  {
    path: '',
    component: TvShowsComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TvShowsRoutingModule {}
