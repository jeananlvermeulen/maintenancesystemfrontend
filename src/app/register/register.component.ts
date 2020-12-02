import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import{User} from '../user';
import {RegistrationService} from '../registration.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
   msg = '';

  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {

  }

  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{console.log("response received");
      this.router.navigate(['/login']);
     },
      error =>{
        console.log("exeption occured");
        this.msg=error.error;
      }
    )
  }

  gotologin(){
    this.router.navigate(['/login'])
  }

}
