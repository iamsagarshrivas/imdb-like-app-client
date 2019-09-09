import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidatorService } from '../../../services/form-validator.service'
import { MoviesService } from '../movies.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-add-movie',
	templateUrl: './add-movie.component.html',
	styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
	formData: FormData;
	labelName: string = 'Choose File';
	imageSrc;
	actorForm: FormGroup;
	actorList:[]

	@ViewChild('fileInput') fileInput;


	constructor(private fb: FormBuilder, 
		private validator: FormValidatorService,
		private movieService : MoviesService,
		private sanitizer: DomSanitizer,
		private cd: ChangeDetectorRef
		) { }

	movieForm: FormGroup;
	configDropdown = {
		displayKey: 'actorName',
		search: true,
		height: '250px',
		placeholder: 'Select'
	  };

	ngOnInit() {
		this.movieForm = this.fb.group({
			movieName: [null, Validators.required],
			releaseYear: [null, [Validators.required, Validators.min(1878), Validators.max(new Date().getFullYear()+10)]],
			plot: [null, Validators.required],
			cast: [null, Validators.required],
			poster: [ null, Validators.required],
			file: [null,Validators.required]
		})

		this.initialiseActorForm();
		this.getActorList();
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

	get movieName() {
		return this.movieForm.get('movieName');
	}
	get releaseYear() {
		return this.movieForm.get('releaseYear');
	}
	get plot() {
		return this.movieForm.get('plot');
	}
	get cast() {
		return this.movieForm.get('cast');
	}
	get poster() {
		return this.movieForm.get('poster');
	}

	get actorName(){
		return this.actorForm.get('actorName') || null;
	} 
	get gender(){
		return this.actorForm.get('gender') || null;
	} 
	get dob(){
		return this.actorForm.get('dob') || null;
	} 
	get bio(){
		return this.actorForm.get('bio') || null;
	} 

	initialiseActorForm(){
		this.actorForm = this.fb.group({
			actorName:[null,Validators.required],
			gender:['male',Validators.required],
			dob:[null,Validators.required],
			bio:[null,Validators.required]
		});
	}

	onSave() {
		if (this.movieForm.invalid) {
			this.validator.markControlsTouched(this.movieForm)
			return
		}
		
		this.movieService.addMovie(this.movieForm.value)
		.subscribe(data=>{			
			if(data['error']){
				alert(data['message'])
			}else{
				this.movieForm.reset();
				alert(data['message'])
			}
		});
	}
	onCancel() {
		this.movieForm.reset();
		this.actorForm.reset();
		this.labelName = null;
		this.imageSrc = null;
	}
	onActorSave(){
		if(this.actorForm.invalid){
			this.validator.markControlsTouched(this.actorForm)
			return;
		}
		this.movieService.addActor(this.actorForm.value)
		.subscribe(
			data=>{
				if(data['error']){
					alert('Something went wrong',)
				}
				else{
					alert(data['message']);
					this.getActorList();
					this.triggerFalseClick();
				}
			}
		)		
	}

	transform(url){
		return this.sanitizer.bypassSecurityTrustUrl(url)
	}

	onFileChange(event){

		let reader = new FileReader();
 
		if(event.target.files && event.target.files.length) {
		  const [file] = event.target.files;
		  reader.readAsDataURL(file);
		
		  reader.onload = () => {
			this.movieForm.patchValue({
			  file: reader.result
			});			
			this.cd.markForCheck();
		  };
		}
		this.labelName = event.target.files[0].name;
		this.imageSrc = URL.createObjectURL(event.target.files[0])
	}

	@ViewChild('closeButton') closeButton: ElementRef<HTMLElement>;
	triggerFalseClick() {	
    	let el: HTMLElement = this.closeButton.nativeElement;
    	el.click();
	}
}
