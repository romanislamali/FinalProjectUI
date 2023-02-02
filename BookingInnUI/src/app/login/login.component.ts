import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  registerCard: boolean = false;
  loginCard: boolean = true;

  showRegister() {
    this.loginCard = false;
    this.registerCard = true;
    
  }

  showLogin() {
    this.loginCard = true;
    this.registerCard = false;
  }

}
