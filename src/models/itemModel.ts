export class ItemModel {
  id:number;
  name:string;
  img:string;
  workTimeWeekday: string;
  workTimeSaturday: string;
  workTimeSunday: string;
  city: string;
  address: string;
  moreInfo: string;
  clicked: boolean;
  likes: Array<any>;
  comments: Array<any>;

  constructor(
    id:number,
    name:string,
    img:string,
    workTimeWeekday: string,
    workTimeSaturday: string,
    workTimeSunday:string,
    city: string,
    address: string,
    moreInfo: string,
    clicked: boolean,
    likes: Array<any>,
    comments: Array<any>
  )
  {
    this.id = id;
    this.name = name;
    this.img = img;
    this.workTimeWeekday = workTimeWeekday;
    this.workTimeSaturday = workTimeSaturday;
    this.workTimeSunday = workTimeSunday;
    this.city = city;
    this.address = address;
    this.moreInfo = moreInfo;
    this.clicked = clicked;
    this.likes = likes;
    this.comments = comments;
  }
}
