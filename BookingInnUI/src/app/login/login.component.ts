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

  // public user = {
  //   uid:'',
  //   uname: '',
  //   uaddress: '',
  //   ucell: '',
  //   uemail: '',
  //   upassword: '',

  // };

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

  user : User = new User();

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
        }, (error)=>{
          console.log(error);
          alert('not submitted');

        }
        
      )
    }

  }







}
