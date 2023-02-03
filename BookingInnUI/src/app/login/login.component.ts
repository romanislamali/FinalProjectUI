import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private userservice : UserService){

  }

  

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


  public user : User = new User();

  public alluser!:any;
  getAllUser(){
    this.alluser = this.userservice.getAllUser();
    
  }

  login(){
    if(this.user.uemail==this.alluser.uemail){
      console.log("******************");
      alert('Login Successfull');
    }
    else{
      alert('Email or Password invaid!!');
    }

  }

  

  formSubmit(){
  
    console.log(this.user);
    
    if(this.user.uname == '' || this.user.uname == null){
      alert('user name is required');
      return;
    } else{
     
      this.userservice.createuser(this.user).subscribe(
        (data)=>{
          console.log(data);
          alert('data submitted successfully');
          this.clear();
        }, (error)=>{
          console.log(error);
          alert('not submitted');
          
        } 

      )
    }

  }

  clear(){
    this.user.uname='';
    this.user.ucell='';
    this.user.uaddress='';
    this.user.uemail='';
    this.user.upassword='';

  }





}
