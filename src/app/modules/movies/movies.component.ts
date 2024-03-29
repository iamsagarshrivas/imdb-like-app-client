import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private router: Router) {	  
 	if(this.router.url.indexOf('movie-list') != -1){
		this.addButton = true
	 }
	 else{
		 this.addButton = false
	 }
   }
  addButton:Boolean;

  ngOnInit() {
	  
  }

}
