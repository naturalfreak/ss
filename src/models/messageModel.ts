export class MessageModel {
  id:number;
  name:string;
  img:string;
  service: string;
  date: string;
  time: string;
  moreInfo: string;
  accept: string;
  color: string;
  condition: string;
  askedTime: string;

  constructor(
    id:number,
    name:string,
    img:string,
    service: string,
    date: string,
    time: string,
    moreInfo: string,
    accept: string,
    color: string,
    condition: string,
    askedTime: string
  )
  {
    this.id = id;
    this.name = name;
    this.img = img;
    this.service = service;
    this.date = date;
    this.time = time;
    this.moreInfo = moreInfo;
    this.accept = accept;
    this.color = color;
    this.condition = condition;
    this.askedTime = askedTime;
  }
}
