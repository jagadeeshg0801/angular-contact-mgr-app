import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenicated: boolean = false;
  constructor(private http: HttpClient) { }

  login(){
    this.isAuthenicated = true;
  }

  logout(){
    this.isAuthenicated = false;
  }

  getAuthentication(){
    return this.isAuthenicated;
  }

  passwordValidator(control: FormControl):any {
    const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (control.value && nameRegexp.test(control.value)) {
      console.log('value', control)
       return { invalidPassword: true };
    }
    return null
}
}
