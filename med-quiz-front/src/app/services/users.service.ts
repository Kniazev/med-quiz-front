import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {UserModel} from "../model/user.model";
import {BaseApiServices} from "./base-api.services";


@Injectable()
export class UsersService extends BaseApiServices{
  constructor(protected http: Http){
      super(http)
  }

  getUserByEmail(email:string): Observable<UserModel>{
    return this.http.get(`${this.getUrl('users')}?-${email}`)
      .map((response: Response) => response.json())
      .map((user: UserModel[]) => user[0] ? user[0] : undefined);
  }

  createUser(user:UserModel): Observable<UserModel>{
    // return this.http.post("http://localhost:3500/users", user)
    //   .map((response: Response) => response.json());
    return this.post('users',user);
  }
}
