import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
	{
		path :'',
		component : MoviesComponent,
		children:[
			{
				path: 'movie-list',
				component: MovieListComponent,
				pathMatch: 'full'
			  },
			  {
				path : 'add-movie',
				component: AddMovieComponent
			  },
			  {
				path : '',
				redirectTo: 'movie-list',
				pathMatch : 'full'
			  },
			  { path: '**', redirectTo: '', pathMatch: 'full' }
			
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
	];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MoviesRoutingModule {}
