import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  declarations: [ActorsComponent],
  imports: [
	CommonModule,
	ActorsRoutingModule
  ]
})
export class ActorsModule { }
