export class CommentsModel {
  id:number;
  name: string;
  comment: string;
  img: string;
  time: string;

  constructor(
    id:number,
    name:string,
    comment: string,
    img: string,
    time: string
  )
  {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.img = img;
    this.time = time;
  }
}
/**
 * Created by ivetamakedonska on 9/26/16.
 */
