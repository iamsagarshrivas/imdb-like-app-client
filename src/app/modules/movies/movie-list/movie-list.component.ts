import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { FormValidatorService } from 'src/app/services/form-validator.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
	

  movieList:any
  movieEditForm: FormGroup;
  actorList:[]
  configDropdown = {
	displayKey: 'actorName',
	search: true,
	height: '250px',
	placeholder: 'Select'
  };

  @ViewChild('closeButton') closeButton: ElementRef<HTMLElement>;
  triggerFalseClick() {	
	let el: HTMLElement = this.closeButton.nativeElement;
	el.click();
	}

  get formArr(){
	  return this.movieEditForm.get('a') as FormArray
  }

  get _id(){
	  return this.movieEditForm.get('_id') || null;
  }
  get movieName(){
	  return this.movieEditForm.get('movieName') || null;
  }
  get plot(){
	  return this.movieEditForm.get('plot') || null;
  }
  get poster(){
	  return this.movieEditForm.get('poster') || null;
  }  
  get releaseYear(){
	  return this.movieEditForm.get('releaseYear') || null;
  }
  get cast(){	  
	  return this.movieEditForm.get('cast') || null;
  }

  constructor(private movieService: MoviesService, private fb: FormBuilder, private validator: FormValidatorService ) { }


  ngOnInit() {
	this.initialiseEditForm(null);
	this.getMovieList()
	this.getActorList();
  }

  getMovieList(){
	this.movieService.getMovieList()
	.subscribe(data=>{
	  if(data['error']){
		alert("Something went wrong.")
	  }else{
		this.movieList = data['list'];
		this.movieList = this.movieList.map(item=>{
		  item['poster'] = 'http://localhost:3000/api/movie/poster/'+item['poster']
		  return item;
		})			  
	  }
	})
  }

  initialiseEditForm(movie){
	  this.movieEditForm = this.fb.group({
		  _id:[(movie && movie._id) || null, Validators.required],
		  releaseYear:[(movie && movie.releaseYear) || null, Validators.required],
		  cast:[ (movie && movie.cast) ||null, Validators.required],
		  movieName:[(movie && movie.movieName) || null, Validators.required],
		  plot:[(movie && movie.plot) || null, Validators.required],
		  poster:[(movie && movie.poster) || null, Validators.required]
	  })
  }

  saveEditForm(){
	if(this.movieEditForm.invalid){
		this.validator.markControlsTouched(this.movieEditForm)
		return
	}

	this.movieService.editMovie(this.movieEditForm.value)
	.subscribe(data=>{
		if(data['error']){
			alert(data['message'])
		}else{
			alert(data['message']);
			this.getMovieList();
			this.triggerFalseClick();
			this.movieEditForm.reset();
		}
		
	})
  }

  editMovie(movie){
	  this.initialiseEditForm(movie);
  }

  getActorList(){
	this.movieService.getActorList()
	.subscribe(data=>{
		if(data['error']){
			alert("Something went wrong "+data['message'])
		}
		else{
			this.actorList = data['list']
		}
	})
}

}
