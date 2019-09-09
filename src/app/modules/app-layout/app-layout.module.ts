import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { ActorsModule } from '../actors/actors.module';
import { MoviesModule } from '../movies/movies.module';
import { TvShowsModule } from '../tv-shows/tv-shows.module';
import { WatchListModule } from '../watch-list/watch-list.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppLayoutComponent, FooterComponent, NavbarComponent],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	ActorsModule,
	MoviesModule,
	TvShowsModule,
	WatchListModule,
	AppRoutingModule
  ]
})
export class AppLayoutModule { }
