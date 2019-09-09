import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './modules/app-layout/app-layout.component';

const routes: Routes = [
	// {
	// 	path:'app/movies',
	// 	loadChildren:'./modules/movies/movies.module#MoviesModule'
	// },
	// {
	// 	path:'tv-shows',
	// 	loadChildren:'./modules/tv-shows/tv-shows.module#TvShowsModule'
	// },
	// {
	// 	path:'actors',
	// 	loadChildren:'./modules/actors/actors.module#ActorsModule'
	// },
	// {
	// 	path:'watch-list',
	// 	loadChildren:'./modules/watch-list/watch-list.module#WatchListModule'
	// },
	{
		path: 'app',
		component:AppLayoutComponent,
		children:[	
			{
				path:'movies',
				loadChildren:'./modules/movies/movies.module#MoviesModule'
			},
			{
				path:'tv-shows',
				loadChildren:'./modules/tv-shows/tv-shows.module#TvShowsModule'
			},
			{
				path:'actors',
				loadChildren:'./modules/actors/actors.module#ActorsModule'
			},
			{
				path:'watch-list',
				loadChildren:'./modules/watch-list/watch-list.module#WatchListModule'
			},
			{
				path : '',
				redirectTo : 'movies',
				pathMatch: 'full'
			},
			{
				path : '**',
				loadChildren : './modules/error/error.module#ErrorModule'
			}
		]
	},
	{
		path : '',
		redirectTo : 'app',
		pathMatch: 'full'
	},
	{
		path : '**',
		loadChildren : './modules/error/error.module#ErrorModule'
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
