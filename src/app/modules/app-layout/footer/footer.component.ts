import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormValidatorService } from 'src/app/services/form-validator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  registerForm:FormGroup
  get name(){
  	return this.registerForm.get('name');
  }
  get email(){
  	return this.registerForm.get('email');
  }
  get password(){
	return this.registerForm.get('password');
  }

  constructor(private fb:FormBuilder, private validator:FormValidatorService) { }

  ngOnInit() {
	  this.initialiseRegisterForm()
  }

  initialiseRegisterForm(){
	this.registerForm = this.fb.group({
		name:[null,[Validators.required]],
		email:[null,[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
		password:[null,[Validators.required]],
	})
  }
  
  openRegisterForm(){
  	this.initialiseRegisterForm();
  }
  
  submit(){
	  if(this.registerForm.invalid){
		  this.validator.markControlsTouched(this.registerForm);
		  return
	  }
	  console.log(this.registerForm.value);  	
  }

}
