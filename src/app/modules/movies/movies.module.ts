import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MoviesComponent } from './movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './movies.service';
import { SelectDropDownModule } from 'ngx-select-dropdown';

@NgModule({
  declarations: [ MovieListComponent, AddMovieComponent, MoviesComponent],
  imports: [
	CommonModule,
	MoviesRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	SelectDropDownModule
  ],
  providers:[MoviesService]
})
export class MoviesModule { }
