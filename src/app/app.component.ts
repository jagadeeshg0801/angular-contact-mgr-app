import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-contact-mgr-app';
  isLogin = false;
  constructor(private auth: AuthService){

  }
  ngOnInit(): void {
        this.isLogin = this.auth.getAuthentication();
  }
}
