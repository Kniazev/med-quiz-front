import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../model/user.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null,[]),
      'password': new FormControl(null,[]),
      'firstName': new FormControl(null,[]),
      'lastName': new FormControl(null,[]),
      'confirmPassword': new FormControl(null,[])
    });
  }

  onSubmit(){
    const {email,password, firstName, lastName} = this.form.value;
    const user = new UserModel(null,email,password,'user', firstName, lastName);

    this.userService.createUser(user)
      .subscribe((user) =>{
        console.log(user)
      });
  }

}
