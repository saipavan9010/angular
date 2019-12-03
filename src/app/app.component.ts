import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  receivedChildMessage: string;
  messageToSendP: string = '';
  submitted = false;
  registerForm: FormGroup;
  heroes={};
  constructor(private formBuilder: FormBuilder,private commonservice:CommonService) { }


  onKey(event:any) { // without type info
    this.messageToSendP = event.target.value;
    console.log(this.messageToSendP); 
  }

  getMessage(message: string) {
    this.receivedChildMessage = message;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    });
}
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  this.commonservice.addHeros(this.registerForm.value).subscribe(heroes => this.heroes = heroes);
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}




}
