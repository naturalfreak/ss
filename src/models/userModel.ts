export class UserModel {
  id:number;
  name:string;
  img:string;
  email: string;
  password: string;
  type: string;
  gsm: string;

  constructor(
    id:number,
    name:string,
    img:string,
    email: string,
    password: string,
    type: string,
    gsm: string
  )
  {
    this.id = id;
    this.name = name;
    this.img = img;
    this.email = email;
    this.password = password;
    this.type = type;
    this.gsm = gsm;
  }
}
