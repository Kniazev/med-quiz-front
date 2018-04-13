export class UserModel{
  constructor(public id?:number,
              public email?:string,
              public password?:string,
              public role?:string,
              public firstName?: string,
              public lastName?: string){

  }
}
