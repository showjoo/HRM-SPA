import { Component } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  registered:boolean=false;
  submitted:boolean = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
    })
  }
  getregisterFormControl(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid){
      console.table(this.registerForm.value);
    }
  }
}
