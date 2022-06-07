import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  get f() { return this.loginForm.controls; }
  get username() { return this.loginForm.controls['username']};
  get password() { return this.loginForm.controls['password']};
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  
  loginSubmit(){
    if(this.loginForm.valid){
      this.router.navigate(['/login']);
    }
  }

}

export class CustomValidators {
  
}
