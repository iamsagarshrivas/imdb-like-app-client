import { Injectable } from '@angular/core';
import { HTTPService } from './../../services/http.service';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {

	constructor(private http:HTTPService){}

	url = this.http.URL;

	addActor = (actor)=>{
		return this.http.post(`${this.url}/api/actor/addActor`,actor);
	}

	getActorList = ()=>{
		return this.http.get(`${this.url}/api/actor/findActorList`);
	}

	addMovie = (formData)=>{		
		return this.http.post(`${this.url}/api/movie/addMovie`,formData);
	}

	editMovie = (formData)=>{
		return this.http.put(`${this.url}/api/movie/addMovie`,formData);
	}

	getMovieList = ()=>{
		return this.http.get(`${this.url}/api/movie/findAllMovies`);
	}

	getImage = (fileName)=>{
		return this.http.getFileData(`${this.url}/api/movie/poster/${fileName}`)
	}

}
