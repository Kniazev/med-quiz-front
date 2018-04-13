import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../model/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService) {}

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
       if(user && user.password === data.password){

       } else {
         alert('This user is not exist or password is wrong.');
       }
     })
  }

}
