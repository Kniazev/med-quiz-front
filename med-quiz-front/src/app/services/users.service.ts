import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {UserModel} from "../model/user.model";


@Injectable()
export class UsersService{
  constructor(private http: Http){

  }

  getUserByEmail(email:string): Observable<UserModel>{
    return this.http.get(`http://localhost:3500/users?-${email}`)
      .map((response: Response) => response.json());
  }
}
