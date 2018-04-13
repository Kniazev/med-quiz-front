import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../model/user.model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService,
              private authSevice: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup(
      {
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
      }
    )
  }

  onSubmit(){
   const data = this.form.value;

   this.usersService.getUserByEmail(data.email)
     .subscribe((user: UserModel) =>{
       console.log()
       if(user) {
         if (user.password === data.password) {
           window.localStorage.setItem('user', JSON.stringify(user));
           this.authSevice.login();
         } else {
           alert('Password is wrong.');
         }
       }else{
         alert('This user is not exist.');
       }
     })
  }

}
