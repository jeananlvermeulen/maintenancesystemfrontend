import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrationService} from '../registration.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = new User()
   msg = '';

  constructor(private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("response received")
      this.router.navigate(['/maintenancelist'])
     },
      error =>{
        console.log("exeption occured");
        this.msg="Bad credentials, please enter valid email and password";
      }
    )
  }

  gotoregistration(){
    this.router.navigate(['/registration'])
  }

}
