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
      .map((response: Response) => response.json())
      .map((user: UserModel[]) => user[0] ? user[0] : undefined);;
  }

  createUser(user:UserModel): Observable<UserModel>{
    return this.http.post("http://localhost:3500/users", user)
      .map((response: Response) => response.json());
  }
}
