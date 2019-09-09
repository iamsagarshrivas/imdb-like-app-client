import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError as _throw } from 'rxjs';

@Injectable()
export class HTTPService {
	constructor(private http:HttpClient){}
	URL :string =  "http://localhost:3000"
	get = (url,queryString=null)=>{
		return this.http.get(`${url}?${queryString}`)
	}

	post = (url,data)=>{
		return this.http.post(url,data);
	}

	put = (url, data)=>{
		return this.http.put(url,data);
	}
	
	public getFileData(url: string): Observable<any> {
		return this.http.get(url, { responseType: 'arraybuffer' }).pipe(
		  map(response => {
			return response;
		  }),
		  catchError((e: any) => {
			return _throw(e);
		  })
		);
	  }

}
